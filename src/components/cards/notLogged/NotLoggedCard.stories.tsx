import { Meta, StoryObj } from '@storybook/react'
import NotLoggedCard from './NotLoggedCard'
import { mockProps } from './NotLoggedCard.mocks'

export default {
  component: NotLoggedCard
} as Meta<typeof NotLoggedCard>

type Story = StoryObj<typeof NotLoggedCard>

export const Base: Story = {
  args: mockProps.base
}
