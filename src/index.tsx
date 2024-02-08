import { App } from 'app'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProviders'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

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
