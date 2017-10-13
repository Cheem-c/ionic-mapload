import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MapPage} from '../map/map'
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

onCurrentLocation: String;
latitude: Number;
longitude: Number;
speed: String;
accuracy: String;

  constructor(public navCtrl: NavController, public geolocation:Geolocation) {

  }
ionViewDidLoad(){
  this.findCurrentLocation();
}

findCurrentLocation(){
  this.geolocation.getCurrentPosition().then((position)=>{

    this.onCurrentLocation = "ON";
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.speed = (position.coords.speed? position.coords.speed + "meters/sec": "N/A");
    this.accuracy = (position.coords.accuracy? position.coords.accuracy + "meters": "N/A")

  },(error)=>{
    this.onCurrentLocation = "OFF";
    this.latitude = 38.98;
    this.longitude = -78.94;
    this.speed = "N/A";
    this.accuracy = "N/A";
    
    console.log(error)
  });
}
goToMapPage(){
  this.findCurrentLocation();

  this.navCtrl.push(MapPage, {latitude: this.latitude, longitude: this.longitude});
}
}

