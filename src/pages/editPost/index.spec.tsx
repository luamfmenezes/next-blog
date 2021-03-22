import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import EditPost from './index'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes'
import localPosts from '../../stores/localPosts'
import MockDate from 'mockdate'

const mockPost = () => ({
    author: 'jhondoe',
    content: 'content',
    description: 'description',
    title: 'title',
    url: 'url',
    urlToImage: 'http://url.com',
    publishedAt: new Date().toString(),
    id: 'generated-id',
})

jest.mock('next/router', () => ({
    useRouter: () => ({
        push: jest.fn(),
        query: { id: 'id' },
    }),
}))

describe('Header page', () => {
    beforeEach(() => {
        MockDate.set(new Date())
    })
    afterEach(() => {
        MockDate.reset()
    })

    describe('Update', () => {
        it('should render an Edit page when initialized with id in query params', async () => {
            jest.spyOn(localPosts, 'findOne').mockReturnValue(mockPost())

            const { findByText } = render(
                <ThemeProvider theme={theme}>
                    <EditPost />
                </ThemeProvider>
            )

            const editText = await findByText('Edit article')
            const saveText = await findByText('Save article')

            await waitFor(() => {
                expect(editText).toBeTruthy()
                expect(saveText).toBeTruthy()
            })
        })
        it('should call save with form params when submit-button is clicked', async () => {
            jest.spyOn(localPosts, 'findOne').mockReturnValue(mockPost())
            const spySave = jest.spyOn(localPosts, 'save')

            const { findByText, findByPlaceholderText } = render(
                <ThemeProvider theme={theme}>
                    <EditPost />
                </ThemeProvider>
            )

            const saveButton = await findByText('Save article')

            fireEvent.change(await findByPlaceholderText('Title'), {
                target: { value: 'title' },
            })
            fireEvent.change(await findByPlaceholderText('Description'), {
                target: { value: 'description' },
            })
            fireEvent.change(await findByPlaceholderText('Author'), {
                target: { value: 'author' },
            })

            fireEvent.change(
                await findByPlaceholderText('Write your article here 👇'),
                {
                    target: { value: 'content' },
                }
            )

            fireEvent.click(saveButton)

            await waitFor(() => {
                expect(spySave).toHaveBeenCalledWith({
                    id: 'id',
                    publishedAt: new Date().toString(),
                    author: 'author',
                    content: 'content',
                    description: 'description',
                    title: 'title',
                    urlToImage: 'http://url.com',
                    url: 'url',
                })
            })
        })
    })
    describe('Create', () => {
        it('should render a Create page when initialized without id in query params', async () => {
            jest.spyOn(require('next/router'), 'useRouter').mockReturnValue({
                query: {},
                push: jest.fn(),
            })

            const { findByText } = render(
                <ThemeProvider theme={theme}>
                    <EditPost />
                </ThemeProvider>
            )

            const createNewArticle = await findByText('Create new article')
            const createArticle = await findByText('Create article')

            await waitFor(() => {
                expect(createNewArticle).toBeTruthy()
                expect(createArticle).toBeTruthy()
            })
        })
    })
})
