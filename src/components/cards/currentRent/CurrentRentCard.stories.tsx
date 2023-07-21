import { Meta, StoryObj } from '@storybook/react'
import CurrentRentCard from './CurrentRentCard'
import { mockProps } from './CurrentRentCard.mocks'

export default {
  component: CurrentRentCard
} as Meta<typeof CurrentRentCard>

type Story = StoryObj<typeof CurrentRentCard>

export const FreeTimeLeft: Story = {
  args: mockProps.freeTimeLeft
}

export const PaidTime: Story = {
  args: mockProps.paidTime
}
