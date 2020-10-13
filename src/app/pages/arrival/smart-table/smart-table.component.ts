import { Component } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../tables/smart-table-datepicker/smart-table-datepicker.component';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export enum ResultType {
  PASS = 'P',
  INVALID = 'I',
  UNHANDLED = 'U',
}
export interface Arrival {
  bookId: number;
  procurementId: number;
  employeeId: number;
  date: Date;
  quantity?: number;
  result?: ResultType;
  pass?: number;
  refill?: number;
  memo?: string;
}
const ResultList = [
  { value: 'P', title: 'Pass' },
  { value: 'I', title: 'Invalid' },
  { value: 'U', title: 'Unhandled' },
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
        title: '到货单号',
        type: 'number',
        editable: false,
        addable: false,
      },
      bookId: {
        title: '图书ID',
        type: 'number',
      },
      procurementId: {
        title: '采购单号',
        type: 'number',
      },
      employeeId: {
        title: '员工ID',
        type: 'number',
      },
      date: {
        title: '到货日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      quantity: {
        title: '实际到货数量',
        type: 'number',
      },
      result: {
        title: '检验结果',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: ResultList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: ResultList,
          },
        },
      },
      pass: {
        title: '合格到货数量',
        type: 'number',
      },
      refill: {
        title: '待补发数量',
        type: 'number',
      },
      memo: {
        title: '备注',
        type: 'string',
      },
    },
  };


  baseUrl: string = 'http://localhost:3000/arrival/';
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
    this.http.put<Arrival>(this.baseUrl + event.data.id, data).subscribe(
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
    this.http.post<Arrival>(this.baseUrl, data).subscribe(
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
      'procurementId': event.newData.procurementId,
      'employeeId': event.newData.employeeId,
      'date': event.newData.date,
      'quantity': event.newData.quantity,
      'result': event.newData.result,
      'pass': event.newData.pass,
      'refill': event.newData.refill,
      'memo': event.newData.memo,
    };
  }
}
