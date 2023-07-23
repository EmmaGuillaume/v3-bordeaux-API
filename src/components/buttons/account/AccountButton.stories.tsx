import { Meta, StoryObj } from '@storybook/react'
import AccountButton from './AccountButton'
import { mockProps } from './AccountButton.mocks'

export default {
  component: AccountButton
} as Meta<typeof AccountButton>

type Story = StoryObj<typeof AccountButton>

export const Base: Story = {
  args: mockProps.base
}
