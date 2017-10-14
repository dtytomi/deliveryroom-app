import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../../providers/login-service';
import { AboutPage } from '../about/about';
import { AddPrayers } from '../add-prayers/add-prayers';
// $IMPORTSTATEMENT

/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  tabBarElement: any;
  facebookUrl: any;
  redirectURI: any;
  twitterUrl: any;
  pageNext: any;

  constructor(private platform: Platform , public navCtrl: NavController, 
    public navParams: NavParams, public loginService: LoginService, 
    public storage: Storage) {

      this.platform = platform;
      this.navParams = navParams;

      this.pageNext = this.navParams.get('pageNext');

      this.tabBarElement = document.querySelectorAll('.tabbar');
      this.redirectURI = 'https://deliveryroom.herokuapp.com/';
      this.facebookUrl = 'https://deliveryroom.mybluemix.net/auth/facebook';
      this.twitterUrl = 'https://deliveryroom.mybluemix.net/auth/twitter';

  }

  ionViewDidLoad() {
    if(this.tabBarElement !== null) {
      // code...
      Object.keys(this.tabBarElement).map((key) => {
       this.tabBarElement[key].style.transform = 'translateY(56px)';
      })
    }
  }

  ionViewWillLeave() {
    if(this.tabBarElement !== null) {
      // code...
      Object.keys(this.tabBarElement).map((key) => {
       this.tabBarElement[key].style.transform = 'translateY(0)';
      })
    }
  }

  facebookLogin(): void {

    this.platform.ready().then(() => {
      this.loginService.login(this.facebookUrl).then((success) => {

        switch (this.pageNext) {
          case 'AddPrayers':
            // code...
            this.navCtrl.push(AddPrayers);
            break;

          case 'AboutPage':
            // code...
            this.navCtrl.push(AboutPage);
            break;
          
          default:
            // code...
            break;
        }
        
        
      }, (err) => {
        
        console.log(err);
      });
    });
  }

  twitterLogin(): void {
    this.loginService.login(this.twitterUrl).then((success) => {

      switch (this.pageNext) {
          case 'AddPrayers':
            // code...
            this.navCtrl.push(AddPrayers);
            break;

          case 'AboutPage':
            // code...
            this.navCtrl.push(AboutPage);
            break;
          
          default:
            // code...
            break;
        }

    }, (err) => {
      console.log(err);
    });
  }

}
