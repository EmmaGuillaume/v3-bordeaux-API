import { Meta, StoryObj } from '@storybook/react'
import MapLayout from './MapLayout'
import { mockProps } from './MapLayout.mocks'

export default {
  component: MapLayout
} as Meta<typeof MapLayout>

type Story = StoryObj<typeof MapLayout>

export const Base: Story = {
  args: mockProps.base
}
