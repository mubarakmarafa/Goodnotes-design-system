import React from 'react';
import { Button } from './Button';

const IconSvg = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="14" height="14" rx="4" fill="currentColor" />
  </svg>
);

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'positive', 'attention'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'pressed', 'disabled'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'icon', 'stacked', 'multilabel', 'dropdown'],
    },
    showIcon: { control: 'boolean' },
    label: { control: 'text' },
    icon: { control: false }, // Hide icon from controls
    details: { control: 'text' },
    options: { control: 'array' },
    onSelect: { action: 'selected' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  type: 'primary',
  size: 'large',
  state: 'default',
  showIcon: false,
  icon: undefined,
  variant: 'default',
};

export const Positive = Template.bind({});
Positive.args = {
  label: 'Positive Button',
  type: 'positive',
  size: 'large',
  state: 'default',
  showIcon: false,
  icon: undefined,
  variant: 'default',
};

export const Attention = Template.bind({});
Attention.args = {
  label: 'Attention Button',
  type: 'attention',
  size: 'large',
  state: 'default',
  showIcon: false,
  icon: undefined,
  variant: 'default',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With Icon',
  type: 'primary',
  size: 'large',
  state: 'default',
  showIcon: true,
  icon: IconSvg,
  variant: 'default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  type: 'primary',
  size: 'large',
  state: 'disabled',
  showIcon: false,
  icon: undefined,
  variant: 'default',
};

export const IconOnlyLarge = Template.bind({});
IconOnlyLarge.args = {
  label: 'Icon Button',
  type: 'primary',
  size: 'large',
  state: 'default',
  icon: IconSvg,
  variant: 'icon',
};

export const IconOnlyMedium = Template.bind({});
IconOnlyMedium.args = {
  label: 'Icon Button',
  type: 'primary',
  size: 'medium',
  state: 'default',
  icon: IconSvg,
  variant: 'icon',
};

export const IconOnlySmall = Template.bind({});
IconOnlySmall.args = {
  label: 'Icon Button',
  type: 'primary',
  size: 'small',
  state: 'default',
  icon: IconSvg,
  variant: 'icon',
};

export const StackedPrimary = Template.bind({});
StackedPrimary.args = {
  label: 'Stacked Button',
  type: 'primary',
  size: 'large',
  state: 'default',
  showIcon: true,
  icon: IconSvg,
  variant: 'stacked',
};

export const StackedPositive = Template.bind({});
StackedPositive.args = {
  label: 'Stacked Button',
  type: 'positive',
  size: 'large',
  state: 'default',
  showIcon: true,
  icon: IconSvg,
  variant: 'stacked',
};

export const StackedAttention = Template.bind({});
StackedAttention.args = {
  label: 'Stacked Button',
  type: 'attention',
  size: 'large',
  state: 'default',
  showIcon: true,
  icon: IconSvg,
  variant: 'stacked',
};

export const MultilabelPrimary = Template.bind({});
MultilabelPrimary.args = {
  label: 'Primary Label',
  details: 'Secondary details',
  type: 'primary',
  size: 'large',
  state: 'default',
  variant: 'multilabel',
};

export const MultilabelPositive = Template.bind({});
MultilabelPositive.args = {
  label: 'Positive Label',
  details: 'Secondary details',
  type: 'positive',
  size: 'large',
  state: 'default',
  variant: 'multilabel',
};

export const MultilabelAttention = Template.bind({});
MultilabelAttention.args = {
  label: 'Attention Label',
  details: 'Secondary details',
  type: 'attention',
  size: 'large',
  state: 'default',
  variant: 'multilabel',
};

export const DropdownButton = Template.bind({});
DropdownButton.args = {
  label: 'Dropdown Button',
  type: 'primary',
  size: 'large',
  state: 'default',
  variant: 'dropdown',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (option, index) => alert(`Selected: ${option} (index ${index})`),
}; 