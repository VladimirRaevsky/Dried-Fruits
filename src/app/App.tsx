import { type FC } from 'react'
import { AppRouter } from 'app/providers/router'
import { Header } from 'widgets/ui/Header'

import { ClassNames } from 'shared/lib/helpers/ClassNames/ClassNames'
import { useTheme } from './providers/ThemeProviders'
import { Container } from 'shared/ui/Container/ui/Container'

import '../shared/config/i18/i18n'
import './styles/index.scss'
import { useTranslation } from 'react-i18next'

export const App: FC = () => {
    const { theme, handleThemeToggle } = useTheme()

    const { i18n } = useTranslation()

    const handleLangToggle = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Header />
            <button onClick={handleThemeToggle}>switch</button>
            <button onClick={handleLangToggle}>lang</button>
            <Container>
                <AppRouter />
            </Container>
        </div>
    )
}
