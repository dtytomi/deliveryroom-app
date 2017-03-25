import { Storage } from '@ionic/storage';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import  { PrayerService } from '../../providers/prayer-service';
import { LoginPage } from '../login/login';
import  { CreatePrayerPage } from '../create-prayer/create-prayer';

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

  prayers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private prayerService: PrayerService, public storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayerPage');
    this.prayerService.getPrayers().then((data) => {
      this.prayers = data;
      console.log(this.prayers);
    });
  }

  addPrayer () {
    if( this.storage.get('token') && this.storage.get('date-date')) {
      // code...
      this.navCtrl.push(LoginPage);
    } else {
       this.navCtrl.push(CreatePrayerPage);
    }
  }
}
