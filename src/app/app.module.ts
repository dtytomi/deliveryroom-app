import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { Prayers } from '../pages/prayers/prayers';
import { AddPrayers } from '../pages/add-prayers/add-prayers';
import { LoginService } from '../providers/login-service';
import { PrayersService } from '../providers/prayers-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
>>>>>>> rebuilding deliveryroom

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddPrayers,
    HomePage,
    Login,
    Prayers,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddPrayers,
    HomePage,
    Login,
    Prayers,
    TabsPage
  ],
  providers: [
    InAppBrowser,
    LoginService,
    PrayersService,
    StatusBar,
    SpinnerDialog,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
