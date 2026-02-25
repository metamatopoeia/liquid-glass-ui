import type { Meta, StoryObj } from '@storybook/react-vite';
import Spinner from './Spinner';

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 120, step: 4 },
    },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 40,
  },
};

export const Small: Story = {
  args: {
    size: 20,
  },
};

export const Large: Story = {
  args: {
    size: 80,
  },
};

export const CustomColor: Story = {
  args: {
    size: 40,
    color: 'var(--lg-palette-error-main)',
  },
};
