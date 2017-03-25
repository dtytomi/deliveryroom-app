import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { PrayerPage } from '../pages/prayer/prayer';
import { CreatePrayerPage } from '../pages/create-prayer/create-prayer';

import { LoginService } from '../providers/login-service';
import { PrayerService } from '../providers/prayer-service';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '1ee57d47'
  }
};

@NgModule({
  declarations: [
    MyApp,
    CreatePrayerPage,
    HomePage,
    TabsPage,
    LoginPage,
    AccountPage,
    PrayerPage  
  ],
  imports: [
    IonicModule.forRoot(MyApp),
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
    LoginService,
    PrayerService,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
