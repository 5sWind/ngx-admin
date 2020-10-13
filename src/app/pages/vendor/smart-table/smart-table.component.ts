import { Component } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface Vendor {
  name: string;
  address?: string;
  fax?: string;
  contact?: string;
  phone?: string;
  email?: string;
  bank?: string;
  account?: string;
  memo?: string;
}

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
      id: {
        title: '供应商ID',
        type: 'number',
        editable: false,
        addable: false,
      },
      name: {
        title: '供应商名称',
        type: 'string',
      },
      address: {
        title: '地址',
        type: 'string',
      },
      fax: {
        title: '传真',
        type: 'number',
      },
      contact: {
        title: '联系人',
        type: 'string',
      },
      phone: {
        title: '联系电话',
        type: 'number',
      },
      email: {
        title: '联系人邮箱',
        type: 'string',
      },
      bank: {
        title: '开户行',
        type: 'string',
      },
      account: {
        title: '开户行账号',
        type: 'number',
      },
      memo: {
        title: '备注',
        type: 'string',
      },
    },
  };


  baseUrl: string = 'http://localhost:3000/vendor/';
  source: ServerDataSource;
  message: string;

  constructor(private service: SmartTableData, private translate: TranslateService, private http: HttpClient) {
    this.source = new ServerDataSource(http, { endPoint: this.baseUrl });
  }

  onDeleteConfirm(event): void {
    this.translate.get('TABLE.DELETE').subscribe((text: string) => {
      this.message = text;
    });
    if (window.confirm(this.message)) {
      this.http.delete<any>(this.baseUrl + event.data.id).subscribe(
        () => {
          event.confirm.resolve(event.source.data);
        },
        (err: HttpErrorResponse) => {
          window.alert(err.message);
          throw err.error;
        });
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    const data = this.load(event);
    this.http.put<Vendor>(this.baseUrl + event.data.id, data).subscribe(
      () => {
        event.confirm.resolve(event.newData);
        this.source.refresh();
      },
      (err: HttpErrorResponse) => {
        window.alert(err.message);
        throw err.error;
      });
  }

  onCreateConfirm(event): void {
    const data = this.load(event);
    this.http.post<Vendor>(this.baseUrl, data).subscribe(
      () => {
        event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        window.alert(err.message);
        throw err.error;
      });
  }

  load(event) {
    return {
      'name': event.newData.name,
      'address': event.newData.address,
      'fax': event.newData.fax,
      'contact': event.newData.contact,
      'phone': event.newData.phone,
      'email': event.newData.email,
      'bank': event.newData.bank,
      'account': event.newData.account,
      'memo': event.newData.memo,
    };
  }
}
