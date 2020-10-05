/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService, translate: TranslateService) {
    translate.addLangs(['en', 'cn']);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('cn');

    const browserLang = translate.getBrowserLang();
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use(browserLang.match(/en|cn/) ? browserLang : 'en');
    translate.use('cn');
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
