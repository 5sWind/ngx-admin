import { Component } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../../smart-table-datepicker/smart-table-datepicker.component';
import { SmartTableDateTimepickerComponent, SmartTableDateTimepickerRenderComponent } from '../../../smart-table-datepicker/smart-table-datetimepicker.component';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export enum StateType {
  BORROWABLE = 'B',
  DISCONTINUED = 'D',
  MAINTAINING = 'M',
}
export enum SpeciesType {
  ELECTRONIC = 'E',
  PAPER = 'P',
}
export interface Book {
  warehouseId: number;
  name: string;
  type: string;
  author: string;
  press: string;
  publication: Date;
  isbn: string;
  quantity: number;
  img: string;
  intro: string;
  date: Date;
  state: StateType;
  language: string;
  price: number;
  species: SpeciesType;
  geography: string;
  warehouseDate: Date;
  warehouseQuantity: number;
  memo: string;
}

const SpeciesList = [
  { value: 'E', title: 'Electronic' },
  { value: 'P', title: 'Paper' },
];

const StateList = [
  { value: 'B', title: 'Borrowable' },
  { value: 'D', title: 'Discontinued' },
  { value: 'M', title: 'Maintaining' },
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
        title: '图书ID',
        type: 'string',
        editable: false,
        addable: false,
      },
      warehouseId: {
        title: '仓库ID',
        type: 'string',
      },
      name: {
        title: '图书名称',
        type: 'string',
      },
      type: {
        title: '分类',
        type: 'string',
      },
      author: {
        title: '作者',
        type: 'string',
      },
      press: {
        title: '出版社',
        type: 'string',
      },
      publication: {
        title: '出版日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      isbn: {
        title: '国际标准书号',
        type: 'string',
      },
      quantity: {
        title: '上架数量',
        type: 'number',
      },
      img: {
        title: '缩略图',
        type: 'string',
      },
      intro: {
        title: '图书描述',
        type: 'string',
      },
      date: {
        title: '上架时间',
        type: 'custom',
        renderComponent: SmartTableDateTimepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDateTimepickerComponent,
        },
      },
      state: {
        title: '状态',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: StateList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: StateList,
          },
        },
      },
      language: {
        title: '语言',
        type: 'string',
      },
      price: {
        title: '定价',
        type: 'number',
      },
      species: {
        title: '种类',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: SpeciesList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: SpeciesList,
          },
        },
      },
      geography: {
        title: '地理位置',
        type: 'string',
      },
      warehouseDate: {
        title: '入库日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      warehouseQuantity: {
        title: '入库数量',
        type: 'number',
      },
      memo: {
        title: '备注',
        type: 'string',
      },
    },
  };

  baseUrl: string = 'http://localhost:3000/book/';
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
    this.http.put<Book>(this.baseUrl + event.data.id, data).subscribe(
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
    this.http.post<Book>(this.baseUrl, data).subscribe(
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
      'warehouseId': event.newData.warehouseId,
      'name': event.newData.name,
      'type': event.newData.type,
      'author': event.newData.author,
      'press': event.newData.press,
      'publication': event.newData.publication,
      'isbn': event.newData.isbn,
      'quantity': event.newData.quantity,
      'img': event.newData.img,
      'intro': event.newData.intro,
      'date': event.newData.date,
      'state': event.newData.state,
      'language': event.newData.language,
      'price': event.newData.price,
      'species': event.newData.species,
      'geography': event.newData.geography,
      'warehouseDate': event.newData.warehouseDate,
      'warehouseQuantity': event.newData.warehouseQuantity,
      'memo': event.newData.memo,
    };
  }
}
