import { Component, OnInit, Input } from '@angular/core';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'ngx-smart-table-datepicker',
    templateUrl: './smart-table-datepicker.component.html',
    styleUrls: ['./smart-table-datepicker.component.css'],
})
export class SmartTableDatepickerComponent extends DefaultEditor implements OnInit {

    @Input() placeholder: string = '选择日期';

    inputModel: Date;

    constructor() {
        super();
    }

    ngOnInit() {
        if (this.cell.newValue) {
            const cellValue = new Date(this.cell.newValue);
            this.inputModel = cellValue;
            this.cell.newValue = this.inputModel.toLocaleDateString();
        }
    }

    onChange() {
        if (this.inputModel) {
            this.cell.newValue = this.inputModel.toLocaleDateString();
        }
    }
}

@Component({
    template: `{{value | date: 'yyyy-MM-dd'}} `,
})
export class SmartTableDatepickerRenderComponent implements ViewCell, OnInit {
    @Input() value: string;
    @Input() rowData: any;

    constructor() { }

    ngOnInit() { }

}
