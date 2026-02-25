import type { Meta, StoryObj } from '@storybook/react-vite';
import TextField from './TextField';

const meta = {
  title: 'Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    fullWidth: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    multiline: { control: 'boolean' },
    margin: {
      control: 'select',
      options: ['none', 'normal'],
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email.",
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Password',
    error: true,
    helperText: 'Password is required.',
    value: '',
  },
};

export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
  },
};

export const Multiline: Story = {
  args: {
    label: 'Bio',
    multiline: true,
    minRows: 4,
    placeholder: 'Tell us about yourself…',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    fullWidth: true,
    placeholder: 'This spans the full container',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    value: 'Cannot edit this',
  },
};
