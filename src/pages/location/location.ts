import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
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
		"title": "Ar1",
    "image": "arenal_one.jpg"
	}],
  "Guanacaste": 
  [{
		"title": "Guan2",
		"image": "Lorem ipsum2"
	}],
  "Jaco": 
  [{
		"title": "Ja3",
		"image": "Lorem ipsum3"
  }],
  "Manuel Antonio":
  [{
    "title": "Man4",
    "image": "Lorem ipsum4"
  }]
}

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.appointment_types = Object.keys(this.x)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  openHomePage(){
    this.navCtrl.push(HomePage);
  }

  TourlistPage(){
    
    this.navCtrl.push(TourlistPage);
  }

  public optionsFn(): void { 
    let locationvalue = this.place;
    console.log(locationvalue);
    let x = {
      "Arenal": 
      [{
        "title": "Ar1",
        "image": "arenal_one.jpg"
      }],
      "Guanacaste": 
      [{
        "title": "Guan2",
        "image": "Lorem ipsum2"
      }],
      "Jaco": 
      [{
        "title": "Ja3",
        "description": "Lorem ipsum3"
      }],
      "Manuel Antonio":
      [{
        "title": "Man4",
        "image": "Lorem ipsum4"
      }]
    }
    this.storage.set('my-json', x[locationvalue]);
   }
}

