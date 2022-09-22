import React from 'react';
import {userEvent, screen, within, waitFor} from '@storybook/testing-library'
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Parallel test 2',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

// export const PrimaryHovered = {
//   ...Primary,
//   play: () => {
//     console.log("Button P", screen.getByRole('button'))
//     userEvent.hover(screen.getByRole('button'))
//   }
// }

export const Hovered = Template.bind({})
Hovered.args = {
  primary: true,
  label: 'Hovered Button'
}
Hovered.parameters = {
  pseudo: {hover: true}
}