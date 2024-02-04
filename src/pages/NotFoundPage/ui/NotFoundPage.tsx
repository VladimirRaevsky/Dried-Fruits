import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink'
import Bg from 'shared/assets/img/bg.png'
import Bg2x from 'shared/assets/img/bg@2x.png'
import cls from './NotFoundPage.module.scss'
import { Paragraph, ParagraphSize } from 'shared/ui/Paragraph'

export const NotFoundPage: FC = () => {
    const { t } = useTranslation('404')

    return (
        <div className={cls.page}>
            <div className={cls.pageWrapper}>
                <img
                    className={cls.pageImg}
                    srcSet={`${Bg} 1x, ${Bg2x} 2x`}
                    alt="логотип магазина"
                />
                <h1 className={cls.pageTitle}>404</h1>
                <Paragraph size={ParagraphSize.L} id={cls.pageP}>
                    {t('Страница не найдена')}
                </Paragraph>
                <Paragraph size={ParagraphSize.L} id={cls.pageP}>
                    {t('Перейти на главную')}
                </Paragraph>
                <AppLink className={cls.pageLink} path="/">
                    HOME
                </AppLink>
            </div>
        </div>
    )
}
