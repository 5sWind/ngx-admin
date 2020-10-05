import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../tables/smart-table-datepicker/smart-table-datepicker.component';

const TypeList = [
  { value: 'I', title: 'Internal' },
  { value: 'E', title: 'External' },
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
      Rid: {
        title: '读者ID',
        type: 'string',
      },
      Rcardno: {
        title: '读者证ID',
        type: 'string',
      },
      Rtype: {
        title: '读者证类型',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: TypeList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: TypeList,
          },
        },
      },
      Rexpiration: {
        title: '读者证有效期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Rname: {
        title: '姓名',
        type: 'string',
      },
      Ridno: {
        title: '身份证号',
        type: 'number',
      },
      Rphone: {
        title: '电话',
        type: 'number',
      },
      Remail: {
        title: '邮箱',
        type: 'string',
      },
      Rregister: {
        title: '注册日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Rcancel: {
        title: '注销日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Rmemo: {
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
