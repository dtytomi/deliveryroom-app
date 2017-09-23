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
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the PrayerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var PrayerService = (function () {
    function PrayerService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    PrayerService.prototype.getPrayers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://deliveryroom.mybluemix.net/prayer/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PrayerService.prototype.getPrayersByCategory = function (category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.get('https://deliveryroom.mybluemix.net/category', JSON.stringify(category))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PrayerService.prototype.createPrayer = function (prayer) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new Headers();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post('https://deliveryroom.mybluemix.net/prayer/', JSON.stringify(prayer), { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    _this.getPrayers();
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    PrayerService.prototype.deletePrayer = function (id) {
        this.http.delete('https://deliveryroom.mybluemix.net/prayer/' + id).subscribe(function (res) {
            console.log(res.json());
        });
    };
    return PrayerService;
}());
PrayerService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Storage])
], PrayerService);
export { PrayerService };
//# sourceMappingURL=prayer-service.js.map