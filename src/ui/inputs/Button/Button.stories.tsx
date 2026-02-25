import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

const meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text', 'inherit'],
    },
    color: {
      control: 'select',
      options: ['primary', 'error', 'inherit'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Error: Story = {
  args: {
    variant: 'contained',
    color: 'error',
  },
};

export const Small: Story = {
  args: {
    variant: 'contained',
    size: 'small',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'contained',
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    disabled: true,
  },
};
