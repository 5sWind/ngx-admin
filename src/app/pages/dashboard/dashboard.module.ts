import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbTreeGridModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular2-chartjs';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SearchMapComponent } from './search-map/search-map.component';
import { MapComponent } from './search-map/map/map.component';
import { SearchComponent } from './search-map/search/search.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { DataCardComponent } from './data-card/data-card.component';
import { AnalyticsCardComponent } from './analytics-card/analytics-card.component';
import { FsIconComponent, TreeGridComponent } from './tree-grid/tree-grid.component';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTreeGridModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    GoogleMapsModule,
    LeafletModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    SearchComponent,
    MapComponent,
    SearchMapComponent,
    SimpleCardComponent,
    InfoCardComponent,
    DataCardComponent,
    AnalyticsCardComponent,
    TreeGridComponent,
    FsIconComponent,
  ],
  providers: [
  ],
})
export class DashboardModule { }
