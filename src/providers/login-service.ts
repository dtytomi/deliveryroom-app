import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { Platform } from 'ionic-angular';

declare var window: any;

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  accessToken: any;
  redirectURI: any;
  facebookUrl: any;
  twitterUrl: any;
  user:any;
  hasToken: any;
  userId: any;
  token: any;
  hasUserId: any; 

  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(public http: Http, private platform: Platform, public storage: Storage ) {
    console.log('Hello LoginService Provider');

    this.platform = platform;

    this.facebookUrl = 'https://deliveryroom.mybluemix.net/auth/facebook';
    this.twitterUrl = 'https://deliveryroom.mybluemix.net/auth/twitter';
  }

  facebookLogin() {
    return new Promise( (resolve, reject) => {
      this.platform.ready().then(() => {
        let browser = window.cordova.InAppBrowser.open(this.facebookUrl, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
          browser.addEventListener("loadstart", (event) => {
            
            this.hasToken = event.url.indexOf('?oauth_token=');
            this.hasUserId = event.url.indexOf('&userId=');

            if (this.hasUserId > -1 && this.hasToken > -1) {
              browser.removeEventListener("exit", (event) => {});
              browser.close();
              this.token = event.url.match('oauth_token=(.*)&userId')[1];
              this.userId = event.url.match('&userId=(.*)')[1];
              this.storage.set(this.HAS_LOGGED_IN, true);
              this.storage.set('token', this.token);
              this.storage.set('token-date', JSON.stringify(new Date()));
              this.storage.set('userId', this.userId);
              resolve(event.url);
            } else {
              reject("Problem authenticating with Facebook");
            }
          });
      });
    });
  }

  twitterLogin() {
    return new Promise( (resolve, reject) => {
      this.platform.ready().then(() => {
        let browser = window.cordova.InAppBrowser.open(this.twitterUrl, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
          browser.addEventListener("loadstart", (event) => {
            
            this.hasToken = event.url.indexOf('?oauth_token=');
            this.hasUserId = event.url.indexOf('&userId=');

            if (this.hasUserId > -1 && this.hasToken > -1) {
              browser.removeEventListener("exit", (event) => {});
              browser.close();
              this.token = event.url.match('oauth_token=(.*)&userId')[1];
              this.userId = event.url.match('&userId=(.*)')[1];
              this.storage.set(this.HAS_LOGGED_IN, true);
              this.storage.set('token', this.token);
              this.storage.set('token-date', JSON.stringify(new Date()));
              this.storage.set('userId', this.userId);
              resolve(event.url);
            } else {
              reject("Problem authenticating with Twitter");
            }
          });
      }); 
    });
  }

  setUser(user) {
    this.storage.set('user', user);
  }

  getUser() {
    return this.http.get('https://deliveryroom.mybluemix.net/account/users/me')
      .map((response: Response) => {
        let user = response.json();
        console.log(user);
        if (user) {
          this.storage.set('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('currentUser');
  }

  // return promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };


}
