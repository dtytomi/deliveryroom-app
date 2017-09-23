var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LoginService = (function () {
    function LoginService(http, storage, iab, events) {
        this.http = http;
        this.storage = storage;
        this.iab = iab;
        this.events = events;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
    }
    LoginService.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load token if exist
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new Headers();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.get('https://deliveryroom.mybluemix.net/token', { headers: headers })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    console.error(err);
                    reject(err);
                });
            });
        });
    };
    LoginService.prototype.login = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // body...
            var browser = _this.iab.create(url, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
            var exitSubscription = browser.on("exit").subscribe(function (event) {
                console.error("The social login sign in flow was canceled");
                reject(new Error("The social login sign in flow was canceled"));
            });
            window.plugins.spinnerDialog.show("Loading", "Loading...");
            browser.on('loadstop').subscribe(function (event) {
                if (event.url.indexOf(url) > -1) {
                    // code...
                    _this.newUrl = event.url;
                    return;
                }
                if (event.url.indexOf(_this.newUrl) > -1) {
                    // code...
                    _this.newUrl = event.url;
                    return;
                }
                window.plugins.spinnerDialog.hide();
                if (event.url.indexOf('https://deliveryroom.mybluemix.net/#/') > -1) {
                    exitSubscription.unsubscribe();
                    browser.close();
                    _this.client_token = event.url.match('oauth_token=(.*)&userId')[1];
                    _this.userId = event.url.match('&userId=(.*)')[1];
                    _this.token = _this.client_token.replace('%20', ' ');
                    // set a key/value
                    _this.storage.set(_this.HAS_LOGGED_IN, true);
                    _this.storage.set('token', _this.token);
                    _this.storage.set('token-date', JSON.stringify(new Date()));
                    _this.storage.set('userId', _this.userId);
                    _this.events.publish('user:login');
                    resolve(event.url);
                }
            });
            browser.on('loaderror').subscribe(function (event) {
                // body...
                window.plugins.spinnerDialog.hide();
                console.error("Problem authenticating with social media account");
                reject("Problem authenticating with social media account");
            });
        });
    };
    LoginService.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load token if exist
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new Headers();
                headers.append('Authorization', _this.token);
                _this.http.get('https://deliveryroom.mybluemix.net/me', { headers: headers })
                    .subscribe(function (response) {
                    resolve(response.json());
                }, function (err) {
                    console.error(err);
                    reject(err);
                });
            });
        });
    };
    LoginService.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('currentUser');
    };
    // return promise
    LoginService.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    return LoginService;
}());
LoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Storage,
        InAppBrowser, Events])
], LoginService);
export { LoginService };
//# sourceMappingURL=login-service.js.map