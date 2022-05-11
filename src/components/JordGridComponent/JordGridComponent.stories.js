import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { data } from './Datasource';
import  JordGridComponent  from './JordGridComponent';
import  {modifiedData}  from './Modified_data';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My-storybook/JordGridComponent',
  component: JordGridComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <JordGridComponent {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   label: 'Primary',
// };

export const JordGridComponentExample = Template.bind({});
JordGridComponentExample.args = {
  data:modifiedData,
    // allowExcelExport:false,
    // width:'100%',
    // pageSettings:pageSettings,
  //  enablePersistence:enablePersistence,
  // allowPaging:allowPaging, 
  // toolbar:toolbarOptions,
  // // id='Grid'
  // id:gridId,
  // allowExcelExport:allowExcelExport,
  // toolbarClick:toolbarClick,
  // // dataSource={this.datamanager} 
  // dataSource:dataSource,
  // width:width,
  //  ref:ref,
  //  query:query,
  //   created:created,
  // //   column chooser
  // showColumnChooser:showColumnChooser,
  // // movable columns
  // allowReordering:allowReordering,
  // // sorting columns in ascending and descending order
  // allowSorting:allowSorting,
  // // filtering columns
  // allowFiltering:allowFiltering,
  // // text wrapping
  // allowTextWrap:allowTextWrap,
  // // filter settings
  // filterSettings:filterSettings,
  // excelQueryCellInfo:exportQueryCellInfo,
  // actionComplete:actionComplete,
  // dataBound:onDataBound,
  // // columns form the top level component
  // columns:columns
};
