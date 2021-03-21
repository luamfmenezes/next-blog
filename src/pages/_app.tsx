import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import themes from '../styles/themes'

export default function App({ Component, pageProps }) {
    const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(
        'light'
    )

    return (
        <ThemeProvider theme={themes.ligth}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
