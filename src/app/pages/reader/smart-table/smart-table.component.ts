import { Component } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../../smart-table-datepicker/smart-table-datepicker.component';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export enum ReaderType {
  INTERNAL = 'I',
  EXTERNAL = 'E',
}
export interface Reader {
  cardno: string;
  type?: ReaderType;
  expiration?: Date;
  name: string;
  idno: string;
  phone?: string;
  email?: string;
  register?: Date;
  cancel?: Date;
  memo?: string;
}
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
        title: '读者ID',
        type: 'number',
        editable: false,
        addable: false,
      },
      cardno: {
        title: '读者证ID',
        type: 'string',
      },
      type: {
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
      expiration: {
        title: '读者证有效期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      name: {
        title: '姓名',
        type: 'string',
      },
      idno: {
        title: '身份证号',
        type: 'number',
      },
      phone: {
        title: '电话',
        type: 'number',
      },
      email: {
        title: '邮箱',
        type: 'string',
      },
      register: {
        title: '注册日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      cancel: {
        title: '注销日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      memo: {
        title: '备注',
        type: 'string',
      },
    },
  };


  baseUrl: string = 'http://localhost:3000/reader/';
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
    this.http.put<Reader>(this.baseUrl + event.data.id, data).subscribe(
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
    this.http.post<Reader>(this.baseUrl, data).subscribe(
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
      'cardno': event.newData.cardno,
      'type': event.newData.type,
      'expiration': event.newData.expiration,
      'name': event.newData.name,
      'idno': event.newData.idno,
      'phone': event.newData.phone,
      'email': event.newData.email,
      'register': event.newData.register,
      'cancel': event.newData.cancel,
      'memo': event.newData.memo,
    };
  }
}
