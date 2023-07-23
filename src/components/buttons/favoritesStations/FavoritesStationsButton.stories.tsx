import { Meta, StoryObj } from '@storybook/react'
import FavoritesStationsButton from './FavoritesStationsButton'
import { mockProps } from './FavoritesStationsButton.mocks'

export default {
  component: FavoritesStationsButton
} as Meta<typeof FavoritesStationsButton>

type Story = StoryObj<typeof FavoritesStationsButton>

export const Base: Story = {
  args: mockProps.base
}
