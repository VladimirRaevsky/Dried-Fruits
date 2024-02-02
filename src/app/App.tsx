import { useEffect, type FC } from 'react'
import { AppRouter } from 'app/providers/router'
import { Header } from 'widgets/ui/Header'

import { ClassNames } from 'shared/lib/helpers/ClassNames/ClassNames'
import { useTheme } from './providers/ThemeProviders'
import { Container } from 'shared/ui/Container/ui/Container'

import '../shared/config/i18/i18n'
import './styles/index.scss'
import { useTranslation } from 'react-i18next'
import { AppButton } from 'shared/ui/AppButton'
import { ThemeButton, TypeButton } from 'shared/ui/AppButton/types'
import { IoIosSearch } from 'react-icons/io'

import cls from './App.module.scss'

export const App: FC = () => {
    const { theme, handleThemeToggle } = useTheme()

    const { i18n } = useTranslation()

    const handleLangToggle = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Header />
            <AppButton
                onClick={handleThemeToggle}
                type={TypeButton.BUTTON}
                theme={ThemeButton.DEFAULT}
                className={cls.right}
            >
                {'switch'}
            </AppButton>

            <AppButton
                onClick={handleLangToggle}
                type={TypeButton.BUTTON}
                theme={ThemeButton.DEFAULT}
            >
                {'lang'}
            </AppButton>
            <Container>
                <AppRouter />
            </Container>
        </div>
    )
}
