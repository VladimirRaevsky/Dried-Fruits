import { type HTMLAttributes, type ReactNode } from 'react'

export enum ParagraphSize {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XS',
}

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    className?: string
    children: ReactNode
    size: ParagraphSize
}
