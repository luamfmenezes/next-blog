import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import SwitchPostType from './index'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes'

describe('Header page', () => {
    it('should render an empty list when initialized with initialPosts empty', async () => {
        const spyChange = jest.fn()

        const { findByTestId } = render(
            <ThemeProvider theme={theme}>
                <SwitchPostType value="remote" onChange={spyChange} />
            </ThemeProvider>
        )

        const remote = await findByTestId('swith-post-type-remote-option')
        const local = await findByTestId('swith-post-type-local-option')

        await waitFor(() => {
            expect(remote).toHaveStyle('background:#fff')
            expect(remote).toHaveStyle(`border-color: ${theme.colors.primary}`)
            expect(local).toHaveStyle('border: 1px solid #ddd')
        })
    })

    it('should render an empty list when initialized with initialPosts empty', async () => {
        const spyChange = jest.fn()

        const { findByTestId } = render(
            <ThemeProvider theme={theme}>
                <SwitchPostType value="local" onChange={spyChange} />
            </ThemeProvider>
        )

        const remote = await findByTestId('swith-post-type-remote-option')
        const local = await findByTestId('swith-post-type-local-option')

        await waitFor(() => {
            expect(local).toHaveStyle('background:#fff')
            expect(local).toHaveStyle(`border-color: ${theme.colors.primary}`)
            expect(remote).toHaveStyle('border: 1px solid #ddd')
        })
    })

    it('should call onChange when clicked', async () => {
        const spyChange = jest.fn()

        const { findByTestId } = render(
            <ThemeProvider theme={theme}>
                <SwitchPostType value="remote" onChange={spyChange} />
            </ThemeProvider>
        )

        const local = await findByTestId('swith-post-type-local-option')

        fireEvent.click(local)

        await waitFor(() => {
            expect(spyChange).toHaveBeenCalled()
        })
    })
})
