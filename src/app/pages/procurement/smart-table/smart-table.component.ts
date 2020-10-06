import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../tables/smart-table-datepicker/smart-table-datepicker.component';
import { TranslateService } from '@ngx-translate/core';

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
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
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
  message: string;

  constructor(private service: SmartTableData, private translate: TranslateService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    this.translate.get('TABLE.DELETE').subscribe((text: string) => {
      this.message = text;
    });
    if (window.confirm(this.message)) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    this.onFormCheck(event);
  }

  onCreateConfirm(event): void {
    this.onFormCheck(event);
  }

  onFormCheck(event): void {
    if (!event.newData['Pid']) {
      window.alert('采购单号不能为空！');
    } else if (!event.newData['Bid']) {
      window.alert('图书ID不能为空！');
    } else if (!event.newData['Vid']) {
      window.alert('供应商ID不能为空！');
    } else if (!event.newData['Eid']) {
      window.alert('员工ID不能为空！');
    } else {
      event.confirm.resolve(event.newData);
    }
    event.confirm.reject();
  }
}
