import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { CreatePrayerPage } from '../create-prayer/create-prayer';

/*
  Generated class for the Prayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-prayer',
  templateUrl: 'prayer.html'
})
export class PrayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayerPage');
  }

  addPrayer () {
    this.navCtrl.push(CreatePrayerPage);
  }

}
