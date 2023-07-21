import { Meta, StoryObj } from '@storybook/react'
import { mockProps } from './RentInProgressCard.mocks'
import RentInProgressCard from './RentInProgressCard'

export default {
  component: RentInProgressCard
} as Meta<typeof RentInProgressCard>

type Story = StoryObj<typeof RentInProgressCard>

export const FreeTimeLeft: Story = {
  args: mockProps.freeTimeLeft
}

export const MinutesPaidTime: Story = {
  args: mockProps.minutesPaidTime
}

export const HoursPaidTime: Story = {
  args: mockProps.hoursPaidTime
}

export const DaysPaidTime: Story = {
  args: mockProps.daysPaidTime
}
