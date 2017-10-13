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
  var currentLocation = (this.latitude, this.longitude); //used var instead of let

  var mapOptions = { //used var instead of let
    zoom: 12,
    center: currentLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map'),mapOptions); //used var instead of let

  var marker = new google.maps.Marker({ //used var instead of let
    position: currentLocation,
    map: map
  });

  var geocoder = new google.maps.Geocoder(); //used var instead of let
  geocoder.geocode('address',function(results,status){
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]){
        this.address = results[0].formatted_address;
        var infoWindow = new google.maps.InfoWindow({ //used var instead of let
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
