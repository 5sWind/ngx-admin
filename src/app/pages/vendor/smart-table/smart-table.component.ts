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
    if (!event.newData['Vid']) {
      window.alert('供应商ID不能为空！');
    } else if (!event.newData['Vname']) {
      window.alert('供应商名称不能为空！');
    } else {
      event.confirm.resolve(event.newData);
    }
    event.confirm.reject();
  }
}
