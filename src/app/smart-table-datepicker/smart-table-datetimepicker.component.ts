import { Component, OnInit, Input } from '@angular/core';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'ngx-smart-table-datepicker',
    templateUrl: './smart-table-datetimepicker.component.html',
    styleUrls: ['./smart-table-datepicker.component.css'],
})
export class SmartTableDateTimepickerComponent extends DefaultEditor implements OnInit {

    @Input() placeholder: string = '选择时间';

    inputModel: Date;

    constructor() {
        super();
    }

    ngOnInit() {
        if (this.cell.newValue) {
            const cellValue = new Date(this.cell.newValue);
            this.inputModel = cellValue;
            this.cell.newValue = this.inputModel.toLocaleString();
        }
    }

    onChange() {
        if (this.inputModel) {
            this.cell.newValue = this.inputModel.toLocaleString();
        }
    }
}

@Component({
    template: `{{value | date: 'yyyy-MM-dd HH:mm:ss'}} `,
})
export class SmartTableDateTimepickerRenderComponent implements ViewCell, OnInit {
    @Input() value: string;
    @Input() rowData: any;

    constructor() { }

    ngOnInit() { }

}
