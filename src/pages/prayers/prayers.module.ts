import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Prayers } from './prayers';

@NgModule({
  declarations: [
    Prayers,
  ],
  imports: [
    IonicPageModule.forChild(Prayers),
  ],
})
export class PrayersModule {}
