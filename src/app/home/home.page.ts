import { Component } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private appStateSvc: AppStateService) {}

}
