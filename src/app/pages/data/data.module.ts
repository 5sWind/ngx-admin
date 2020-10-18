import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbInputModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DataComponent } from './data.component';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  DashboardVisitorsAnalyticsComponent,
} from './visitors-analytics/visitors-analytics.component';
import {
  DashboardVisitorsAnalyticsChartComponent,
} from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  DashboardVisitorsStatisticsComponent,
} from './visitors-analytics/visitors-statistics/visitors-statistics.component';
import { DashboardLegendChartComponent } from './legend-chart/legend-chart.component';
import { SlideOutComponent } from './slide-out/slide-out.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    NbInputModule,
  ],
  declarations: [
    DataComponent,
    DashboardVisitorsAnalyticsComponent,
    DashboardVisitorsAnalyticsChartComponent,
    DashboardVisitorsStatisticsComponent,
    DashboardLegendChartComponent,
    SlideOutComponent,
  ],
})
export class DataModule { }
