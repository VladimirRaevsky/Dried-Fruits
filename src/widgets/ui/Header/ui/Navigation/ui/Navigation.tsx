import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { ClassNames } from 'shared/lib/helpers/ClassNames'
import { AppLink } from 'shared/ui/AppLink'

import cls from './Navigation.module.scss'

import { Navigation_Paths } from '../const'
import { type NavProps } from '../types'

export const Navigation: FC<NavProps> = (props) => {
    const { className = '' } = props

    const { t } = useTranslation('nav')

    const { pathname } = useLocation()

    const isActive = (path: string): boolean => path === pathname

    return (
        <nav className={ClassNames(cls.nav, {}, [className])}>
            <ul className={cls.navList}>
                {Navigation_Paths.map((el) => (
                    <li
                        key={el.path}
                        className={ClassNames(cls.navItem, {}, [
                            isActive(el.path) ? cls.active : '',
                        ])}
                    >
                        <AppLink path={el.path}>{t(el.text)}</AppLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
