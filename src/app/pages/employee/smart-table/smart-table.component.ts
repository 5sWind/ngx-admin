import { Component } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../tables/smart-table-datepicker/smart-table-datepicker.component';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const genderList = [
  { value: 'M', title: 'Male' },
  { value: 'F', title: 'Female' },
  { value: 'U', title: 'Undeclared' },
];

const educationList = [
  { value: 'N', title: 'Not apply' },
  { value: 'C', title: 'College' },
  { value: 'B', title: 'Bachelor' },
  { value: 'M', title: 'Master' },
  { value: 'D', title: 'Doctor' },
];
export enum GenderType {
  MALE = 'M',
  FEMALE = 'F',
  UNDECLARED = 'U',
}
export enum EducationType {
  NOTAPPLY = 'N',
  COLLEGE = 'F',
  BACHELOR = 'U',
  MASTER = 'M',
  DOCTOR = 'D',
}
export interface Employee {
  departmentId: number;
  name: string;
  gender?: GenderType;
  birthday?: Date;
  education?: EducationType;
  title: string;
  phone?: string;
  email?: string;
  contract?: Date;
  enrollment?: Date;
  resign?: Date;
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
        title: '员工ID',
        type: 'number',
        editable: false,
        addable: false,
      },
      departmentId: {
        title: '部门ID',
        type: 'number',
      },
      name: {
        title: '姓名',
        type: 'string',
      },
      gender: {
        title: '性别',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: genderList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: genderList,
          },
        },
      },
      birthday: {
        title: '出生日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      education: {
        title: '最高学历',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: educationList,
          },
        },
        editor: {
          type: 'list',
          config: {
            list: educationList,
          },
        },
      },
      title: {
        title: '职务',
        type: 'string',
      },
      phone: {
        title: '电话',
        type: 'number',
      },
      email: {
        title: '邮箱',
        type: 'string',
      },
      contract: {
        title: '聘用到期日',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      enrollment: {
        title: '入职日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      resign: {
        title: '离职日期',
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

  baseUrl: string = 'http://localhost:3000/employee/';
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
    this.http.put<Employee>(this.baseUrl + event.data.id, data).subscribe(
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
    this.http.post<Employee>(this.baseUrl, data).subscribe(
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
      'departmentId': event.newData.departmentId,
      'name': event.newData.name,
      'gender': event.newData.gender,
      'birthday': event.newData.birthday,
      'education': event.newData.education,
      'title': event.newData.title,
      'phone': event.newData.phone,
      'email': event.newData.email,
      'contract': event.newData.contract,
      'enrollment': event.newData.enrollment,
      'resign': event.newData.resign,
      'memo': event.newData.memo,
    };
  }
}
