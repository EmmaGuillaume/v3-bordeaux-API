import { Meta, StoryObj } from '@storybook/react'
import BikesOrPlacesButton from './BikesOrPlacesButton'
import { mockProps } from './BikesOrPlacesButton.mocks'

export default {
  component: BikesOrPlacesButton
} as Meta<typeof BikesOrPlacesButton>

type Story = StoryObj<typeof BikesOrPlacesButton>

export const Base: Story = {
  args: mockProps.base
}
