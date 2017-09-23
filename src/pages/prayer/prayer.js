var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { PrayerService } from '../../providers/prayer-service';
import { LoginPage } from '../login/login';
import { CreatePrayerPage } from '../create-prayer/create-prayer';
/*
  Generated class for the Prayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var PrayerPage = (function () {
    function PrayerPage(navCtrl, navParams, viewCtrl, prayerService, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.prayerService = prayerService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
    }
    PrayerPage.prototype.ionViewDidLoad = function (category) {
        var _this = this;
        this.loading.present();
        if (category) {
            // code...
            this.prayerService.getPrayersByCategory(category).then(function (data) {
                _this.loading.dismiss();
                _this.prayers = data;
            });
        }
        else {
            // code...
            this.prayerService.getPrayers().then(function (data) {
                _this.loading.dismiss();
                _this.prayers = data;
            });
        }
    };
    PrayerPage.prototype.addPrayer = function () {
        var _this = this;
        this.storage.get('hasLoggedIn')
            .then(function (hasLoggedIn) {
            if (!hasLoggedIn) {
                _this.navCtrl.push(LoginPage, { pageNext: 'CreatePrayerPage' });
            }
            else {
                _this.navCtrl.push(CreatePrayerPage);
            }
        });
    };
    return PrayerPage;
}());
PrayerPage = __decorate([
    Component({
        selector: 'page-prayer',
        templateUrl: 'prayer.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ViewController,
        PrayerService, Storage, LoadingController])
], PrayerPage);
export { PrayerPage };
//# sourceMappingURL=prayer.js.map