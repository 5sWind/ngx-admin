import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

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
      Vid: {
        title: '供应商ID',
        type: 'string',
      },
      Vname: {
        title: '供应商名称',
        type: 'string',
      },
      Vaddr: {
        title: '地址',
        type: 'string',
      },
      Vfax: {
        title: '传真',
        type: 'number',
      },
      Vcontact: {
        title: '联系人',
        type: 'string',
      },
      Vphone: {
        title: '联系电话',
        type: 'number',
      },
      Vemail: {
        title: '联系人邮箱',
        type: 'string',
      },
      Vbank: {
        title: '开户行',
        type: 'string',
      },
      Vaccount: {
        title: '开户行账号',
        type: 'number',
      },
      Vmemo: {
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
