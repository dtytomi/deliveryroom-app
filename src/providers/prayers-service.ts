import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the PrayersService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrayersService {

  data: any;
  token: any;

  constructor(public http: Http, public storage: Storage) {
    
  }

  getPrayers() {
    
    return new Promise((resolve, reject) => {
 
      this.http.get('https://deliveryroom.mybluemix.net/prayer/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPrayersByCategory(category) {
    
    return new Promise((resolve, reject) => {

      let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
      this.http.get('https://deliveryroom.mybluemix.net/category', JSON.stringify(category))
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, (err) => {
          reject(err);
        });
    });
  }

  createPrayer(prayer) {

    return new Promise((resolve, reject) => {
      
      this.storage.get('token').then((value) => {

          this.token = value;

          let headers = new Headers();
            headers.append('Authorization', this.token);
            headers.append('Content-Type', 'application/json');

          this.http.post('https://deliveryroom.mybluemix.net/prayer/', JSON.stringify(prayer), {headers: headers})
            .map(res => res.json())
            .subscribe( res => {
              this.getPrayers();
              resolve(res);
            }, (err) => {

              reject(err);
            });

      });

    });
  }

}
