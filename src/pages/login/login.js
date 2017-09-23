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
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginService } from '../../providers/login-service';
import { AccountPage } from '../account/account';
import { CreatePrayerPage } from '../create-prayer/create-prayer';
/*
  Generated class for the  page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = (function () {
    function LoginPage(platform, navCtrl, navParams, loginService, storage) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
        this.storage = storage;
        this.platform = platform;
        this.navParams = navParams;
        this.pageNext = this.navParams.get('pageNext');
        this.tabBarElement = document.querySelectorAll('.tabbar');
        this.redirectURI = 'https://deliveryroom.herokuapp.com/';
        this.facebookUrl = 'https://deliveryroom.mybluemix.net/auth/facebook';
        this.twitterUrl = 'https://deliveryroom.mybluemix.net/auth/twitter';
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.tabBarElement !== null) {
            // code...
            Object.keys(this.tabBarElement).map(function (key) {
                _this.tabBarElement[key].style.transform = 'translateY(56px)';
            });
        }
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        if (this.tabBarElement !== null) {
            // code...
            Object.keys(this.tabBarElement).map(function (key) {
                _this.tabBarElement[key].style.transform = 'translateY(0)';
            });
        }
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loginService.login(_this.facebookUrl).then(function (success) {
                switch (_this.pageNext) {
                    case 'CreatePrayerPage':
                        // code...
                        _this.navCtrl.push(CreatePrayerPage);
                        break;
                    case 'AccountPage':
                        // code...
                        _this.navCtrl.push(AccountPage);
                        break;
                    default:
                        // code...
                        break;
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    LoginPage.prototype.googleLogin = function () {
    };
    LoginPage.prototype.instagramLogin = function () {
    };
    LoginPage.prototype.twitterLogin = function () {
        var _this = this;
        this.loginService.login(this.twitterUrl).then(function (success) {
            switch (_this.pageNext) {
                case 'CreatePrayerPage':
                    // code...
                    _this.navCtrl.push(CreatePrayerPage);
                    break;
                case 'AccountPage':
                    // code...
                    _this.navCtrl.push(AccountPage);
                    break;
                default:
                    // code...
                    break;
            }
        }, function (err) {
            console.log(err);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [Platform, NavController,
        NavParams, LoginService, Storage])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map