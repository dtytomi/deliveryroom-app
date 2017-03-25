import { Storage } from '@ionic/storage';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { LoginService } from '../../providers/login-service';


/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public loginService: LoginService, public storage: Storage ) {

    // Check if the user has already login 
    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        if (!hasLoggedIn) {
          this.navCtrl.push(LoginPage);
        } else {
          this.loginService.getUser()
          .subscribe( data => {
            this.user = data;
            console.log(this.user);
          });
        }
        
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
