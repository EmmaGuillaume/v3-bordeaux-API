import { Meta, StoryObj } from '@storybook/react'
import RentInfoCard from './RentInfoCard'
import { mockProps } from './RentInfoCard.mocks'

export default {
  component: RentInfoCard
} as Meta<typeof RentInfoCard>

type Story = StoryObj<typeof RentInfoCard>

export const RentInProgress: Story = {
  args: mockProps.rentInProgress
}

export const NoRentInProgress: Story = {
  args: mockProps.noRentInProgress
}
