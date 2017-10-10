import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';


import { Login } from '../login/login';
import { LoginService } from '../../providers/login-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user: any;
  loading: any;
  me: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private alertCtrl: AlertController, private spinnerDialog: SpinnerDialog,
    public loginService: LoginService, public storage: Storage) {

  }

  ionViewDidLoad() {  
    this.spinnerDialog.show("Loading","Please wait...");
    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        if (!hasLoggedIn) {
          this.navCtrl.push(Login, {pageNext: 'AboutPage'});
            this.spinnerDialog.hide();
        } else {
          this.loginService.getUser()
            .then( (data) => {
              this.spinnerDialog.hide();
              this.user = data;
              if (this.user != null) {
                // code...
                this.me = true;
              }
              
            }, (err) => {
             this.spinnerDialog.hide();
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
            this.navCtrl.push(Login, {pageNext: 'AboutPage'});
          }
        }
      ]
    });
    alert.present();
  }

}
