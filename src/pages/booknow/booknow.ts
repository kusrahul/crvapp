import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { Storage } from '@ionic/storage';

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
   val:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.title = this.navParams.get("title");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooknowPage');
    this.storage.get('myId').then((valId)=>{
      this.val = valId;
      console.log(this.val); 
      });
  }

  checkoutPage()
  {
    this.navCtrl.push(CheckoutPage);
  }
}
