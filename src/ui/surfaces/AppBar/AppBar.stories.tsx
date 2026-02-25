import type { Meta, StoryObj } from '@storybook/react-vite';
import AppBar from './AppBar';
import Button from '../../../ui/inputs/Button/Button';

const meta = {
  title: 'Surfaces/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', height: '100%' }}>
        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Liquid Glass UI</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="text">Docs</Button>
          <Button variant="contained">Get Started</Button>
        </div>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    children: (
      <div style={{ padding: '0 16px', display: 'flex', alignItems: 'center', height: '100%' }}>
        <span style={{ fontWeight: 600 }}>My App</span>
      </div>
    ),
  },
};
