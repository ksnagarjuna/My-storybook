import { parentsUntil } from '@syncfusion/ej2-grids';
import { PagerComponent } from '@syncfusion/ej2-react-grids';
import React, { Component } from 'react'
// import { Combination } from './Combination';
import { JordGridComponent } from './JordGridComponent';
 import { modifiedData } from './Modified_data';

function progessTemplate(props) {
  return (<div id="myProgress" className="pbar">
<div id="myBar" className="bar" style={{width:`${(props.percentage * 100) +"%"}`}}>
  <div id="label" className="barlabel">{(props.percentage * 100).toFixed(2) + "%"}</div>
</div>
</div>);
}

function imageTemplate(props) {
  var src = `https://picsum.photos/75/75?random=${props.index}`
  return (
      <div className='image'>
          <img src={src} alt={'0'} />
      </div>
  )
}

function fontTemplate(props) {
  if (props.font === 'Select All') {
      return (<span></span>);
  }
  return (
      <div>
          <i className={props.font}></i>
      </div>
  )
}

 class JordGridExample extends Component {
  constructor(props){
    super(props);
   
    this.filterSettingsMenu = { type: "CheckBox" };
    this.filterSettingsCheckBox = { type: "Menu" };
    this.filterDate = { type: 'date', format: 'M/d/y' };
    this.font = {
        type : "CheckBox",
        itemTemplate : fontTemplate
    }
    }
    columns = [
      {field:'index', headerText:'Index' ,width:'110', textAlign:'center' ,type: 'number' , filter: { type: "Menu" } },
      {field:'name', headerText:'Name' ,width:'140', textAlign:'left',type: 'string', filter: { type: "CheckBox" } },
      {field:'Category', headerText:'Category' ,width:'140', textAlign:'left',type: 'string' },
      {field:'percentage', headerText:'Percentage' ,width:'150', textAlign:'left', filter: { type: "Menu" } , template : progessTemplate ,type: 'number'},
      {field:'shortText', headerText:'Short Text' ,width:'120', textAlign:'left', filter: { type: "Menu" } },
      {field:'longText', headerText:'Long Text' ,width:'160', textAlign:'left', clipMode:"EllipsisWithTooltip", filter: { type: "Menu" } },
      {                   headerText:'Photo' ,width:'90', allowFiltering:false ,allowSorting:false ,template:imageTemplate },
      {field:'font', headerText:'Icon' ,width:'100', filter: { type: "CheckBox" , itemTemplate : fontTemplate } , template : fontTemplate },
      {field:'price', headerText:'Price' ,width:'150', format:'C2',textAlign:'right',type: 'number' , filter: { type: "Menu" } },   
      {field:'dates', headerText:'Date' ,width:'110',textAlign:'right',format: {skeleton: 'dMy', format: 'dd-MMM-yy', type: 'date'}, type: 'date' , filter: { type: "Menu" }},   
    ]
    
    jordQuery = ['index', 'name', 'Category', 'percentage', 'shortText', 'longText','jordPhotos','font','price','dates'];
    jordColumnData =  [
      { field: 'index', label: 'index', type: 'number', operators: [{ key: 'equal', value: 'equal' },
              { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }] },
      { field: 'name', label: 'Name', type: 'string' },
      { field: 'Category', label: 'Category', type: 'string' },
      { field: 'percentage', label: 'Percentage', type: 'number', operators: [{ key: 'equal', value: 'equal' },
              { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }] },
      { field: 'shortText', label: 'Short Text', type: 'string' },
      { field: 'longText', label: 'Long Text', type: 'string' }
  ];
   
    componentDidMount() {
      this.pGrid.gridObj.columns = this.columns;
      this.pGrid.gridObj.toolbarClick = this.toolbarClick.bind(this);
      // this.pGrid1.gridObj.columns = this.columns1;
      // this.pGrid1.gridObj.toolbarClick = this.toolbarClick.bind(this);

    }
    componentDidUpdate(){
      this.pGrid.gridObj.toolbarClick = this.toolbarClick.bind(this);
      // this.pGrid1.gridObj.toolbarClick = this.toolbarClick.bind(this);

    }
    toolbarClick (args) {
      if (this.pGrid.gridObj){
        if(args.item.id === 'Grid_excelexport') {
          this.pGrid.gridObj.excelExport();
        }
        if(args.item.id === 'Grid_clearfilters') {
            this.pGrid.gridObj.clearFiltering();
            this.pGrid.gridObj.enablePersistence = false;
            window.localStorage.setItem("gridGrid", "");
            //window.localStorage.setItem("gridgrid", "");
            this.pGrid.gridObj.destroy();
            //reloads the page
            window.location.reload();
          }
          
      }
    }
  
  render() {
    return (
      
      <div>
        {/* <div>Grid Component</div>
        <GridComponent data={modifiedData}/> */}
        <div>Jord Grid Component</div>
       <JordGridComponent 
      data={modifiedData}
      pageSettings={{ pageCount: 4, pageSizes: true }}
      enablePersistence={false}
      allowPaging={true}
      allowExcelExport={true}
      width='100%'
      showColumnChooser={true}
      allowReordering={true}
      allowSorting={true}
      allowFiltering={true}
      allowTextWrap={true}
      ref={g=>this.pGrid=g} 
      columns={this.columns}
      query={this.jordQuery}
      columnData={this.jordColumnData}
      onDataBound={this.onDataBound}
      gridId="Grid1"
      pagerId="Pager1"
  advanceSearchButton={`Grid_advancedsearch`}

       />
<br/>
      </div>
      
      
    )
  }
}
export default JordGridExample

