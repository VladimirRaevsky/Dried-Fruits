import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink'
import Bg from 'shared/assets/img/bg.png'
import Bg2x from 'shared/assets/img/bg@2x.png'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
    const { t } = useTranslation('404')

    return (
        <div className={cls.foundPage}>
            <div className={cls.foundPageWrapper}>
                <img className={cls.foundPageImg} srcSet={`${Bg} 1x, ${Bg2x} 2x`} alt="логотип магазина" />
                <h1 className={cls.foundPageTitle}>404</h1>
                <p className={cls.foundPageP}>{t('Страница не найдена')}</p>
                <p className={cls.foundPageP}>
                    {t('Перейти на главную')}
                </p>
                <AppLink className={cls.foundPageLink} path="/">
                    HOME
                </AppLink>
            </div>
        </div>
    )
}
