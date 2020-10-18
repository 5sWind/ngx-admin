/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './smart-table-datepicker/smart-table-datepicker.component';
import { SmartTableDateTimepickerComponent, SmartTableDateTimepickerRenderComponent } from './smart-table-datepicker/smart-table-datetimepicker.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth-guard.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs/observable/of';
import { RoleProvider } from './auth/role/role.provider';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const formSetting: any = {
  redirectDelay: 500,
  strategy: 'email',
  showMessages: {
    success: true,
    error: true,
  },
};

@NgModule({
  declarations: [
    AppComponent,
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,
    SmartTableDateTimepickerComponent,
    SmartTableDateTimepickerRenderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['user', 'profile', 'home'],
        },
        reader: {
          parent: 'guest',
          view: ['lending', 'data'],
          create: ['comment'],
        },
        librarian: {
          parent: 'guest',
          view: ['book'],
        },
        officer: {
          parent: 'guest',
          view: ['department', 'employee', 'reader', 'data'],
          create: ['comment'],
        },
        technician: {
          parent: 'guest',
          view: ['book', 'system', 'data'],
        },
        merchandiser: {
          parent: 'guest',
          view: ['procurment', 'arrival'],
        },
        storekeeper: {
          parent: 'guest',
          view: ['warehouse'],
        },
        vendor: {
          parent: 'guest',
          view: ['vendor', 'arrival'],
        },
        administrator: {
          view: '*',
          edit: '*',
          create: '*',
          remove: '*',
        },
      },
    }),

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
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
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
          redirectDelay: 500,
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
  providers: [
    AuthGuard,
    {
      provide: NbRoleProvider,
      useValue: {
        getRole: () => {
          return observableOf('guest');
        },
      },
    },
    { provide: NbRoleProvider, useClass: RoleProvider }, // provide the class
  ],
  entryComponents: [
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,
    SmartTableDateTimepickerComponent,
    SmartTableDateTimepickerRenderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
