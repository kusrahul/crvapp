import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BooknowPage } from '../booknow/booknow';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the TourlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tourlist',
  templateUrl: 'tourlist.html',
})


export class TourlistPage {
  value: any;
  val:any;
  items:any;
  postList:any;
  optionsFn:any;
  displayData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public storage:Storage) {
   
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad TourlistPage');
   this.storage.get('my-json').then((val)=>{
    this.val = val;
    console.log(val); 
    });
  }
  showMsg(id:any)
  {
    //console.log(id);
    this.storage.set('myId', id);
    this.navCtrl.push(BooknowPage);
  }

}
