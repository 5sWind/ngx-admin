import { Component } from '@angular/core';
import { PositionModel } from './search-map/entity/position.model';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  searchedPosition: PositionModel = new PositionModel();

  setPosition(position: PositionModel) {
    this.searchedPosition = position;
  }
}
