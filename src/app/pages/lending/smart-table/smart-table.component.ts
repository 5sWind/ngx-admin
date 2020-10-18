import { Component } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../../smart-table-datepicker/smart-table-datepicker.component';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface Lending {
  bookId: number;
  readerId: number;
  employeeId: number;
  date: Date;
  return?: Date;
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
        title: '借阅ID',
        type: 'number',
        editable: false,
        addable: false,
      },
      bookId: {
        title: '图书ID',
        type: 'number',
      },
      readerId: {
        title: '读者ID',
        type: 'number',
      },
      employeeId: {
        title: '员工ID',
        type: 'number',
      },
      date: {
        title: '借阅日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      return: {
        title: '还书日期',
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


  baseUrl: string = 'http://localhost:3000/lending/';
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
    this.http.put<Lending>(this.baseUrl + event.data.id, data).subscribe(
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
    this.http.post<Lending>(this.baseUrl, data).subscribe(
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
      'bookId': event.newData.bookId,
      'readerId': event.newData.readerId,
      'employeeId': event.newData.employeeId,
      'date': event.newData.date,
      'return': event.newData.return,
      'memo': event.newData.memo,
    };
  }
}
