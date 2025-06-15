/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

// Center all stories in the preview window
export const decorators = [
  (Story) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', background: '#f8f8f8' }}>
      <Story />
    </div>
  ),
];

export default preview;