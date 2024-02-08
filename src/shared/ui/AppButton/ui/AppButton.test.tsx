import { render, screen } from '@testing-library/react'

import { AppButton } from './AppButton'

import { ThemeButton, TypeButton } from '../types'

describe('AppButton.test', () => {
    test('test button', () => {
        render(
            <AppButton type={TypeButton.BUTTON} theme={ThemeButton.DEFAULT}>
                Test
            </AppButton>,
        )
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
})
