import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { data } from './Datasource';

import QueryBuilder from './QueryBuilder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My-storybook/QueryBuilder',
  component: QueryBuilder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <QueryBuilder {...args} />;

export const QueryBuilderComponent = Template.bind({});
QueryBuilderComponent.args = {
  data: data,
  
};
