import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the BooknowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booknow',
  templateUrl: 'booknow.html',
})
export class BooknowPage {
   title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get("title");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooknowPage');
  }

  checkoutPage()
  {
    this.navCtrl.push(CheckoutPage);
  }
}
