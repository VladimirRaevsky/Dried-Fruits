import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AppButton, ThemeButton, TypeButton } from 'shared/ui/AppButton'
import { Paragraph, ParagraphSize } from 'shared/ui/Paragraph'

import cls from './ErrorPage.module.scss'

export const ErrorPage: FC = () => {
    const { t } = useTranslation('error')

    const onThrow = (): void => {
        location.reload()
    }

    return (
        <div className={cls.error}>
            <Paragraph size={ParagraphSize.L} id={cls.errorP}>
                {t('Не известная ошибка')}
            </Paragraph>

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
