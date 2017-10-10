import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPrayers } from './add-prayers';

@NgModule({
  declarations: [
    AddPrayers,
  ],
  imports: [
    IonicPageModule.forChild(AddPrayers),
  ],
})
export class AddPrayersModule {}
