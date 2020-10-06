import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import {
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
} from '@nebular/theme';
import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { NgxLogoutComponent } from './logout/logout.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NgxAuthRoutingModule,
        TranslateModule,

    ],
    declarations: [
        NgxLoginComponent,
        NgxRegisterComponent,
        NgxLogoutComponent,
    ],
})
export class NgxAuthModule {
}
