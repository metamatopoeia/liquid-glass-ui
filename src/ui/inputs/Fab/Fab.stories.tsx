import type { Meta, StoryObj } from '@storybook/react-vite';
import Fab from './Fab';

const meta = {
  title: 'Inputs/Fab',
  component: Fab,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '+',
    color: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: '+',
    disabled: true,
  },
};
