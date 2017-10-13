import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  latitude: Number;
  longitude: Number;
  address: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.latitude = navParams.get('latitude');
    this.longitude = navParams.get('longitude');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.loadMap();
  }
loadMap(){
  let currentLocation = (this.latitude, this.longitude); 

  let mapOptions = { //used var instead of let
    zoom: 12,
    center: currentLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  let map = new google.maps.Map(document.getElementById('map'),mapOptions);

  let marker = new google.maps.Marker({ 
    position: currentLocation,
    map: map
  });

  let geocoder = new google.maps.Geocoder(); 
  geocoder.geocode('address',function(results,status){
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]){
        this.address = results[0].formatted_address;
        let infoWindow = new google.maps.InfoWindow({ 
          content: this.address
        })

        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(map,marker);
        });
      } //close result
    }
  })// close geocode
}// close loadmap func
}
