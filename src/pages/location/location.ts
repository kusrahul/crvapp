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
	"Consultation": [{
		"name": "Joe Smith"
	}, {
		"name": "Jane Doe"
	}],
	"Re - evaluation": [{
		"name": "Joe Smith2"
	}, {
		"name": "Jane Doe2"
	}],
	"Meeting": [{
		"name": "Joe Smith3"
	}, {
		"name": "Jane Doe3"
	}],
	"Testing": [{
		"name": "Joe Smith4"
	}, {
		"name": "Jane Doe4"
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

  public optionsFn(): void { //here item is an object 
    let placevalue = this.place;
    console.log(placevalue);
    let your_json_object = { "name":"birja", "age":30, "car":null, "address": "abs street" };

    // set a key/value
    this.storage.set('my-json', your_json_object);
  
    // to get a key/value pair
    this.storage.get('my-json').then((val) => {
      console.log('Your json is', val);
    });
  }
}

