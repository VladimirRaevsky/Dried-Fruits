import { type FC } from 'react'
import Img from 'shared/assets/img/card.png'
import Logo from 'shared/assets/img/logo.svg'
import cls from './MainePage.module.scss'

interface MainePageProps {
    className?: string
}

const MainPage: FC<MainePageProps> = (props) => {
    const { className } = props

    return (
        <div className="">
            <img src={Img} alt="" />
            <Logo />
        </div>
    )
}

export default MainPage
