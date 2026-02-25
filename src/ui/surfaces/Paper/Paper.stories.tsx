import type { Meta, StoryObj } from '@storybook/react-vite';
import Paper from './Paper';

const meta = {
  title: 'Surfaces/Paper',
  component: Paper,
  tags: ['autodocs'],
  args: {
    children: 'Paper content',
    style: { padding: '24px' },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
    },
    elevation: {
      control: { type: 'number', min: 1, max: 3 },
    },
  },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'elevation',
    elevation: 1,
  },
};

export const Elevation2: Story = {
  args: {
    variant: 'elevation',
    elevation: 2,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};
