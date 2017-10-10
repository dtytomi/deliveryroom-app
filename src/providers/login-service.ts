import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var window: any;

/*
  Generated class for the LoginService provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginService {

  accessToken: any;
  redirectURI: any;
  newUrl: any;
  user:any;
  userId: any;
  token: any;
  client_token: any;

  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(public http: Http, public storage: Storage, 
    private iab: InAppBrowser, public events: Events) {

  }

  getUser() {
    
    return new Promise((resolve, reject) => {
      // load token if exist
      this.storage.get('token').then((value) => {

        this.token = value;

        let headers = new Headers();
          headers.append('Authorization', this.token);
        this.http.get('https://deliveryroom.mybluemix.net/me', {headers: headers})
        .subscribe((response: Response) => {
          resolve(response.json());
        }, (err) => {
          console.error(err);
          reject(err);
        });
      
      });

    });
  }

  // return promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

>>>>>>> rebuilding deliveryroom
  login(url): Promise <any> {

    return new Promise((resolve, reject) => {
      // body...

        let browser =  this.iab.create(url, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');

        const exitSubscription: Subscription = browser.on("exit").subscribe((event) => {
          console.error("The social login sign in flow was canceled");
          reject(new Error("The social login sign in flow was canceled"));
        });

        window.plugins.spinnerDialog.show("Loading","Loading...");
     
        browser.on('loadstop').subscribe((event: any) => {

          if (event.url.indexOf(url) > -1) {
            // code...
            this.newUrl = event.url;
            return ;
          }

          if (event.url.indexOf(this.newUrl) > -1) {
            // code...
            this.newUrl = event.url;
            return ;
          }

          window.plugins.spinnerDialog.hide();
          
          if (event.url.indexOf('https://deliveryroom.mybluemix.net/#/') > -1) {
            exitSubscription.unsubscribe();
            browser.close();
             
            this.client_token = event.url.match('oauth_token=(.*)&userId')[1];
            this.userId = event.url.match('&userId=(.*)')[1];
            
            this.token = this.client_token.replace('%20', ' ');
            // set a key/value
            this.storage.set(this.HAS_LOGGED_IN, true);
            this.storage.set('token', this.token);
            this.storage.set('token-date', JSON.stringify(new Date()));
            this.storage.set('userId', this.userId);
            
            this.events.publish('user:login');
            resolve(event.url);
          }  
        }); 
        
        browser.on('loaderror').subscribe((event) => {
          // body...
          window.plugins.spinnerDialog.hide();
          console.error("Problem authenticating with social media account");
          reject("Problem authenticating with social media account");
        });

    });
  }
  
}
