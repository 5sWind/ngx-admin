import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span></span>
    <span class="created-by">
      © 2020 <b><a href="https://github.com/5sWind" target="_blank">Hengming Zhang, </a></b> Undergrad. Project
    </span>
  `,
})
export class FooterComponent {
}
