import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { BookComponent } from './book/book.component';
import { ReaderComponent } from './reader/reader.component';
import { LendingComponent } from './lending/lending.component';
import { VendorComponent } from './vendor/vendor.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { DataComponent } from './data/data.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'department',
      component: DepartmentComponent,
    },
    {
      path: 'employee',
      component: EmployeeComponent,
    },
    {
      path: 'book',
      component: BookComponent,
    },
    {
      path: 'reader',
      component: ReaderComponent,
    },
    {
      path: 'lending',
      component: LendingComponent,
    },
    {
      path: 'vendor',
      component: VendorComponent,
    },
    {
      path: 'warehouse',
      component: WarehouseComponent,
    },
    {
      path: 'procurement',
      component: ProcurementComponent,
    },
    {
      path: 'arrival',
      component: ArrivalComponent,
    },
    {
      path: 'system',
      component: SystemComponent,
    },
    {
      path: 'data',
      component: DataComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
