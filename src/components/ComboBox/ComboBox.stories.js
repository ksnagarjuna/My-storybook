import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { data } from './dataSource.json';

import ComboBox from './ComboBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My-storybook/ComboBox',
  component: ComboBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ComboBox {...args} />;

export const ComboBoxComponent = Template.bind({});
ComboBoxComponent.args = {
  data: data,

};
