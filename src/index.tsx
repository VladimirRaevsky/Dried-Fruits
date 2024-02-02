import { App } from 'app'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'app/providers/ThemeProviders'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const root = document.getElementById('root') as HTMLBodyElement
const app = createRoot(root)
app.render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
)
