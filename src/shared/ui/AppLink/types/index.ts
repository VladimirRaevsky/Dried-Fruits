import { type ReactNode } from 'react'
import { type LinkProps } from 'react-router-dom'

export interface AppLinkProps extends Omit<LinkProps, 'to'> {
    className?: string
    path: string
    children: ReactNode
}
