import { type FC } from 'react'
import { ClassNames } from 'shared/lib/helpers/ClassNames/ClassNames'
import { Container } from 'shared/ui/Container/ui/Container'
import Img from 'shared/assets/img/card.png'
import Logo from 'shared/assets/img/logo.svg'
import cls from './Header.module.scss'
import { Navigation } from './Navigation/ui/Navigation'

interface HeaderProps {
    className?: string
}

export const Header: FC<HeaderProps> = (props) => {
    const { className = '' } = props

    return (
        <div className={ClassNames(cls.header, {}, [className])}>
            <Container>
                <Navigation />
                <img src={Img} alt="" />
                <Logo />
            </Container>
        </div>
    )
}
