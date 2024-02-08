import { type FC } from 'react'
import { ClassNames } from 'shared/lib/helpers/ClassNames'

import cls from './Container.module.scss'

import { type ContainerProps } from '../types'

export const Container: FC<ContainerProps> = (props) => {
    const { className = '', children } = props

    return (
        <div className={ClassNames(cls.container, {}, [className])}>
            {children}
        </div>
    )
}
