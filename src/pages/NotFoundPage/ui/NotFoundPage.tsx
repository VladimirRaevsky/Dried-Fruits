import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
    const { t } = useTranslation('404')

    return (
        <div className={cls.wrapper}>
            <h1 className={cls.wrapperTitle}>404</h1>
            <p className={cls.wrapperP}>{t('Страница не найдена')}</p>
            <p className={cls.wrapperP}>{t('Вы можете перейти на домашнюю страницу!')}</p>
            <AppLink className={cls.wrapperLink} path="/">
                HOME
            </AppLink>
        </div>
    )
}
