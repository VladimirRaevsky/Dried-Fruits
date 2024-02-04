import { type FC } from 'react'
import { ClassNames } from 'shared/lib/helpers/ClassNames/ClassNames'
import { TitleLevel, type TitleProps } from '../types'
import cls from './Title.module.scss'

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
