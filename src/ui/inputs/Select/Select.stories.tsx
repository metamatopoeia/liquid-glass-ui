import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from './Select';

const FRUIT_OPTIONS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
];

const meta = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    options: FRUIT_OPTIONS,
    label: 'Fruit',
  },
  argTypes: {
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
    margin: {
      control: 'select',
      options: ['none', 'normal'],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Choose a fruit…',
  },
};

export const WithValue: Story = {
  args: {
    value: 'banana',
  },
};

export const Required: Story = {
  args: {
    required: true,
    placeholder: 'Required selection',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const NoLabel: Story = {
  args: {
    label: undefined,
    placeholder: 'No label',
  },
};
