import type { Preview } from '@storybook/react-vite'
import { createElement } from 'react';
import { ThemeProvider } from '../src';
import '../src/ui/variables.css';

const preview: Preview = {
  decorators: [
    (Story) =>
      createElement(
        ThemeProvider,
        {
          style: {
            minHeight: '100vh',
            padding: '2rem',
            background: 'url("https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&fit=crop") center / cover no-repeat fixed',
          },
        },
        createElement(Story),
      ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;