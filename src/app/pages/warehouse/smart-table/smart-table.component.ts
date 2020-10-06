import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { TranslateService } from '@ngx-translate/core';

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
    if (!event.newData['Wid']) {
      window.alert('仓库ID不能为空！');
    } else if (!event.newData['Eid']) {
      window.alert('员工ID不能为空！');
    } else if (!event.newData['Wname']) {
      window.alert('仓库名称不能为空！');
    } else if (!event.newData['Waddr']) {
      window.alert('仓库地址不能为空！');
    } else {
      event.confirm.resolve(event.newData);
    }
    event.confirm.reject();
  }
}
