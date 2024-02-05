import { type FC } from 'react'
import Img from 'shared/assets/img/card.png'
import Logo from 'shared/assets/img/logo.svg'
import Mario from 'shared/assets/img/mario.png'
import Cat from 'shared/assets/img/cat.jpeg'

interface MainePageProps {
    className?: string
}

const MainPage: FC<MainePageProps> = (props) => {
    return (
        <div className="">
            <img src={Img} alt="" />
            <img src={Mario} alt="" />
            <img src={Cat} alt="" />
            <Logo />
        </div>
    )
}

export default MainPage
