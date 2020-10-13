import { Component } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';

@Component({
  selector: 'ngx-employee',
  styleUrls: ['./employee.component.scss'],
  templateUrl: './employee.component.html',
})

export class EmployeeComponent {
  // constructor(public accessChecker: NbAccessChecker) { }

  // private alive = true;

  // solarValue: number;
  // lightCard: CardSettings = {
  //   title: 'Light',
  //   iconClass: 'nb-lightbulb',
  //   type: 'primary',
  // };
  // rollerShadesCard: CardSettings = {
  //   title: 'Roller Shades',
  //   iconClass: 'nb-roller-shades',
  //   type: 'success',
  // };
  // wirelessAudioCard: CardSettings = {
  //   title: 'Wireless Audio',
  //   iconClass: 'nb-audio',
  //   type: 'info',
  // };
  // coffeeMakerCard: CardSettings = {
  //   title: 'Coffee Maker',
  //   iconClass: 'nb-coffee-maker',
  //   type: 'warning',
  // };

  // statusCards: string;

  // commonStatusCardsSet: CardSettings[] = [
  //   this.lightCard,
  //   this.rollerShadesCard,
  //   this.wirelessAudioCard,
  //   this.coffeeMakerCard,
  // ];

  // statusCardsByThemes: {
  //   default: CardSettings[];
  //   cosmic: CardSettings[];
  //   corporate: CardSettings[];
  //   dark: CardSettings[];
  // } = {
  //     default: this.commonStatusCardsSet,
  //     cosmic: this.commonStatusCardsSet,
  //     corporate: [
  //       {
  //         ...this.lightCard,
  //         type: 'warning',
  //       },
  //       {
  //         ...this.rollerShadesCard,
  //         type: 'primary',
  //       },
  //       {
  //         ...this.wirelessAudioCard,
  //         type: 'danger',
  //       },
  //       {
  //         ...this.coffeeMakerCard,
  //         type: 'info',
  //       },
  //     ],
  //     dark: this.commonStatusCardsSet,
  //   };

  // constructor(private themeService: NbThemeService,
  //   private solarService: SolarData) {
  //   this.themeService.getJsTheme()
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe(theme => {
  //       this.statusCards = this.statusCardsByThemes[theme.name];
  //     });

  //   this.solarService.getSolarData()
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe((data) => {
  //       this.solarValue = data;
  //     });
  // }

  // ngOnDestroy() {
  //   this.alive = false;
  // }
}
