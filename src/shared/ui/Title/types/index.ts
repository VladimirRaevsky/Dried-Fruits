import { type HTMLAttributes, type ReactNode } from 'react'

export enum TitleSize {
    H3 = 'M',
    H2 = 'L',
    H1 = 'XL',
}

type TitleType = 'h1' | 'h2' | 'h3'

export interface TitleProps extends HTMLAttributes<HTMLElement> {
    className?: string
    children: ReactNode
    size: TitleSize
}

export const TitleLevel: Record<TitleSize, TitleType> = {
    L: 'h3',
    M: 'h2',
    XL: 'h1',
}
