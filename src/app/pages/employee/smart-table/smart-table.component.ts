import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../tables/smart-table-datepicker/smart-table-datepicker.component';

const genderList = [
  { value: 'M', title: 'Male' },
  { value: 'F', title: 'Female' },
  { value: 'U', title: 'Undeclared' },
];

const educationList = [
  { value: 'N', title: 'Not apply' },
  { value: 'C', title: 'College' },
  { value: 'B', title: 'Bachelor' },
  { value: 'M', title: 'Master' },
  { value: 'D', title: 'Doctor' },
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
      Eid: {
        title: '员工ID',
        type: 'string',
      },
      Did: {
        title: '部门ID',
        type: 'string',
      },
      Ename: {
        title: '姓名',
        type: 'string',
      },
      Egender: {
        title: '性别',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: genderList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: genderList,
          },
        },
      },
      Ebirthday: {
        title: '出生日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Eeducation: {
        title: '最高学历',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: educationList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: educationList,
          },
        },
      },
      Etitle: {
        title: '职务',
        type: 'string',
      },
      Ephone: {
        title: '电话',
        type: 'number',
      },
      Eemail: {
        title: '邮箱',
        type: 'string',
      },
      Econtract: {
        title: '聘用到期日',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Eenrollment: {
        title: '入职日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Eresign: {
        title: '离职日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Ememo: {
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
