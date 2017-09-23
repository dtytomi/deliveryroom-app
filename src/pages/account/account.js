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
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoginService } from '../../providers/login-service';
/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, alertCtrl, loginService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loginService = loginService;
        this.storage = storage;
        this.me = true;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        window.plugins.spinnerDialog.show("Loading", "Loading...");
        this.storage.get('hasLoggedIn')
            .then(function (hasLoggedIn) {
            if (!hasLoggedIn) {
                _this.navCtrl.push(LoginPage, { pageNext: 'AccountPage' });
                window.plugins.spinnerDialog.hide();
            }
            else {
                _this.loginService.getUser()
                    .then(function (data) {
                    window.plugins.spinnerDialog.hide();
                    _this.user = data;
                    if (_this.user != null) {
                        // code...
                        _this.me = false;
                    }
                }, function (err) {
                    window.plugins.spinnerDialog.hide();
                    _this.presentConfirm();
                    console.error(err);
                });
            }
        });
    };
    AccountPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'You\'ve not logged in',
            message: 'Kindly login to Access your acccount details',
            buttons: [
                {
                    text: 'Login',
                    handler: function () {
                        _this.navCtrl.push(LoginPage, { pageNext: 'AccountPage' });
                    }
                }
            ]
        });
        alert.present();
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Component({
        selector: 'page-account',
        templateUrl: 'account.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController,
        LoginService, Storage])
], AccountPage);
export { AccountPage };
//# sourceMappingURL=account.js.map