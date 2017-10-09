import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

import  { PrayerService } from '../../providers/prayer-service';
import  { LoginPage } from '../login/login';
import  { CreatePrayerPage } from '../create-prayer/create-prayer';

declare var window: any;

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
  token: any;
  tokenDate: any;
  loading: any; 
  category: string; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
   private prayerService: PrayerService, public storage: Storage, public loadingCtrl: LoadingController) {
      
      this.storage = storage;

      this.loading = this.loadingCtrl.create({
        content: 'Loading Please Wait...'
      });

      this.category = this.navParams.get('prayerCategory');
  }

  ionViewDidLoad() {
    this.loading.present();
    if (this.category) { 
      // code...
      this.prayerService.getPrayersByCategory(this.category).then((data) => {
        this.loading.dismiss();
        this.prayers = data;
      });
    } else {
      // code...
      this.prayerService.getPrayers().then((data) => {
        this.loading.dismiss();
        this.prayers = data;
      });
    }
  }

 
  addPrayer () {
    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        if (!hasLoggedIn) {
          this.navCtrl.push(LoginPage, {pageNext: 'CreatePrayerPage'});
        } else {
          this.navCtrl.push(CreatePrayerPage);
        }
        
      });
  }
}
