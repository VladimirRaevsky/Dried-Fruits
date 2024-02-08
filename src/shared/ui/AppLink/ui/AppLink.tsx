import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { ClassNames } from 'shared/lib/helpers/ClassNames'

import { type AppLinkProps } from '../types'

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className = '', path, children, ...othersProps } = props

    return (
        <Link
            to={path}
            className={ClassNames('cls.appLink', {}, [className])}
            {...othersProps}
        >
            {children}
        </Link>
    )
}
