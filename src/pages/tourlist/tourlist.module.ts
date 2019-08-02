import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourlistPage } from './tourlist';

@NgModule({
  declarations: [
    TourlistPage,
  ],
  imports: [
    IonicPageModule.forChild(TourlistPage),
  ],
})
export class TourlistPageModule {}
