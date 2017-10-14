import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Prayers } from '../prayers/prayers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  prayer(category) {
    // body...
    this.navCtrl.push(Prayers, {
      prayerCategory: category
    });
  }

}
