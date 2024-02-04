import { type FC } from 'react'
import { ClassNames } from 'shared/lib/helpers/ClassNames/ClassNames'
import { type ParagraphProps } from '../types'
import cls from './Paragraph.module.scss'

export const Paragraph: FC<ParagraphProps> = (props) => {
    const { className = '', children, size, ...othersProps } = props

    return (
        <p
            className={ClassNames(cls.paragraph, {}, [cls[size], className])}
            {...othersProps}
        >
            {children}
        </p>
    )
}
