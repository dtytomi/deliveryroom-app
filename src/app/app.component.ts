import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {Deploy} from '@ionic/cloud-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { PrayerPage } from '../pages/prayer/prayer';
import { CreatePrayerPage } from '../pages/create-prayer/create-prayer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, public deploy: Deploy) {
    platform.ready().then(() => {
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
}
