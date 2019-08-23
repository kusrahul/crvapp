import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
/*import { HomePage } from '../home/home';*/
import { Storage } from '@ionic/storage';
import { TourlistPage } from '../tourlist/tourlist';
import { RestProvider } from '../../providers/rest/rest';
 

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
  users:any;

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
  },
  {
    "id": "ar4",
    "title": "Baldi Hot Springs",
    "image": "L25-1.jpg",
    "price": 63.00
},
{
  "id": "ar5",
  "title": "Baldi Termales y Eco Arenal Hotel",
  "image": "L315-1.jpg",
  "price": 85.00
},
{
  "id": "ar6",
  "title": "Birdwatching Tour",
  "image": "L59-1.jpg",
  "price": 65.00
},
{
  "id": "ar7",
  "title": "COMBO Arenal Volcano Hike & Ecotermales",
  "image": "L63-1.jpg",
  "price": 137.00
},
{
  "id": "ar8",
  "title": "Canopy Vista Arenal",
  "image": "L35-1.jpg",
  "price": 55.00
},
{
  "id": "ar9",
  "title": "Canyoning Waterfall Rappel",
  "image": "L37-1.jpg",
  "price": 101.00
},
{
  "id": "ar10",
  "title": "Caño Negro & Río Frío Boat Tour",
  "image": "L55-1.jpg",
  "price": 75.00
},
{
  "id": "ar11",
  "title": "Chocolate Waterfall Adventure",
  "image": "L68-1.jpg",
  "price": 97.00
},
{
  "id": "ar12",
  "title": "Club Rio Multi-Adventure Package",
  "image": "L42-1.jpg",
  "price": 109.00
},
{
  "id": "ar13",
  "title": "Combo Arenal Volcano Hike & Tabacon",
  "image": "L64-1.jpg",
  "price": 173.00
},
{
  "id": "ar14",
  "title": "Cooking Class & Dinner with Local Family",
  "image": "L69-1.jpg",
  "price": 47.00
},
{
  "id": "ar15",
  "title": "Ecotermales Hot Springs",
  "image": "L30-1.jpg",
  "price": 75.00
},
{
  "id": "ar16",
  "title": "Eden Chocolate Tour",
  "image": "L338-1.jpg",
  "price": 27.00
},
{
  "id": "ar17",
  "title": "Gravity Falls",
  "image": "L34-1.jpg",
  "price": 125.00
},
{
  "id": "ar18",
  "title": "Guanacaste to/from Arenal VolcanoTransfer Tour",
  "image": "L75-1.jpg",
  "price": 130.00
},
{
  "id": "ar19",
  "title": "Hanging Bridges & Ecotermales",
  "image": "L24-1.jpg",
  "price": 163.00
},
{
  "id": "ar20",
  "title": "Hanging Bridges & Tabacon Hot Springs",
  "image": "L28-1.jpg",
  "price": 199.00
},
{
  "id": "ar21",
  "title": "Hanging Bridges & The SpringsHot Springs",
  "image": "L27-1.jpg",
  "price": 171.00
},
{
  "id": "ar22",
  "title": "Hanging Bridges & Titoku Hot Springs",
  "image": "L26-1.jpg",
  "price": 149.00
},
{
  "id": "ar23",
  "title": "Hanging Bridges Tour",
  "image": "L53-1.jpg",
  "price": 70.00
},
{
  "id": "ar24",
  "title": "Hiking with a local expert!",
  "image": "L242-2.jpg",
  "price": 65.00
},
{
  "id": "ar25",
  "title": "Horseback Riding to La Fortuna Waterfall",
  "image": "L61-1.jpg",
  "price": 73.00
},
{
  "id": "ar26",
  "title": "Kalambu Water Park",
  "image": "L33-1.jpg",
  "price": 59.00
},
{
  "id": "ar27",
  "title": "Kayak on Lake Arenal",
  "image": "L50-1.jpg",
  "price": 60.00
},
{
  "id": "ar28",
  "title": "Kayak on Peñas Blancas River",
  "image": "L61-1.jpg",
  "price": 57.00
},
{
  "id": "ar29",
  "title": "La Fortuna Waterfall by Van/Car",
  "image": "L33-1.jpg",
  "price": 78.00
},
{
  "id": "ar30",
  "title": "Lost Canyon Adventure Canyoneering",
  "image": "L50-1.jpg",
  "price": 99.00
},
{
  "id": "ar31",
  "title": "Lost Canyon, Horseback Riding to Waterfall & Indigenous Vilage",
  "image": "L49-1.jpg",
  "price": 150.00
},
{
  "id": "ar32",
  "title": "Mambo Combo—Canyoneering & White Water Rafting Tour",
  "image": "L36-1.jpg",
  "price": 159.00
},
{
  "id": "ar33",
  "title": "Mistico Hanging Bridges",
  "image": "L244-1.jpg",
  "price": 38.00
},
{
  "id": "ar34",
  "title": "Mountain Bike Ride: Hills, Pueblos & Swimming Holes",
  "image": "L74-1.jpg",
  "price": 75.00
},
{
  "id": "ar35",
  "title": "Mountain Bike Ride: Volcano & Laker",
  "image": "L73-1.jpg",
  "price": 75.00
},
{
  "id": "ar36",
  "title": "Organic Coffee Farm Visit",
  "image": "L70-1.jpg",
  "price": 68.00
},
{
  "id": "ar37",
  "title": "Paradise Hot Springs",
  "image": "L31-1.jpg",
  "price": 59.00
},
{
  "id": "ar38",
  "title": "Rio Celeste Tour",
  "image": "L54-1.jpg",
  "price": 130.00
},
{
  "id": "ar39",
  "title": "Sky Limit",
  "image": "L46-1.jpg",
  "price": 77.00
},
{
  "id": "ar40",
  "title": "Sky River Drift",
  "image": "L47-1.jpg",
  "price": 69.00
},
{
  "id": "ar41",
  "title": "Sky Tram & Sky Trek Tour",
  "image": "L44-2.jpg",
  "price": 77.00
},
{
  "id": "ar42",
  "title": "Sky Tram & Sky Walk Tour",
  "image": "L43-1.jpg",
  "price": 64.00
},
{
  "id": "ar43",
  "title": "Sky Tram Up & Down",
  "image": "L52-1.jpg",
  "price": 44.00
},
{
  "id": "ar44",
  "title": "Sky Tram, Trek & Walk Combo",
  "image": "L45-1.jpg",
  "price": 94.00
},
{
  "id": "ar45",
  "title": "Sky Wild Kayaking",
  "image": "L48-2.jpg",
  "price": 45.00
},
{
  "id": "ar46",
  "title": "Sportfishing on Lake Arenal",
  "image": "L71-1.jpg",
  "price": 498.00
},
{
  "id": "ar47",
  "title": "Stand Up Paddling (SUP) on Lake Arenal",
  "image": "L72-1.jpg",
  "price": 65.00
},
{
  "id": "ar48",
  "title": "Tabacon Hot Springs",
  "image": "L29-1.jpg",
  "price": 85.00
},
{
  "id": "ar49",
  "title": "Tabacon Hot Springs PM Entrance with dinner",
  "image": "L316-1.jpg",
  "price": 70.00
},
{
  "id": "ar50",
  "title": "The Arenal 4-in-1 Combo Tour - Hanging Bridges & The Springs",
  "image": "L22-1.jpg",
  "price": 248.00
},
{
  "id": "ar51",
  "title": "The Arenal 4-in-1 Combo Tour - Safari Float & Ecotermales",
  "image": "L20-1.jpg",
  "price": 242.00
},
{
  "id": "ar52",
  "title": "The Arenal 4-in-1 Combo Tour - Safari Float & Tabacon",
  "image": "L21-1.jpg",
  "price": 259.00
},
{
  "id": "ar53",
  "title": "The Arenal 4-in-1 Combo Tour - Safari Float & The Springs",
  "image": "L23-1.jpg",
  "price": 248.00
},
{
  "id": "ar54",
  "title": "The Arenal 4-in-1 Combo Tour Hanging Bridges & Ecotermales",
  "image": "L17-1.jpg",
  "price": 259.00
},
{
  "id": "ar55",
  "title": "The Arenal 4-in-1 Combo Tour- Hanging Bridges & Tabacon",
  "image": "L19-1.jpg",
  "price": 259.00
},
{
  "id": "ar56",
  "title": "The Plantain ATV Tour",
  "image": "L275-1.jpg",
  "price": 55.00
},
{
  "id": "ar57",
  "title": "The Springs’ Hot Springs",
  "image": "L32-1.jpg",
  "price": 80.00
},
{
  "id": "ar58",
  "title": "Venado Caves Tour",
  "image": "L58-1.jpg",
  "price": 83.00
},
{
  "id": "ar59",
  "title": "Volcano National History Walk &The Springs Hot Springs",
  "image": "L65-1.jpg",
  "price": 150.00
},
{
  "id": "ar60",
  "title": "White Water Rafting - Rio Balsa:Class 2-3",
  "image": "L39-1.jpg",
  "price": 75.00
},
{
  "id": "ar61",
  "title": "White Water Rafting - Rio Toro:Class 3-4",
  "image": "L40-1.jpg",
  "price": 125.00
},
{
  "id": "ar62",
  "title": "Whitewater Rafting Sarapiqui Class 3/4s",
  "image": "L295-1.jpg",
  "price": 95.00
},
{
  "id": "ar63",
  "title": "Wildlife Safari Float",
  "image": "L56-1.jpg",
  "price": 67.00
},
{
  "id": "ar64",
  "title": "Zorbing at Arenal",
  "image": "L245-1.jpg",
  "price": 34.00
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
  },
  {
    "id": "gu4",
    "title": "Barra Honda Caves",
    "image": "L91-1.jpg",
    "price": 165.00
  },
  {
    "id": "gu5",
    "title": "Beach Tour & Snorkeling",
    "image": "L79-1.jpg",
    "price": 108.00
  },
{
  "id": "gu6",
  "title": "Borinquen Combo Tour",
  "image": "L90-1.jpg",
  "price": 135.00
},
{
  "id": "gu7",
  "title": "Buena Vista Combo Tour",
  "image": "L82-1.jpg",
  "price": 130.00
},
{
  "id": "gu8",
  "title": "Canopy Zipline Tour",
  "image": "L87-1.jpg",
  "price": 71.00
},
{
"id": "gu9",
"title": "Class 2 & 3 Rafting and Rappel",
"image": "L85-1.jpg",
"price": 129.00
},
{
  "id": "gu10",
  "title": "Corobici River Floating Tour",
  "image": "L94-1.jpg",
  "price": 90.00
},
{
  "id": "gu11",
  "title": "Early Birdwatching Tour",
  "image": "L93-1.jpg",
  "price": 75.00
},
{
"id": "gu12",
"title": "Guachipelin Adventure Combo",
"image": "L92-1.jpg",
"price": 159.00
},
{
  "id": "gu13",
  "title": "Guanacaste Snorkeling Tour",
  "image": "L80-1.jpg",
  "price": 49.00
},
{
  "id": "gu14",
  "title": "Guanacaste to/from Arenal VolcanoTransfer Tour",
  "image": "L110-1.jpg",
  "price": 140.00
},
{
"id": "gu15",
"title": "Heliconias Hanging Bridges Tour",
"image": "L95-1.jpg",
"price": 125.00
},
{
  "id": "gu16",
  "title": "Horseback Riding",
  "image": "L96-1.jpg",
  "price": 82.00
},
{
  "id": "gu17",
  "title": "Horseback Riding with Finca La Montana",
  "image": "L246-1.jpg",
  "price": 90.00
},
{
"id": "gu18",
"title": "Kayak Estuary Tour",
"image": "L98-1.jpg",
"price": 50.00
},
{
  "id": "gu19",
  "title": "Murcielago Park Expedition",
  "image": "L101-1.jpg",
  "price": 150.00
},
{
  "id": "gu20",
  "title": "Nicaragua One Day Tour",
  "image": "L109-1.jpg",
  "price": 180.00
},
{
"id": "gu21",
"title": "Pacific Green Turtle Nesting",
"image": "L99-1.jpg",
"price": 115.00
},
{
  "id": "gu22",
  "title": "Palo Verde National Park Tour",
  "image": "L104-1.jpg",
  "price": 90.00
},
{
  "id": "gu23",
  "title": "Private Hidden Beaches Tour",
  "image": "L81-1.jpg",
  "price": 225.00
},
{
"id": "gu24",
"title": "Rincon de la Vieja National Park Tour",
"image": "L105-1.jpg",
"price": 95.00
},
{
  "id": "gu25",
  "title": "Safari Float on Tenorio River",
  "image": "L97-1.jpg",
  "price": 126.00
},
{
  "id": "gu26",
  "title": "Santa Rosa National Park Hike & Liberia City Tour",
  "image": "L100-1.jpg",
  "price": 103.00
},
{
"id": "gu27",
"title": "Sapoa River Expedition",
"image": "L103-1.jpg",
"price": 105.00
},
{
  "id": "gu28",
  "title": "Scuba Diver Certification Course",
  "image": "L107-1.jpg",
  "price": 335.00
},
{
  "id": "gu29",
  "title": "Sensoria —Land of Senses",
  "image": "L89-1.jpg",
  "price": 190.00
},
{
"id": "gu30",
"title": "Sunset Catamaran Tour",
"image": "L78-1.jpg",
"price": 85.00
},
{
  "id": "gu31",
  "title": "Tamarindo Cycling adventure!",
  "image": "L247-1.jpg",
  "price": 70.00
},
{
  "id": "gu32",
  "title": "Tamarindo Mangrove & Estuary Boat Tour",
  "image": "L106-1.jpg",
  "price": 60.00
},
{
"id": "gu33",
"title": "Tamarindo Surf Lessons",
"image": "L83-1.jpg",
"price": 45.00
},
{
  "id": "gu34",
  "title": "White Water River Rafting Tenorio or Toro River: Class 3-4",
  "image": "L84-1.jpg",
  "price": 130.00
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
  },
  {
    "id": "ja4",
    "title": "Carara National Park & Crocodile River Cruise Combo",
    "image": "L124-1.jpg",
    "price": 125.00
  },
  {
    "id": "ja5",
    "title": "Damas Island Mangrove: Boat Tour",
    "image": "L128-1.jpg",
    "price": 115.00
  },
  {
    "id": "ja6",
    "title": "Damas Island Mangrove: Kayak Tour",
    "image": "L127-1.jpg",
    "price": 115.00
  },
  {
    "id": "ja7",
    "title": "Horseback Riding Jaco",
    "image": "L130-1.jpg",
    "price": 45.00
  },
  {
    "id": "ja8",
    "title": "Horseback Riding to Bijagual Waterfall",
    "image": "L131-1.jpg",
    "price": 95.00
  },
  {
    "id": "ja9",
    "title": "Horseback Riding to Tocori Waterfalls",
    "image": "L129-1.jpg",
    "price": 115.00
  },
  {
    "id": "ja10",
    "title": "Horseback Riding Jaco",
    "image": "L126-1.jpg",
    "price": 95.00
  },
  {
    "id": "ja11",
    "title": "Horseback Riding to Bijagual Waterfall",
    "image": "L135-1.jpg",
    "price": 95.00
  },
  {
    "id": "ja12",
    "title": "Horseback Riding to Tocori Waterfalls",
    "image": "L134-1.jpg",
    "price": 59.00
  },
  {
    "id": "ja13",
    "title": "Tortuga Island Catamaran Cruise",
    "image": "L120-1.jpg",
    "price": 145.00
  },
  {
    "id": "ja14",
    "title": "Villa Lapas Sky Way",
    "image": "L132-1.jpg",
    "price": 95.00
  },
  {
    "id": "ja15",
    "title": "Vista Los Sueños Canopy Tou",
    "image": "L121-1.jpg",
    "price": 65.00
  },
  {
    "id": "ja16",
    "title": "White Water River Rafting Savegre River Class 2-3",
    "image": "L136-1.jpg",
    "price": 115.00
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
      "title": "Arenal to/from Manuel Antonio Transfer Tour with Rafting on Rio Balsa",
      "image": "L167-1.jpg",
      "price": 115.00
    },
    {
      "id": "ma3",
      "title": "Arenal to/from Manuel AntonioTransfer Tour",
      "image": "L168-1.jpg",
      "price": 159.00
    },
    {
      "id": "ma4",
      "title": "Canopy Safari Zipline Tour",
      "image": "manuel_two.jpg",
      "price": 115.00
    },
    {
      "id": "ma5",
      "title": "Carara Biological Reserve",
      "image": "manuel_three.jpg",
      "price": 159.00
    },
    {
      "id": "ma6",
      "title": "Countryside Bird Watching Tour",
      "image": "L154-1.jpg",
      "price": 120.00
    },
    {
      "id": "ma7",
      "title": "Damas Island Mangrove Boat Tour",
      "image": "L155-1.jpg",
      "price": 65.00
    },
    {
      "id": "ma8",
      "title": "Damas Island Mangrove Kayak Tour",
      "image": "L156-1.jpg",
      "price": 65.00
    },
    {
      "id": "ma9",
      "title": "Horseback Riding Tocori Waterfalls",
      "image": "L162-1.jpg",
      "price": ""
    },
    {
      "id": "ma10",
      "title": "Jet Ski Tour",
      "image": "L165-1.jpg",
      "price": 75.00
    },
    {
      "id": "ma11",
      "title": "Kids Saving the Rainforest",
      "image": "L166-1.jpg",
      "price": 90.00
    },
    {
      "id": "ma12",
      "title": "Manuel Antonio National Park Tour",
      "image": "L149-1.jpg",
      "price": 71.00
    },
    {
      "id": "ma13",
      "title": "Night Kayak Adventure Damas Island",
      "image": "L157-1.jpg",
      "price": 75.00
    },
    {
      "id": "ma14",
      "title": "Ocean King Catmaran Tour",
      "image": "L153-1.jpg",
      "price": 80.00
    },
    {
      "id": "ma15",
      "title": "Parasailing Tour",
      "image": "L160-1.jpg",
      "price": 200.00
    },
    {
      "id": "ma16",
      "title": "Santa Juana Cultural Experience",
      "image": "L158-1.jpg",
      "price": 125.00
    },
    {
      "id": "ma17",
      "title": "Snorkeling & Coastal Kayak Tour",
      "image": "L159-1.jpg",
      "price": 65.00
    },
    {
      "id": "ma18",
      "title": "Surf Lesson",
      "image": "L164-1.jpg",
      "price": 65.00
    },
    {
      "id": "ma19",
      "title": "Wakeboard or Waterski Tour",
      "image": "L163-1.jpg",
      "price": 100.00
    },
    {
      "id": "ma20",
      "title": "White Water River Rafting Savegre River: Class 2-3",
      "image": "L161-1.jpg",
      "price": ""
    }]
}


  usertoken = { grant_type: 'client_credentials', client_id: 'PfLokUaF2lVdT4VBh0NMGc2tdlwh7h1DpuqmMxg2', client_secret: 'RFLFVhoiLM8AtHYBMziB5P4UMuRe6ukQIK8PniW01NBvDZcIu9Js9i9NSaZIQkGcAO6yta4CL8JLJfN25hGAua5E7MOnx5fbBX5p6mUJ7Resq4PbOz5xzGWp8ybk6LHd'};

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage, public alertCtrl: AlertController, public restProvider: RestProvider) {
    this.appointment_types = Object.keys(this.x);
    this.getUsers();
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

  getUsers() {
    this.restProvider.getToken(this.usertoken).then(data => {
      this.users = data;
      let token = this.users.access_token;
      let tokenval = [{"access_token": token}]
      this.storage.set('accessToken', tokenval);
      console.log(token);
    });

    

  }
}

