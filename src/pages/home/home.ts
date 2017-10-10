import { Component } from '@angular/core';
<<<<<<< b85019584648d99953ccaf3bbef325988e9398ec

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { PrayerPage } from '../prayer/prayer';
=======
import { NavController } from 'ionic-angular';

import { Prayers } from '../prayers/prayers';
>>>>>>> rebuilding deliveryroom

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

<<<<<<< b85019584648d99953ccaf3bbef325988e9398ec
  login() {
    this.navCtrl.push(LoginPage);
  }

  prayer(category) {
    // body...
    this.navCtrl.push(PrayerPage, {
=======
  prayer(category) {
    // body...
    this.navCtrl.push(Prayers, {
>>>>>>> rebuilding deliveryroom
      prayerCategory: category
    });
  }

}
