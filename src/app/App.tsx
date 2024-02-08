import { AppRouter } from 'app/providers/router'
import { type FC } from 'react'

import '../shared/config/i18/i18n'
import './styles/index.scss'
import { useTranslation } from 'react-i18next'
import { ClassNames } from 'shared/lib/helpers/ClassNames'
import { AppButton } from 'shared/ui/AppButton'
import { ThemeButton, TypeButton } from 'shared/ui/AppButton/types'

import { Container } from 'shared/ui/Container'
import { Title, TitleSize } from 'shared/ui/Title'
import { Header } from 'widgets/ui/Header'

import cls from './App.module.scss'
import { useTheme } from './providers/ThemeProviders'

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
            <Title size={TitleSize.H1}>{'Заголовок'}</Title>
            <Container>
                <AppRouter />
            </Container>
        </div>
    )
}
