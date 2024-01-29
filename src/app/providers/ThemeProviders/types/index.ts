import { type ReactNode } from 'react'
import { type Theme } from '../lib/ThemeContext'

export interface ThemeProviderProps {
    children: ReactNode
    themeProps?: Theme
}
