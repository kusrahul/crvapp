import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
//import { RestProvider } from '../providers/rest/rest';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { ContactusPage } from '../pages/contactus/contactus';
//import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { BooknowPage } from '../pages/booknow/booknow';
import { LocationPage } from '../pages/location/location';
import { TourlistPage } from '../pages/tourlist/tourlist';
import { CheckoutPage } from '../pages/checkout/checkout';
import { PackagesPage } from '../pages/packages/packages';
import { RegisterPage } from '../pages/register/register';
import { PaymentPage } from '../pages/payment/payment';
import { Facebook } from '@ionic-native/facebook/ngx';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductPage,
    AboutusPage,
    PrivacypolicyPage,
    ContactusPage,
    BooknowPage,
    WelcomePage,
    LocationPage,
    TourlistPage,
    CheckoutPage,
    PackagesPage,
    RegisterPage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    AboutusPage,
    PrivacypolicyPage,
    ContactusPage,
    BooknowPage,
    WelcomePage,
    LocationPage,
    TourlistPage,
    CheckoutPage,
    PackagesPage,
    RegisterPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    RestProvider
  ]
})
export class AppModule {}
