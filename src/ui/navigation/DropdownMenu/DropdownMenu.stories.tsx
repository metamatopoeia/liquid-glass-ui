import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './DropdownMenu';
import Button from '../../inputs/Button/Button';

const meta = {
  title: 'Navigation/DropdownMenu',
  component: DropdownMenuRoot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown menu built on Radix UI DropdownMenu. Compose with `DropdownMenuRoot`, `DropdownMenuTrigger`, `DropdownMenuContent`, and `DropdownMenuItem`.',
      },
    },
  },
} satisfies Meta<typeof DropdownMenuRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => {}}>Profile</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Settings</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Help</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}} danger>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  ),
};

export const WithAlignment: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <Button variant="contained">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" minWidth={180}>
          <DropdownMenuItem onSelect={() => {}}>Edit</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => {}}>Duplicate</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => {}} danger>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </div>
  ),
};
