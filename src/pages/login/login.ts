import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';*/
import { WelcomePage } from "../welcome/welcome";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user: any;
fb: any;
e: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

welcomePage()
{
    this.navCtrl.push(WelcomePage);
}
}
