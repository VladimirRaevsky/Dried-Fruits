import { type ButtonHTMLAttributes, type ReactNode } from 'react'

export enum ThemeButton {
    DEFAULT = 'default',
    SQUARE = 'square',
    ARROW = 'arrow',
    ERROR = 'error'
}

export enum TypeButton {
    SUBMIN = 'submit',
    BUTTON = 'button',
}

export interface AppButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    type: TypeButton
    theme: ThemeButton
}
