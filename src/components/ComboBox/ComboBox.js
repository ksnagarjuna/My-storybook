import React from "react";
import {AutoCompleteComponent} from '@syncfusion/ej2-react-dropdowns';
import './App.css';
// import { DataManager, Query, WebApiAdaptor } from "@syncfusion/ej2-data";
import employee from './dataSource.json';

   function App(){
    const divStyle={
        margin:100,
        width:250
    }
   const customItems =(props)=> {
       return(
            <div>
                <img className="empImg" src={'https://ej2.syncfusion.com/react/demos/src/drop-down-list/Employees/' + props.EmployeeID +'.png'} alt=''/>
                <div className="ename">{props.Name}</div>
                <div className="ejob">{props.Designation}
                -{props.Country}</div> 
                {/* <div className="ecountry">{props.Country}<br></br></div> */}

            </div> 
       );
   }
   const customHeader=(props)=>{
       return(
           <div className="header">
               <span>Photo</span>
               <span className="columnHeader">Employee Info</span>
           </div>
       )
   }
//    const customValues =(props)=> {
//     return(
//          <div>
//              <img className="valueImage" src={'https://ej2.syncfusion.com/react/demos/src/drop-down-list/Employees/' + props.EmployeeID +'.png'} height="28px" width="28px"/>
//              <div className="value">{props.Name}</div>
             
//          </div> 
//     );
// }

// const customFooter=(props)=>{
//     return(
//         <div className="footer">
//             Add new item <span className="e-icon plus">+</span>
//         </div>
//     )
// }
    return(
        <div style={divStyle}>
         <AutoCompleteComponent  placeholder="Enter a name"
         dataSource={employee} itemTemplate={customItems} 
        headerTemplate={customHeader}
         
         
         fields={{value:"Name"}}
         ></AutoCompleteComponent>
        </div>
    )
}
export default App