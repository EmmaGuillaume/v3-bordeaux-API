import { Meta, StoryObj } from '@storybook/react'
import NoRentInProgressCard from './NoRentInProgressCard'
import { mockProps } from './NoRentInProgressCard.mocks'

export default {
  component: NoRentInProgressCard
} as Meta<typeof NoRentInProgressCard>

type Story = StoryObj<typeof NoRentInProgressCard>

export const Base: Story = {
  args: mockProps.base
}
