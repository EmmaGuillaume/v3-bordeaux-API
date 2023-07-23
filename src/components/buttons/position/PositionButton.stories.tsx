import { Meta, StoryObj } from '@storybook/react'
import PositionButton from './PositionButton'
import { mockProps } from './PositionButton.mocks'

export default {
  component: PositionButton
} as Meta<typeof PositionButton>

type Story = StoryObj<typeof PositionButton>

export const Base: Story = {
  args: mockProps.base
}
