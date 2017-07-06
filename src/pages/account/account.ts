import { Storage } from '@ionic/storage';

import { Component } from '@angular/core';
<<<<<<< HEAD
import { AlertController, NavController, NavParams } from 'ionic-angular';
=======
import { NavController, NavParams } from 'ionic-angular';
>>>>>>> 968f46a71553a465c62f69500a01c3efbadd9f33

import { LoginPage } from '../login/login';
import { LoginService } from '../../providers/login-service';

<<<<<<< HEAD
declare var window: any;
=======
>>>>>>> 968f46a71553a465c62f69500a01c3efbadd9f33

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
<<<<<<< HEAD
  loading: any;
  me: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, 
    public loginService: LoginService, public storage: Storage ) {
      this.me = true;
    }

  ionViewDidLoad() {  
    window.plugins.spinnerDialog.show("Loading","Loading...");
    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        if (!hasLoggedIn) {
          this.navCtrl.push(LoginPage, {pageNext: 'AccountPage'});
            window.plugins.spinnerDialog.hide();
        } else {
          this.loginService.getUser()
            .then( (data) => {
              window.plugins.spinnerDialog.hide();
              this.user = data;
              if (this.user != null) {
                // code...
                this.me = false;
              }
              
            }, (err) => {
             window.plugins.spinnerDialog.hide();
              this.presentConfirm();
              console.error(err);
            });
        }
        
      });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'You\'ve not logged in',
      message: 'Kindly login to Access your acccount details',
      buttons: [
        {
          text: 'Login',
          handler: () => {
            this.navCtrl.push(LoginPage, {pageNext: 'AccountPage'});
          }
        }
      ]
    });
    alert.present();
  }


=======

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

>>>>>>> 968f46a71553a465c62f69500a01c3efbadd9f33
}
