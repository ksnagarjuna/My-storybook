import * as React from 'react';
import { L10n } from '@syncfusion/ej2-base';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar , ExcelExport, PdfExport, Page, ColumnChooser,Reorder, Sort,Filter,Grid, PagerComponent , parentsUntil} from '@syncfusion/ej2-react-grids';
// import { SampleBase } from '../common/sample-base';
 import { hardwareData } from './data-source';

import { DataManager, Query } from '@syncfusion/ej2-data';
import { isNullOrUndefined, addClass, removeClass  } from '@syncfusion/ej2-base';
// import { PropertyPane } from '../common/property-pane';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
// import { Button } from 'primereact/button';
import  {modifiedData}  from './Modified_data';
// import  $  from 'jquery';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import QueryBuilder from './QueryBuilder';
// import './index.css';

L10n.load({
    'en-US': {
        'pager': {
            'currentPageInfo': '',
            'totalItemsInfo': '{1} to {2} of {0}',
        }
    }
});

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
function dollarTemplate(props) {
    return (
        <div>
          <p>{"$" + props.price}</p>
        </div>
    )
}
function progessTemplate(props) {
    return (<div id="myProgress" className="pbar">
  <div id="myBar" className="bar" style={{width:`${(props.percentage * 100) +"%"}`}}>
    <div id="label" className="barlabel">{(props.percentage * 100).toFixed(2) + "%"}</div>
  </div>
</div>);
}
// $(document).ready(function(){
//     $(`${this.props.advanceSearchButton}`).click(function(){
//         $("#ej2-querybuilder_0").toggle();
//         console.log("jquery")
//     });
//   });
export default class JordGridComponent extends React.Component {
    constructor() {
        super(...arguments);
        // this.datamanager = new DataManager(hardwareData);
        this.datamanager = new DataManager(modifiedData);
        this.query = new Query().select(this.props.query);
        this.columnData = this.props.columnData;
        this.importRules = {
            'condition': 'or',
            'rules': [{
                    'label': '',
                    'field': '',
                    'type': '',
                    'operator': '',
                    'value': ''
                }]
        };
        // this.toolbar = ['ExcelExport','ColumnChooser','Advanced Search', 'Clear Search'];
        this.groupOptions = { showGroupedColumn: true };
        this.filterSettings = { type: "CheckBox" };
        this.filterSettings1 = { type: "Menu" };
        this.format = { type: 'date', format: 'M/d/y' };
        this.font = {
            type : "CheckBox",
            itemTemplate : fontTemplate
        }
    }

    updateRule(args) {
        let predicate = this.qbObj.getPredicate(args.rule);
        if (isNullOrUndefined(predicate)) {
            this.gridObj.query = new Query().select(this.props.query);
        }
        else {
            this.gridObj.query = new Query().select(this.props.query)
                .where(predicate);
        }
        this.gridObj.refresh();

    }
    onGridCreated() {
        this.updateRule({ rule: this.qbObj.getValidRules(this.qbObj.rule) });
    }
    // toolbarClick (args) {
    //   if (this.gridObj){
    //     if(args.item.id === 'Grid_excelexport') {
    //       this.gridObj.excelExport();
    //     }
    //     if(args.item.id === 'Grid_clearfilters') {
    //         this.gridObj.clearFiltering();
    //         this.gridObj.enablePersistence = false;
    //         window.localStorage.setItem("gridGrid", "");
    //         //window.localStorage.setItem("gridgrid", "");
    //         this.gridObj.destroy();
    //         //reloads the page
    //         window.location.reload();
    //       }
          
    //   }
    // }
    exportQueryCellInfo(args) {
        if (args.column.headerText === 'jordPhotos') {
            if (args.name === "excelQueryCellInfo") {
                args.image = {};
            }
            else {
                args.image = { base64: args.data["jordPhotos"] };
            }
        }
    }
// pager at top level realated logic
    // onDataBound(props) {
    //     // console.log('props', props)
    //     var pager = document.getElementById("Pager").ej2_instances[0];
    //     pager.currentPage = this.pageSettings.currentPage;
    //     pager.pageCount = this.pageSettings.pageCount;
    //     pager.pageSize = this.pageSettings.pageSize;
    //     pager.pagerdropdownModule.dropDownListObject.value = this.pagerModule.pagerObj.pagerdropdownModule.dropDownListObject.value;
    //     pager.totalRecordsCount = this.pageSettings.totalRecordsCount;
    //   }
    
