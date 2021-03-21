interface ThemesParams {
    ligth: ThemeParams
    dark: ThemeParams
}

export interface ThemeParams {
    colors: {
        background: string
        text: string
        primary: string
    }
}

const themes: ThemesParams = {
    ligth: {
        colors: {
            background: '#f7f7f9',
            text: '#334',
            primary: '#0099ff',
        },
    },
    dark: {
        colors: {
            background: '#121214',
            text: '#e1e1e4',
            primary: '#0099ff',
        },
    },
}

export default themes
