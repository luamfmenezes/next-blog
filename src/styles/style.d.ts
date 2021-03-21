import 'styled-components'

import { ThemeParams } from './themes'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeParams {}
}
