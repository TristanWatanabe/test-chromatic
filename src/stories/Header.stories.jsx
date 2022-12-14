import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};


// storiesOf('Header', module)
// .addStory('Logged In ', () => {
//   <Header user={{name: 'Lebron James'}} />
// })
// .addStory('Logged Out ', () => {
//   <Header user={{}} />
// })