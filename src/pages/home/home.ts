import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { PrayerPage } from '../prayer/prayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  prayers (category) {
    // body...
    this.navCtrl.push(PrayerPage, {
      prayerCategory: category
    });
  }

}
