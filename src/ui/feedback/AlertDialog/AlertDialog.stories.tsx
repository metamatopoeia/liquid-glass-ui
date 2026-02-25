import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogAction,
} from './AlertDialog';
import Button from '../../inputs/Button/Button';

const meta = {
  title: 'Feedback/AlertDialog',
  component: AlertDialogRoot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A blocking alert dialog requiring user acknowledgement. Compose with `AlertDialogRoot`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogActions`, `AlertDialogCancel`, and `AlertDialogAction`.',
      },
    },
  },
} satisfies Meta<typeof AlertDialogRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => (
    <AlertDialogRoot>
      <AlertDialogTrigger asChild>
        <Button variant="contained" color="error">Delete Item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Delete this item?</AlertDialogTitle>
        <AlertDialogDescription>
          This action is permanent and cannot be undone. All associated data will be removed.
        </AlertDialogDescription>
        <AlertDialogActions>
          <AlertDialogCancel asChild>
            <Button variant="outlined">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="contained" color="error">Delete</Button>
          </AlertDialogAction>
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialogRoot>
  ),
};

export const Confirmation: Story = {
  args: {},
  render: () => (
    <AlertDialogRoot>
      <AlertDialogTrigger asChild>
        <Button variant="outlined">Log Out</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Log out of your account?</AlertDialogTitle>
        <AlertDialogDescription>
          You will need to sign in again to access your data.
        </AlertDialogDescription>
        <AlertDialogActions>
          <AlertDialogCancel asChild>
            <Button variant="text">Stay</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="contained">Log Out</Button>
          </AlertDialogAction>
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialogRoot>
  ),
};