      gridTemplate(item) {
          console.log('gridTemplate', item)
        var grid = document.getElementById(item.gridId).ej2_instances[0];
        function created(args) {
          this.currentPage = grid.pageSettings.currentPage;
          this.pageCount = grid.pageSettings.pageCount;
          this.pageSize = grid.pageSettings.pageSize;
          this.pagerdropdownModule.dropDownListObject.value =
            grid.pagerModule.pagerObj.pagerdropdownModule.dropDownListObject.value;
          this.totalRecordsCount = grid.pageSettings.totalRecordsCount;
        }
    
        function dropDownChanged(e) {
          var grid = document.getElementById(item.gridId).ej2_instances[0];
          grid.pageSettings.pageSize = e.pageSize;
        }        
        return (
         <div className='topPager'>
              <PagerComponent
            className='pagerClassJordTop'
            id={item.pagerId}
            pageSize={12}
            pageSizes={true}
            created={created}
            dropDownChanged={dropDownChanged}
          />
         </div>
        );
      }
      toolbarOptions = [
            {tooltipText:'ExcelExport',id:'Grid_excelexport',prefixIcon: 'e-export-excel',align:'Right'},
            {tooltipText:'Advanced Search',id:`${this.props.advanceSearchButton}`,prefixIcon: 'e-search-2',align:'Right'},
            {tooltipText:'Clear Filters', id:'Grid_clearfilters', prefixIcon: 'e-filter-cancel',align:'Right'}
            ,
            'ColumnChooser',
            {template: this.gridTemplate.bind(this, {gridId: this.props.gridId, pagerId: this.props.pagerId }), tooltipText: 'Rows Per Page'}];
    onActionComplete(args) {
        console.log('args', this.props.pagerId)
        var grid = document.getElementById(this.props.gridId).ej2_instances[0];
        var pager = document.getElementById(this.props.pagerId).ej2_instances[0];
        if (args.requestType === "paging") {
          pager.currentPage = grid.pageSettings.currentPage;
          pager.pageCount = grid.pageSettings.pageCount;
          pager.pageSize = grid.pageSettings.pageSize;
          pager.pagerdropdownModule.dropDownListObject.value =
            grid.pagerModule.pagerObj.pagerdropdownModule.dropDownListObject.value;
        }
      }
      
//   clickHandler(args) {
//     console.log('clickHandler', this.props.pageId)

//     var pager = document.getElementById("Pager").ej2_instances[0];
//     const target = parentsUntil(args.originalEvent.target, "e-pager"); // find clicked button
//     const parentTarget = parentsUntil(args.originalEvent.target, "e-toolbar");
//     if (target && parentTarget) {
//       this.goToPage(pager.currentPage);
//     }
//   }
// pager at top level realated logic

    render() {
        console.log('this.props', this.props)
        // this.toolbarClick = this.toolbarClick.bind(this);
        return (<div className='control-pane'>
                <div className='control-section qb-section'>
                    <div className='row'>
                        <div className='col-lg-12 control-section qb-section'>
                            <QueryBuilderComponent 
                             width='100%'
                              dataSource={hardwareData}
                               columns={this.columnData} 
                               rule={this.importRules} 
                               ruleChange={this.updateRule.bind(this)}
                                ref={(scope) => { this.qbObj = scope; }}
                                >
                            </QueryBuilderComponent>
                           
                        
                        </div>
                        <div className='col-lg-12 control-section qb-section'>
                            <div className='content-wrapper'>
                           
                                <GridComponent 
                                pageSettings={this.props.pageSettings}
                                enablePersistence={this.props.enablePersistence}
                                allowPaging={this.props.allowPaging} 
                                toolbar={this.toolbarOptions}
                                // id='Grid'
                                id={this.props.gridId}
                                allowExcelExport={this.props.allowExcelExport}
                                toolbarClick={this.props.toolbarClick} 
                                // dataSource={this.datamanager} 
                                dataSource={this.props.data} 
                                width={this.props.width}
                                 ref={(scope) => { this.gridObj = scope }} 
                                 query={this.query}
                                  created={this.onGridCreated.bind(this)}
                                //   column chooser
                                showColumnChooser={this.props.showColumnChooser}
                                // movable columns
                                allowReordering={this.props.allowReordering}
                                // sorting columns in ascending and descending order
                                allowSorting={this.props.allowSorting}
                                // filtering columns
                                allowFiltering={this.props.allowFiltering}
                                // text wrapping
                                allowTextWrap={this.props.allowTextWrap}
                                // filter settings
                                filterSettings={this.filterSettings}
                                excelQueryCellInfo={this.exportQueryCellInfo.bind(this)}
                                actionComplete={this.onActionComplete.bind(this)}
                                dataBound={this.onDataBound}
                                // columns form the top level component
                                columns={this.props.columns}
                                  >
                                  
                                    
                                <Inject services={[Toolbar, ExcelExport, PdfExport, Page,ColumnChooser,Reorder, Sort, Filter, PagerComponent]}/>                                
                                </GridComponent>
                            </div>
                        </div>
                    </div>
                </div>  
        </div>);
    }
}