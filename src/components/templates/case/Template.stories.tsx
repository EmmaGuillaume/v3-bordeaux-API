import { Meta, StoryObj } from '@storybook/react'
import Template from './Template'
import { mockProps } from './Template.mocks'

export default {
  component: Template
} as Meta<typeof Template>

type Story = StoryObj<typeof Template>

export const Base: Story = {
  args: mockProps.base
}
