import { Meta, StoryObj } from '@storybook/react'
import StationCard from './StationCard'
import { mockProps } from './StationCard.mocks'

export default {
  component: StationCard
} as Meta<typeof StationCard>

type Story = StoryObj<typeof StationCard>

export const Base: Story = {
  args: mockProps.base
}
