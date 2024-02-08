import { type FC } from 'react'

import { ClassNames } from 'shared/lib/helpers/ClassNames'

import cls from './AppButton.module.scss'

import { ThemeButton, type AppButtonProps } from '../types'

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        className = '',
        children,
        type,
        theme = ThemeButton.DEFAULT,
        ...othersProps
    } = props

    return (
        <button
            className={ClassNames(cls.appButton, {}, [className, cls[theme]])}
            type={type}
            {...othersProps}
        >
            {children}
        </button>
    )
}
