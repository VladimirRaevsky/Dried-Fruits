import { type FC } from 'react'
import { ClassNames } from 'shared/lib/helpers/ClassNames'

import cls from './Title.module.scss'

import { TitleLevel, type TitleProps } from '../types'

export const Title: FC<TitleProps> = (props) => {
    const { className = '', children, size, ...othersProps } = props

    const Tag = TitleLevel[size]

    return (
        <Tag
            className={ClassNames(cls.title, {}, [cls[size], className])}
            {...othersProps}
        >
            {children}
        </Tag>
    )
}
