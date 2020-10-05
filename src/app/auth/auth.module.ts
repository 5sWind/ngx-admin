import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
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

const formSetting: any = {
    redirectDelay: 0,
    strategy: 'email',
    showMessages: {
        success: true,
        error: true,
    },
};

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

        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',
                    baseEndpoint: 'http://localhost:3000',
                    token: {
                        class: NbAuthJWTToken,
                        key: 'token',
                    },
                    login: {
                        endpoint: '/auth/login',
                        method: 'post',
                        defaultErrors: ['登录失败，请验证用户名和密码。'],
                        redirect: {
                            success: '/pages/dashboard',
                            failure: null, // stay on the same page
                        },
                    },
                    register: {
                        endpoint: '/auth/register',
                        method: 'post',
                        redirect: {
                            success: '/auth/login',
                            failure: null, // stay on the same page
                        },
                    },
                    logout: {
                        endpoint: '/auth/logout',
                        // method: null,
                        redirect: {
                            success: '/',
                            failure: '/',
                        },
                    },
                    requestPass: {
                        endpoint: '/auth/request-pass',
                        method: 'post',
                    },
                    resetPass: {
                        endpoint: '/auth/reset-pass',
                        method: 'post',
                    },
                }),
            ],
            forms: {
                login: formSetting,
                register: formSetting,
                requestPassword: formSetting,
                resetPassword: formSetting,
                logout: {
                    redirectDelay: 0,
                    strategy: 'email',
                },
                validation: {
                    password: {
                        required: true,
                        minLength: 4,
                        maxLength: 50,
                    },
                    email: {
                        required: true,
                    },
                    fullName: {
                        required: false,
                        minLength: 4,
                        maxLength: 50,
                    },
                },
            },
        }),
    ],
    declarations: [
        NgxLoginComponent,
        NgxRegisterComponent,
        NgxLogoutComponent,
    ],
})
export class NgxAuthModule {
}
