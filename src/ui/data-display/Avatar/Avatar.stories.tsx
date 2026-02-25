import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './Avatar';

const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 24, max: 120, step: 4 },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Jane Doe',
    size: 40,
  },
};

export const Fallback: Story = {
  args: {
    src: '',
    alt: 'John Smith',
    size: 40,
  },
};

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'Alice',
    size: 80,
  },
};

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=7',
    alt: 'Bob',
    size: 28,
  },
};
