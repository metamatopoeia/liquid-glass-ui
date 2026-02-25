import type { Meta, StoryObj } from '@storybook/react-vite';
import Card, { CardContent, CardMedia } from './Card';

const meta = {
  title: 'Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'elevated'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'outlined',
    children: (
      <CardContent>
        <h3 style={{ margin: '0 0 8px' }}>Card Title</h3>
        <p style={{ margin: 0, color: 'var(--lg-palette-text-secondary)' }}>
          This is a standard outlined card with some content inside.
        </p>
      </CardContent>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <CardContent>
        <h3 style={{ margin: '0 0 8px' }}>Elevated Card</h3>
        <p style={{ margin: 0, color: 'var(--lg-palette-text-secondary)' }}>
          This card uses the elevated variant with a shadow.
        </p>
      </CardContent>
    ),
  },
};

export const WithMedia: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <CardMedia
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
          alt="Mountain landscape"
        />
        <CardContent>
          <h3 style={{ margin: '0 0 8px' }}>Mountain View</h3>
          <p style={{ margin: 0, color: 'var(--lg-palette-text-secondary)' }}>
            A card with an image header.
          </p>
        </CardContent>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    variant: 'outlined',
    onClick: () => alert('Card clicked'),
    children: (
      <CardContent>
        <h3 style={{ margin: '0 0 8px' }}>Clickable Card</h3>
        <p style={{ margin: 0, color: 'var(--lg-palette-text-secondary)' }}>
          Click me to trigger an action.
        </p>
      </CardContent>
    ),
  },
};
