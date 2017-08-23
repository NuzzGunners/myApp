import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../../pages/list/list';
import { ScreenPage } from '../../pages/screen/screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openScreenPage() {
    this.navCtrl.push(ScreenPage);
  }

  openListPage() {
    this.navCtrl.push(ListPage);
  }

}
