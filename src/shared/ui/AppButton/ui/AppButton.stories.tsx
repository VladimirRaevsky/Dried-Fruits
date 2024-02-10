import { CiSearch } from 'react-icons/ci'
import { IoIosArrowBack } from 'react-icons/io'

import { AppButton } from './AppButton'

import { ThemeButton, TypeButton } from '../types'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/AppButton',
    component: AppButton,
    parameters: {},

    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

const DefaultArgs = {
    type: TypeButton.BUTTON,
    children: 'Кнопка'
}

export const DEFAULT: Story = {
    args: {
        ...DefaultArgs,
        theme: ThemeButton.DEFAULT
    }
}

export const SQUARE: Story = {
    args: {
        theme: ThemeButton.SQUARE,
        type: TypeButton.BUTTON,
        children: <CiSearch />
    }
}

export const ARROW: Story = {
    args: {
        type: TypeButton.BUTTON,
        theme: ThemeButton.ARROW,
        children: <IoIosArrowBack width={17} height={34} />
    }
}

export const ERROR: Story = {
    args: {
        ...DefaultArgs,
        theme: ThemeButton.ERROR
    }
}
