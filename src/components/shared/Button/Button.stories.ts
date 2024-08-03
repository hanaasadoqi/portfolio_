import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Click Me',
    onClick: fn(), // Default mock function for onClick
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    onClick: () => console.log('Clicked!'),
  },
};
