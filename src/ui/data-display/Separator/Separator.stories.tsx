import type { Meta, StoryObj } from '@storybook/react-vite';
import Separator from './Separator';

const meta = {
  title: 'Data Display/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    orientation: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <p style={{ margin: '0 0 12px' }}>Above</p>
        <Story />
        <p style={{ margin: '12px 0 0' }}>Below</p>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', height: '40px' }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
};
