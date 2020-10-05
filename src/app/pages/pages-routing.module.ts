import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { DashboardComponent } from './e-commerce/e-commerce.component';
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
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
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
