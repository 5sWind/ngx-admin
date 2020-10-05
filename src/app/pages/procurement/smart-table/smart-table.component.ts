import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../tables/smart-table-datepicker/smart-table-datepicker.component';

const StateList = [
  { value: 'D', title: 'Delivered' },
  { value: 'P', title: 'Purchasing' },
  { value: 'U', title: 'Unhandled' },
];

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    actions: {
      columnTitle: '操作',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Pid: {
        title: '采购单号',
        type: 'string',
      },
      Bid: {
        title: '图书ID',
        type: 'string',
      },
      Vid: {
        title: '供应商ID',
        type: 'string',
      },
      Eid: {
        title: '员工ID',
        type: 'string',
      },
      Pdate: {
        title: '采购日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Pquantity: {
        title: '数量',
        type: 'string',
      },
      Pprice: {
        title: '进货单价',
        type: 'string',
      },
      Pstate: {
        title: '状态',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: StateList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: StateList,
          },
        },
      },
      Pmemo: {
        title: '备注',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('确定删除?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
