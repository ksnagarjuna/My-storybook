import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  {data} from './dataSource';
import  GridComponent  from './GridComponent';
import { created } from '@syncfusion/ej2-react-grids';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My-storybook/GridComponent',
  component: GridComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <GridComponent {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   label: 'Primary',
// };

export const JordGridComponent = Template.bind({});
JordGridComponent.args = {
  data: data,
  pageSettings:{ pageCount: 4, pageSizes: true },
   enablePersistence:false,
allowPaging:true,
allowExcelExport:true,
       width:'100%',
        showColumnChooser:true,
       allowReordering:true,
      allowSorting:true,
      allowFiltering:true,
      allowTextWrap:true,
      //  columns:columns,
  // toolbar,
//   // id='Grid'
  //  id,
  // allowExcelExport,
  // toolbarClick,
//   // dataSource={this.datamanager} 
  // dataSource,
//   width,
//    ref,
//    query,
//     created,
//   //   column chooser
//   showColumnChooser,
//   // movable columns
//   allowReordering,
//   // sorting columns in ascending and descending order
//   allowSorting,
//   // filtering columns
//   allowFiltering,
//   // text wrapping
//   allowTextWrap,
//   // filter settings
//   filterSettings,
//   excelQueryCellInfo,
//   actionComplete,
//   dataBound,
//   // columns form the top level component
//   columns
};
