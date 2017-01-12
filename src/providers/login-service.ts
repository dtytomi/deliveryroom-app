import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { InAppBrowser } from 'ionic-native';
import { Platform } from 'ionic-angular';

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

  constructor(public http: Http, private platform: Platform ) {
    console.log('Hello LoginService Provider');

    this.platform = platform;

    this.facebookUrl = 'https://deliveryroom.mybluemix.net/auth/facebook';
    this.twitterUrl = 'https://deliveryroom.mybluemix.net/auth/twitter';
    this.redirectURI = 'https://deliveryroom.mybluemix.net/account/user';
  }

  facebookLogin() {
    return new Promise( (resolve, reject) => {
      this.platform.ready().then(() => {
        let browser = new InAppBrowser(this.facebookUrl, '_system', 'EnableViewPortScale=yes,closebuttoncaption=Done');
        browser.on("loadstart").subscribe((event: any)=> { 
          console.log(event)
          console.log('I got inside');
        });
      });
    });
  }

  twitterLogin() {
    return new Promise( (resolve, reject) => {
      this.platform.ready().then(() => {
        let browser = new InAppBrowser(this.twitterUrl, '_system');
        let listener = browser.on('Loadstart').subscribe((event: any) => {

          //Check the redirect uri
          if(event.url.indexOf(this.redirectURI) > -1 ){
            listener.unsubscribe();
            browser.close();
            let token = event.url.split('=')[1].split('&')[0];
            this.accessToken = token;
            resolve(event.url);
          } else {
            reject("Could not authenticate");
          }

        });
      }); 
    });
  }

}
