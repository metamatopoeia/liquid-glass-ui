import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActions,
  DialogClose,
} from './Dialog';
import Button from '../../inputs/Button/Button';

const meta = {
  title: 'Feedback/Dialog',
  component: DialogRoot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog built on Radix UI Dialog. Compose with `DialogRoot`, `DialogTrigger`, `DialogContent`, `DialogTitle`, `DialogDescription`, `DialogActions`, and `DialogClose`.',
      },
    },
  },
} satisfies Meta<typeof DialogRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="contained">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogDescription>
          Are you sure you want to proceed? This action cannot be undone.
        </DialogDescription>
        <DialogActions>
          <DialogClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="contained">Confirm</Button>
          </DialogClose>
        </DialogActions>
      </DialogContent>
    </DialogRoot>
  ),
};

export const LongContent: Story = {
  args: {},
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outlined">Terms of Service</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Terms of Service</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </DialogDescription>
        <DialogActions>
          <DialogClose asChild>
            <Button variant="contained">I Agree</Button>
          </DialogClose>
        </DialogActions>
      </DialogContent>
    </DialogRoot>
  ),
};
