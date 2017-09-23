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
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Deploy } from '@ionic/cloud-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { PrayerPage } from '../pages/prayer/prayer';
import { CreatePrayerPage } from '../pages/create-prayer/create-prayer';
var MyApp = (function () {
    function MyApp(platform, deploy) {
        this.deploy = deploy;
        this.rootPage = TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Account', component: AccountPage },
            { title: 'Login', component: LoginPage },
            { title: 'Prayers', component: PrayerPage },
            { title: 'Add Prayer', component: CreatePrayerPage }
        ];
    }
    return MyApp;
}());
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, Deploy])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map