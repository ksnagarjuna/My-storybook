import React, { Component } from 'react'
import { hardwareData } from './data-source';
import { JordGridComponent } from './JordGridComponent'

export class JordGridExample1 extends Component {
    constructor(props) {
      super(props)
      this.filterSettingsMenu = { type: "CheckBox" };
      this.filterSettingsCheckBox = { type: "Menu" };
         }
         columns = [
            {field:'TaskID', headerText:'TaskID' ,width:'150', textAlign:'center' ,type: 'number' , filter: { type: "Menu" } },
            {field:'Name', headerText:'Name' ,width:'140', textAlign:'left',type: 'string', filter: { type: "CheckBox" } },
            {field:'Category', headerText:'Category' ,width:'140', textAlign:'left',type: 'string' },
            {field:'SerialNo', headerText:'SerialNo' ,width:'150', textAlign:'left', filter: { type: "Menu" } ,type: 'string'},
            {field:'InvoiceNo', headerText:'InvoiceNo' ,width:'130', textAlign:'left', filter: { type: "Menu" },type: 'string' },
            {field:'Status', headerText:'Status' ,width:'160', textAlign:'left', clipMode:"EllipsisWithTooltip", filter: { type: "Menu" } ,type: 'string'},
          ];
          columnQuery = ['TaskID', 'Name', 'Category', 'SerialNo', 'InvoiceNo', 'Status'];
          ColumnData = [
            {
                field: 'TaskID', label: 'TaskID', type: 'number', operators: [{ key: 'equal', value: 'equal' },
                    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
            },
            { field: 'Name', label: 'Name', type: 'string' },
            { field: 'Category', label: 'Category', type: 'string' },
            { field: 'SerialNo', label: 'SerialNo', type: 'string' },
            { field: 'InvoiceNo', label: 'InvoiceNo', type: 'string' },
            { field: 'Status', label: 'Status', type: 'string' }
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
           
<JordGridComponent
 data={hardwareData}
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
 ref={g=>this.pGrid=g} columns={this.columns}
  query={this.columnQuery}
  columnData={this.ColumnData}
  gridId="Grid2"
  pagerId="Pager2"
  advanceSearchButton={`Grid_advancedsearch1`}
/>

      </div>
    )
  }
}

export default JordGridExample1