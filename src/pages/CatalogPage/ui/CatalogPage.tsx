import { FC } from 'react';
import cls from './CatalogPage.module.scss';

interface CatalogPageProps {
    className?: string;
}

const CatalogPage: FC<CatalogPageProps> = (props) => {
    const { className } = props;

    return (
        <div className=''>
            CatalogPage
        </div>
    );
}

export default CatalogPage;