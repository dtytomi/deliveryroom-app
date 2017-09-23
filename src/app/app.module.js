var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CloudModule } from '@ionic/cloud-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { AccountPage } from '../pages/account/account';
import { CreatePrayerPage } from '../pages/create-prayer/create-prayer';
import { LoginPage } from '../pages/login/login';
import { PrayerPage } from '../pages/prayer/prayer';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginService } from '../providers/login-service';
import { PrayerService } from '../providers/prayer-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var cloudSettings = {
    'core': {
        'app_id': '1ee57d47'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AccountPage,
            CreatePrayerPage,
            HomePage,
            LoginPage,
            PrayerPage,
            TabsPage
        ],
        imports: [
            BrowserModule,
            HttpModule,
            JsonpModule,
            IonicModule.forRoot(MyApp),
            IonicStorageModule.forRoot(),
            CloudModule.forRoot(cloudSettings)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            CreatePrayerPage,
            HomePage,
            TabsPage,
            LoginPage,
            AccountPage,
            PrayerPage
        ],
        providers: [
            InAppBrowser,
            LoginService,
            PrayerService,
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map