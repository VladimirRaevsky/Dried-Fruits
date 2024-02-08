import { type FC } from 'react'
import { ClassNames } from 'shared/lib/helpers/ClassNames'

import cls from './Paragraph.module.scss'

import { type ParagraphProps } from '../types'

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
