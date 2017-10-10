import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { Prayers } from '../prayers/prayers';
import { PrayersService } from '../../providers/prayers-service' ;
// $IMPORTSTATEMENT

/**
 * Generated class for the AddPrayers page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-add-prayers',
  templateUrl: 'add-prayers.html',
})
export class AddPrayers {

  prayer : {
    title?: string,
    category?: string,
    content?: string
  } = {};
  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private prayersService: PrayersService) {
  }

  ionViewDidLoad() {
    
  }

  createPrayer(form: NgForm) {
    this.submitted = true;

    if(form.valid) {
      // code...
      this.prayersService.createPrayer(form.value);
      this.navCtrl.pop();
      this.navCtrl.push(Prayers);
    }
  }

}
