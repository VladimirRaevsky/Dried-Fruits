import { t } from 'i18next'
import { type FC } from 'react'

interface CatalogPageProps {
    className?: string
}

const CatalogPage: FC<CatalogPageProps> = (props) => {
    return <div className="">{t('CatalogPage')}</div>
}

export default CatalogPage
