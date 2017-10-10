import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { Prayers } from '../pages/prayers/prayers';
import { AddPrayers } from '../pages/add-prayers/add-prayers';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About', component: AboutPage },
      { title: 'Home', component: HomePage },
      { title: 'Login', component: Login },
      { title: 'Prayers', component: Prayers },
      { title: 'Add Prayer', component: AddPrayers }
    ];

  }
}
