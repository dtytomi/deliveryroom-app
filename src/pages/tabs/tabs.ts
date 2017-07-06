import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PrayerPage } from '../prayer/prayer';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = PrayerPage;
  tab3Root: any = AccountPage;

  constructor() {

  }
}
