import { ErrorPage } from 'pages/ErrorPage'
import React, { type ReactNode, type ErrorInfo, Suspense } from 'react'
import { type ErrorBoundaryProps, type ErrorBoundaryState } from '../types'

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        if (error != null) {
            return { hasError: true }
        } else {
            return { hasError: false }
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo)
    }

    render(): ReactNode {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <Suspense fallback={null}>
                    <ErrorPage />
                </Suspense>
            )
        }

        return children
    }
}
