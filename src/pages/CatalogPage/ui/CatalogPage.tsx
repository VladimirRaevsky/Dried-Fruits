import { t } from 'i18next'
import { type FC } from 'react'
import cls from './CatalogPage.module.scss'

interface CatalogPageProps {
    className?: string
}

const CatalogPage: FC<CatalogPageProps> = (props) => {
    const { className } = props

    return <div className="">{t('CatalogPage')}</div>
}

export default CatalogPage
