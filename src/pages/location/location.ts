import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/*import { HomePage } from '../home/home';*/
import { Storage } from '@ionic/storage';

import { TourlistPage } from '../tourlist/tourlist';
 

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  place: any;
  type: any;

  i:any;
  appointment_types: any;

  x = {
    "Arenal": 
    [{
      "id": "ar1",
      "title": "ATV Adventure",
      "image": "arenal_one.jpg",
      "price": 99.00
    },
    {
      "id": "ar2",
      "title": "Arenal Volcano National Park Hike",
      "image": "arenal_two.jpg",
      "price": 55.00
    },
    {
      "id": "ar3",
      "title": "Arenal Volcano to MonteverdeTransfer Tour",
      "image": "arenal_three.jpg",
      "price": 70.00
  }],
    "Guanacaste": 
    [{
      "id": "gu1",
      "title": "2 Tank Scuba Dives",
      "image": "guan_one.jpg",
      "price": 110.00
    },
    {
      "id": "gu2",
      "title": "ATV Tour Guanacaste",
      "image": "guan_two.jpg",
      "price": 75.00
    },
  {
    "id": "gu3",
    "title": "ATV Tour Tamarindo",
    "image": "guan_three.jpg",
    "price": 85.00
  }],
    "Jaco": 
    [{
      "id": "ja1",
      "title": "ATV Tour",
      "image": "jaco_one.jpg",
      "price": 80.00
    },
    {
      "id": "ja2",
      "title": "Buggy Jungle & River Combos",
      "image": "jaco_two.jpg",
      "price": 115.00
    },
  {
    "id": "ja3",
    "title": "Carara National Park",
    "image": "jaco_three.jpg",
    "price": 85.00
  }],
    "Manuel Antonio":
    [{
      "id": "ma1",
      "title": "ATV Tour Manuel Antonio",
      "image": "manuel_one.jpg",
      "price": 99.00
    },
    {
      "id": "ma2",
      "title": "Canopy Safari Zipline Tour",
      "image": "manuel_two.jpg",
      "price": 115.00
    },
  {
    "id": "ma3",
    "title": "Carara Biological Reserve",
    "image": "manuel_three.jpg",
    "price": 159.00
  }]
}

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage, public alertCtrl: AlertController) {
    this.appointment_types = Object.keys(this.x);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  public optionsFn(): void { 
    let locationvalue = this.place;
    console.log(locationvalue);
    let y = this.x;
    this.storage.set('my-json', y[locationvalue]);
    
   }


   TourlistPage(){
    if (!this.place) {
      this.showAlert();
      //return;
   }
   else{
    this.navCtrl.push(TourlistPage);
   }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Please choose one',
      buttons: ['OK']
    });
    alert.present();
  }
}

