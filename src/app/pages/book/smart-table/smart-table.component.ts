import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../tables/smart-table-datepicker/smart-table-datepicker.component';
import { SmartTableDateTimepickerComponent, SmartTableDateTimepickerRenderComponent } from '../../tables/smart-table-datepicker/smart-table-datetimepicker.component';
import { TranslateService } from '@ngx-translate/core';

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
      Bid: {
        title: '图书ID',
        type: 'string',
      },
      Wid: {
        title: '仓库ID',
        type: 'string',
      },
      Bname: {
        title: '图书名称',
        type: 'string',
      },
      Btype: {
        title: '分类',
        type: 'string',
      },
      Bauthor: {
        title: '作者',
        type: 'string',
      },
      Bpress: {
        title: '出版社',
        type: 'string',
      },
      Bpublication: {
        title: '出版日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      Bisbn: {
        title: '国际标准书号',
        type: 'string',
      },
      Bquantity: {
        title: '备注',
        type: 'number',
      },
      Bimg: {
        title: '缩略图',
        type: 'string',
      },
      Bintro: {
        title: '图书描述',
        type: 'string',
      },
      Bdate: {
        title: '上架时间',
        type: 'custom',
        renderComponent: SmartTableDateTimepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDateTimepickerComponent,
        },
      },
      Bstate: {
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
      Blanguage: {
        title: '语言',
        type: 'string',
      },
      Bprice: {
        title: '定价',
        type: 'number',
      },
      Bspecies: {
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
      Bgeography: {
        title: '地理位置',
        type: 'string',
      },
      BwarehouseDate: {
        title: '入库日期',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      BwarehouseQuantity: {
        title: '入库数量',
        type: 'number',
      },
      Bmemo: {
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
    if (!event.newData['Bid']) {
      window.alert('图书ID不能为空！');
    } else if (!event.newData['Wid']) {
      window.alert('仓库ID不能为空！');
    } else if (!event.newData['Bname']) {
      window.alert('图书名称不能为空！');
    } else if (!event.newData['Bauthor']) {
      window.alert('作者不能为空！');
    } else if (!event.newData['Bisbn']) {
      window.alert('国际标准书号不能为空！');
    } else {
      event.confirm.resolve(event.newData);
    }
    event.confirm.reject();
  }
}
