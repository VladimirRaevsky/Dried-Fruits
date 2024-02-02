import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AppButton } from 'shared/ui/AppButton'
import { ThemeButton, TypeButton } from 'shared/ui/AppButton/types'

import cls from './ErrorPage.module.scss'

export const ErrorPage: FC = () => {
    const { t } = useTranslation('error')

    const onThrow = (): void => {
        location.reload()
    }

    return (
        <div className={cls.error}>
            <p>{t('НЕ ИЗВЕСТНАЯ ОШИБКА')}</p>
            <AppButton
                theme={ThemeButton.ERROR}
                type={TypeButton.BUTTON}
                onClick={onThrow}
            >
                {t('Обновить страницу')}
            </AppButton>
        </div>
    )
}
