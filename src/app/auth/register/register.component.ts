/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { NbRegisterComponent} from '@nebular/auth';

@Component({
    selector: 'ngx-register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent {
}
