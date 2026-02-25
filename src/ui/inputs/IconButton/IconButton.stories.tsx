import type { Meta, StoryObj } from '@storybook/react-vite';
import IconButton from './IconButton';

const meta = {
  title: 'Inputs/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '★',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: '★',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '★',
  },
};
