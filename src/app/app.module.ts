import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
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


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '1ee57d47'
  }
};

@NgModule({
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
