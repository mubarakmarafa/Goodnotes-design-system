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

// Add custom CSS to override Storybook's default padding and height
const style = document.createElement('style');
style.textContent = `
  .sb-show-main.sb-main-padded {
    padding: 0 !important;
    min-height: 100vh !important;
  }
`;
document.head.appendChild(style);

// Center all stories in the preview window with full height
export const decorators = [
  (Story) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#ffffff' }}>
      <Story />
    </div>
  ),
];

export default preview;