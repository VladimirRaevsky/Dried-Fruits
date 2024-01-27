import { FC } from 'react';
import cls from './MainePage.module.scss';

interface MainePageProps {
    className?: string;
}

const MainPage: FC<MainePageProps> = (props) => {
    const { className } = props;

    return (
        <div className=''>
            MainPage
        </div>
    );
}

export default MainPage;