import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PrayerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PrayerService {

  data: any;

  constructor(public http: Http) {
    console.log('Hello PrayerService Provider');
  }

  getPrayers() {

    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('https://deliveryroom.mybluemix.net/prayer')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  createPrayer(prayer) {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://deliveryroom.mybluemix.net/prayer', JSON.stringify(prayer), {headers: headers})
      .subscribe( res => {
        console.log(res.json());
      });
  }

  deletePrayer(id) {
    this.http.delete('https://deliveryroom.mybluemix.net/prayer/' + id).subscribe((res) => {
      console.log(res.json());
    })
  }

}
