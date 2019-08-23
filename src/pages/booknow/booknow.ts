import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

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
   credentialsForm: FormGroup;

   @ViewChild('personquant') personquant;
   @ViewChild('startdate') startdate;
   @ViewChild('enddate') enddate;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, private formBuilder: FormBuilder) {
    this.title = this.navParams.get("title");

    this.credentialsForm = this.formBuilder.group({
      text: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  /*onSignIn() {
  console.log(this.startdate.value, this.enddate.value, this.personquant.value);

  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooknowPage');
    this.storage.get('myValue').then((valId)=>{
      this.val = valId;
      console.log(this.val); 
      });
  }

  checkoutPage(myId:any, myPrice:any)
  {
    let calc = myPrice*this.personquant.value;
    let tax = (calc*5)/100;
    let day = this.personquant.value;
    let total = calc + tax;
    console.log(this.startdate.value, this.startdate.value, this.personquant.value);
    let checkVal = [{"myId": myId, "calPrice": calc, "day": day, "myPrice": myPrice, "tax": tax, "total": total}]
    this.storage.set('calAmount', checkVal);
    this.navCtrl.push(CheckoutPage);
  }
}
