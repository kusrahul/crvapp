import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BooknowPage } from '../booknow/booknow';

/**
 * Generated class for the TourlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tourlist',
  templateUrl: 'tourlist.html',
})
export class TourlistPage {
  value: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourlistPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Per Person Tour',
      inputs: [{
        type:"text",
        name:"personText"
      }],
      buttons: ['OK'],
    });
    alert.present();
  }

  showMsg()
  {
    this.navCtrl.push(BooknowPage);
  }

}
