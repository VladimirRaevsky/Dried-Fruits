import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import 'app/styles/index.scss'

export const StyleDecorator = (StoryComponent: StoryFn): JSX.Element => (
    <div>
        <StoryComponent />
    </div>
)

export const RouterDecorator = (StoryComponent: StoryFn): JSX.Element => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
)

// eslint-disable-next-line react/display-name
// export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn): JSX.Element => (
//     <div className={`app ${theme}`}>
//         <StoryComponent />
//     </div>
// )
