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
		"title": "ATV Adventure",
    "image": "arenal_one.jpg"
  },
  {
    "title": "Arenal Volcano National Park Hike",
    "image": "arenal_two.jpg"
  },
{
  "title": "Arenal Volcano to MonteverdeTransfer Tour",
  "image": "arenal_three.jpg"
}],
  "Guanacaste": 
  [{
    "title": "2 Tank Scuba Dives",
    "image": "guan_one.jpg"
  },
  {
    "title": "ATV Tour Guanacaste",
    "image": "guan_two.jpg"
  },
{
  "title": "ATV Tour Tamarindo",
  "image": "guan_three.jpg"
}],
  "Jaco": 
  [{
    "title": "ATV Tour",
    "image": "jaco_one.jpg"
  },
  {
    "title": "Buggy Jungle & River Combos",
    "image": "jaco_two.jpg"
  },
{
  "title": "Carara National Park",
  "image": "jaco_three.jpg"
}],
  "Manuel Antonio":
  [{
    "title": "ATV Tour Manuel Antonio",
    "image": "manuel_one.jpg"
  },
  {
    "title": "Canopy Safari Zipline Tour",
    "image": "manuel_two.jpg"
  },
{
  "title": "Carara Biological Reserve",
  "image": "manuel_three.jpg"
}]
}

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage, public alertCtrl: AlertController) {
    this.appointment_types = Object.keys(this.x)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  /*openHomePage(){
    this.navCtrl.push(HomePage);
  }*/

  public optionsFn(): void { 
    let locationvalue = this.place;
    console.log(locationvalue);
    let x = {
      "Arenal": 
      [{
        "title": "ATV Adventure",
        "image": "arenal_one.jpg"
      },
      {
        "title": "Arenal Volcano National Park Hike",
        "image": "arenal_two.jpg"
      },
      {
      "title": "Arenal Volcano to MonteverdeTransfer Tour",
      "image": "arenal_three.jpg"
    }],
      "Guanacaste": 
      [{
        "title": "2 Tank Scuba Dives",
        "image": "guan_one.jpg"
      },
      {
        "title": "ATV Tour Guanacaste",
        "image": "guan_two.jpg"
      },
    {
      "title": "ATV Tour Tamarindo",
      "image": "guan_three.jpg"
    }],
      "Jaco": 
      [{
        "title": "ATV Tour",
        "image": "jaco_one.jpg"
      },
      {
        "title": "Buggy Jungle & River Combos",
        "image": "jaco_two.jpg"
      },
    {
      "title": "Carara National Park",
      "image": "jaco_three.jpg"
    }],
      "Manuel Antonio":
      [{
        "title": "ATV Tour Manuel Antonio",
        "image": "manuel_one.jpg"
      },
      {
        "title": "Canopy Safari Zipline Tour",
        "image": "manuel_two.jpg"
      },
    {
      "title": "Carara Biological Reserve",
      "image": "manuel_three.jpg"
    }]
    }

      this.storage.set('my-json', x[locationvalue]);
    
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

