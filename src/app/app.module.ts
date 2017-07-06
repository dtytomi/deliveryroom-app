import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
<<<<<<< HEAD
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


=======
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { PrayerPage } from '../pages/prayer/prayer';
import { CreatePrayerPage } from '../pages/create-prayer/create-prayer';
>>>>>>> 968f46a71553a465c62f69500a01c3efbadd9f33

import { LoginService } from '../providers/login-service';
import { PrayerService } from '../providers/prayer-service';

<<<<<<< HEAD
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

=======
>>>>>>> 968f46a71553a465c62f69500a01c3efbadd9f33

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '1ee57d47'
  }
};

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
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
=======
    CreatePrayerPage,
    HomePage,
    TabsPage,
    LoginPage,
    AccountPage,
    PrayerPage  
  ],
  imports: [
    IonicModule.forRoot(MyApp),
>>>>>>> 968f46a71553a465c62f69500a01c3efbadd9f33
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
<<<<<<< HEAD
    InAppBrowser,
    LoginService,
    PrayerService,
    StatusBar,
    SplashScreen,
=======
    LoginService,
    PrayerService,
    Storage,
>>>>>>> 968f46a71553a465c62f69500a01c3efbadd9f33
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
