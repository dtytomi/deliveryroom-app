import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

import  { PrayersService } from '../../providers/prayers-service';
import  { Login } from '../login/login';
import  { AddPrayers } from '../add-prayers/add-prayers';
// $IMPORTSTATEMENT


/**
 * Generated class for the Prayers page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-prayers',
  templateUrl: 'prayers.html',
})
export class Prayers {

  prayers: any;
  token: any;
  tokenDate: any;
  loading: any; 
  category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController, private prayersService: PrayersService, 
    public storage: Storage, public loadingCtrl: LoadingController) {

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
      this.prayersService.getPrayersByCategory(this.category).then((data) => {
        this.loading.dismiss();
        this.prayers = data;
      });
    } else {
      // code...
      this.prayersService.getPrayers().then((data) => {
        this.loading.dismiss();
        this.prayers = data;
      });
    }
  }

  addPrayer () {
    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        if (!hasLoggedIn) {
          this.navCtrl.push(Login, {pageNext: 'AddPrayers'});
        } else {
          this.navCtrl.push(AddPrayers);
        }
        
      });
  }

}
