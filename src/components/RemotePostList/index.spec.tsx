import React from 'react'
import { render, fireEvent, wait, waitFor } from '@testing-library/react'
import RemotePostList from './index'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes'
import AxiosMockAdapter from 'axios-mock-adapter'
import api from '../../services/api'
import { v4 } from 'uuid'

const apiMock = new AxiosMockAdapter(api)

const mockBack = jest.fn()

jest.mock('next/router', () => {
    return {
        useRouter: () => ({
            back: mockBack,
        }),
    }
})

const mockPost = (data?: any) => ({
    author: 'jhondoe',
    content: 'content',
    description: 'description',
    title: 'title',
    url: v4(),
    urlToImage: 'http://url.com',
    publishedAt: new Date().toString(),
    id: 'generated-id',
    ...data,
})

describe('Header page', () => {
    beforeEach(() => {})

    it('should render an empty list when initialized with initialPosts empty', async () => {
        const { findByTestId } = render(
            <ThemeProvider theme={theme}>
                <RemotePostList initialPosts={[]} />
            </ThemeProvider>
        )

        const list = await findByTestId('remote-post-list-container')

        await waitFor(() => {
            expect(list.firstChild).toBeFalsy()
        })
    })

    it('should render list when initialized with initialPosts', async () => {
        apiMock.onGet('/').reply(200, {
            articles: [],
        })

        const { findByText } = render(
            <ThemeProvider theme={theme}>
                <RemotePostList
                    initialPosts={[
                        mockPost({ title: 'title-1' }),
                        mockPost({ title: 'title-2' }),
                    ]}
                />
            </ThemeProvider>
        )

        const post1 = await findByText('title-1')
        const post2 = await findByText('title-2')

        await waitFor(() => {
            expect(post1).toBeTruthy()
            expect(post2).toBeTruthy()
        })
    })

    it('should load more posts when scrolled to the bottom of the page', async () => {
        const spy = apiMock.onGet('/').reply(200, {
            articles: [mockPost(), mockPost()],
        })

        const { findByTestId } = render(
            <ThemeProvider theme={theme}>
                <RemotePostList initialPosts={[mockPost(), mockPost()]} />
            </ThemeProvider>
        )

        const list = await findByTestId('remote-post-list-container')

        expect(list.childElementCount).toBe(2)

        fireEvent.scroll(window)

        await waitFor(() => {
            expect(list.childElementCount).toBe(4)
        })
    })
})
