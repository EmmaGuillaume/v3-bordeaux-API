import { Meta, StoryObj } from '@storybook/react'
import StationSearchBar from './StationSearchBar'
import { mockProps } from './StationSearchBar.mocks'

export default {
  component: StationSearchBar
} as Meta<typeof StationSearchBar>

type Story = StoryObj<typeof StationSearchBar>

export const Base: Story = {
  args: mockProps.base
}
