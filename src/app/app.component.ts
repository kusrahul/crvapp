import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { ContactusPage } from '../pages/contactus/contactus';
import { LoginPage } from '../pages/login/login'; 
import { WelcomePage } from '../pages/welcome/welcome';
import { LocationPage } from '../pages/location/location';
import { TourlistPage } from '../pages/tourlist/tourlist';
import { CheckoutPage } from '../pages/checkout/checkout';
//import { PackagesPage } from '../pages/packages/packages';
import { RegisterPage } from '../pages/register/register';
import { BooknowPage } from '../pages/booknow/booknow';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
Aboutus() {
    this.nav.push(AboutusPage);
}
Welcome() {
  this.nav.push(WelcomePage);
}
Privacypolicy() {
  this.nav.push(PrivacypolicyPage);
}
Contactus() {
  this.nav.push(ContactusPage);
}
Tour()
{
  this.nav.push(TourlistPage);
}
Check()
{
  this.nav.push(CheckoutPage);
}
Login()
{
  this.nav.push(LoginPage);
}
Register()
{
  this.nav.push(RegisterPage);
}
Book()
{
  this.nav.push(BooknowPage);
}
Location()
{
  this.nav.push(LocationPage);
}

}

