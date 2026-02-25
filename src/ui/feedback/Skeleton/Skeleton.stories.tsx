import type { Meta, StoryObj } from '@storybook/react-vite';
import Skeleton from './Skeleton';

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'text',
    width: 200,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 40,
    height: 40,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 300,
    height: 120,
  },
};

export const TextBlock: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="60%" />
    </div>
  ),
};
