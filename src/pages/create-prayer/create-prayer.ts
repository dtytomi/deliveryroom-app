import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { PrayerPage } from '../prayer/prayer';
import { PrayerService } from '../../providers/prayer-service' ;


/*
  Generated class for the CreatePrayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-prayer',
  templateUrl: 'create-prayer.html'
})
export class CreatePrayerPage {

  prayer : {
    title?: string,
    category?: string,
    content?: string
  } = {};
  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private prayerService: PrayerService) {}

  ionViewDidLoad() {

  }

  createPrayer(form: NgForm) {
    this.submitted = true;

    if(form.valid) {
      // code...
      this.prayerService.createPrayer(form.value);
      this.navCtrl.pop();
      this.navCtrl.push(PrayerPage);
    }
  }

}
