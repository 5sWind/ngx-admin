import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { BookModule } from './book/book.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ReaderModule } from './reader/reader.module';
import { LendingModule } from './lending/lending.module';
import { VendorModule } from './vendor/vendor.module';
import { ProcurementModule } from './procurement/procurement.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ArrivalModule } from './arrival/arrival.module';
import { DataModule } from './data/data.module';
import { SystemModule } from './system/system.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DepartmentModule,
    EmployeeModule,
    BookModule,
    ReaderModule,
    LendingModule,
    VendorModule,
    WarehouseModule,
    ProcurementModule,
    ArrivalModule,
    DataModule,
    SystemModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
