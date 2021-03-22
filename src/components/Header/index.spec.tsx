import React from 'react'
import { render, fireEvent, wait, waitFor } from '@testing-library/react'
import Header from './index'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/themes'

const mockBack = jest.fn()

jest.mock('next/router', () => {
    return {
        useRouter: () => ({
            back: mockBack,
        }),
    }
})

describe('Header page', () => {
    beforeEach(() => {})

    it('should not render backButton if not recieve props hasBackButton', async () => {
        const { queryByTestId } = render(
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
        )

        const backbutton = queryByTestId('header-back-button')

        expect(backbutton).toBeFalsy()
    })

    it('should render backButton if recieve props hasBackButton', async () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Header hasBackButton />
            </ThemeProvider>
        )

        const backbutton = getByTestId('header-back-button')

        expect(backbutton).toBeTruthy()
    })

    it('should go back if button-back is clicked', async () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Header hasBackButton />
            </ThemeProvider>
        )

        const backbutton = getByTestId('header-back-button')

        fireEvent.click(backbutton)

        await waitFor(() => {
            expect(mockBack).toHaveBeenCalled()
        })
        expect(backbutton).toBeTruthy()
    })
})
