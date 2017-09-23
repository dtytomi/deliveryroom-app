var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrayerPage } from '../prayer/prayer';
import { PrayerService } from '../../providers/prayer-service';
/*
  Generated class for the CreatePrayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CreatePrayerPage = (function () {
    function CreatePrayerPage(navCtrl, navParams, prayerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prayerService = prayerService;
        this.prayer = {};
        this.submitted = false;
    }
    CreatePrayerPage.prototype.ionViewDidLoad = function () {
    };
    CreatePrayerPage.prototype.createPrayer = function (form) {
        this.submitted = true;
        if (form.valid) {
            // code...
            this.prayerService.createPrayer(form.value);
            this.navCtrl.pop();
            this.navCtrl.push(PrayerPage);
        }
    };
    return CreatePrayerPage;
}());
CreatePrayerPage = __decorate([
    Component({
        selector: 'page-create-prayer',
        templateUrl: 'create-prayer.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, PrayerService])
], CreatePrayerPage);
export { CreatePrayerPage };
//# sourceMappingURL=create-prayer.js.map