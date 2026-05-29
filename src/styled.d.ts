import 'styled-components'
import type { theme } from './styles/theme'

type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: AppTheme['colors']
    shadow: AppTheme['shadow']
  }
}
