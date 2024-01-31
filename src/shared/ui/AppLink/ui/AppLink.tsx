import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { ClassNames } from 'shared/lib/helpers/ClassNames/ClassNames'
import { type AppLinkProps } from '../types'
// import cls from './AppLink.module.scss'

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className = '', path, children } = props

    return (
        <Link to={path} className={ClassNames('cls.appLink', {}, [className])}>
            {children}
        </Link>
    )
}
