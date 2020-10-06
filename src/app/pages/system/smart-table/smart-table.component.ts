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
      Sid: {
        title: '系统ID',
        type: 'string',
      },
      Did: {
        title: '部门ID',
        type: 'string',
      },
      Sname: {
        title: '系统名称',
        type: 'string',
      },
      Slocation: {
        title: '位置信息',
        type: 'string',
      },
      Ssource: {
        title: '来源信息',
        type: 'string',
      },
      Smemo: {
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
    if (!event.newData['Sid']) {
      window.alert('系统ID不能为空！');
    } else if (!event.newData['Did']) {
      window.alert('部门ID不能为空！');
    } else {
      event.confirm.resolve(event.newData);
    }
    event.confirm.reject();
  }
}
