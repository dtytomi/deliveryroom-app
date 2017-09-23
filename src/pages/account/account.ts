import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoginService } from '../../providers/login-service';


declare var window: any;

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
}
