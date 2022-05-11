
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.columnData = [
            { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
            { field: 'FirstName', label: 'FirstName', type: 'string' },
            { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
            { field: 'Title', label: 'Title', type: 'string' },
            { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
            { field: 'Country', label: 'Country', type: 'string' },
            { field: 'City', label: 'City', type: 'string' }
        ];
    }
    render() {
        return (<QueryBuilderComponent width='100%' columns={this.columnData}></QueryBuilderComponent>);
    }
}
// ReactDom.render(<App />, document.getElementById('querybuilder'));