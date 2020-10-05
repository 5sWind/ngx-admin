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
      Wid: {
        title: '仓库ID',
        type: 'string',
      },
      Eid: {
        title: '员工ID',
        type: 'string',
      },
      Wname: {
        title: '仓库名称',
        type: 'string',
      },
      Waddr: {
        title: '仓库地址',
        type: 'string',
      },
      Wprincial: {
        title: '负责人',
        type: 'string',
      },
      Wphone: {
        title: '负责人电话',
        type: 'number',
      },
      Wemail: {
        title: '负责人邮箱',
        type: 'string',
      },
      Wmemo: {
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
