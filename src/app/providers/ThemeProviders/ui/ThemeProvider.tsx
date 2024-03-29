import { type FC, useMemo, useState, useEffect } from 'react'

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext'
import { type ThemeProviderProps } from '../types'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    themeProps,
}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = themeProps ?? theme
        // document.body.setAttribute('data-theme', themeProps ?? theme)
    }, [theme, themeProps])

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
