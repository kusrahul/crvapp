import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
val:any;

  @ViewChild('name') name;
  @ViewChild('email') email;
  @ViewChild('phone') phone;
  @ViewChild('address') address;
  @ViewChild('city') city;
  @ViewChild('country') country;
  @ViewChild('postalcode') postalcode;
  @ViewChild('note') note;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
    this.storage.get('calAmount').then((valId)=>{
      this.val = valId;
      console.log(this.val); 
      });
  }

  paymentPage()
  {
    console.log(this.name.value, this.email.value, this.phone.value, this.address.value, this.city.value, this.country.value, this.postalcode.value, this.note.value);
    this.navCtrl.push(PaymentPage);
  }

}
