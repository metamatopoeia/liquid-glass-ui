import type { Meta, StoryObj } from '@storybook/react-vite';
import Chip from './Chip';

const meta = {
  title: 'Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
  },
};

export const LongLabel: Story = {
  args: {
    label: 'A longer chip label',
    variant: 'filled',
  },
};
