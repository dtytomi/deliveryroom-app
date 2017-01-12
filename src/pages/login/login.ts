import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginService } from '../../providers/login-service';

declare var cordova: any;

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private platform: Platform , public navCtrl: NavController, public navParams: NavParams, public loginService: LoginService) {
    this.platform = platform;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  facebookLogin () {
    
      this.loginService.facebookLogin().then((success) => {
        this.navCtrl.setRoot(HomePage);
      }, (err) => {
        console.log(err);
      });
 
  }

  googleLogin () {
   
  }

  instagramLogin () {
   
  }

  twitterLogin () {
    
      this.loginService.twitterLogin().then((success) => {
        this.navCtrl.setRoot(HomePage);
      }, (err) => {
        console.log(err);
      });

  }

}
