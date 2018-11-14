import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { GoogleMaps, GoogleMap, Environment, Marker, BaseArrayClass, GoogleMapsEvent, MyLocationOptions, LocationService, GoogleMapZoomOptions } from '@ionic-native/google-maps';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Geolocation } from '@ionic-native/geolocation';

import { MapServiceProvider } from '../../providers/map.service/map.service';

@Component({
  selector: 'page-chapi-app2',
  templateUrl: 'chapi-app2.html'
})
export class ChapiApp2Page {

  map: GoogleMap;
  coordsActual: Coordinates;
  zoomActual: number = 0;


  constructor(public navCtrl: NavController, private geolocation: Geolocation, private mapServiceProvider: MapServiceProvider) {
    this.mapServiceProvider.mapData.subscribe(
      (data: any) => {
        console.log("Llegó a la sub")
        this.loadMap();
    });
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '',
      'API_KEY_FOR_BROWSER_DEBUG': ''
    });

    //pinta el mapa
    this.map = GoogleMaps.create('map_canvas')
    //geolocalización actual
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.coordsActual = resp.coords;

      this.map.addMarker({
        title: '@ionic-native/google-maps',
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: this.coordsActual.latitude,
          lng: this.coordsActual.longitude
        }
      })
      //zoom mapa con la posicion actual
      this.map.moveCamera({
        target: {
          lat: this.coordsActual.latitude,
          lng: this.coordsActual.longitude
        },
        zoom: 20
        
      })
      console.log(this.mapServiceProvider.getZoom());
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  loadMap() {

    this.map.moveCamera({
      target: {
        lat: this.coordsActual.latitude,
        lng: this.coordsActual.longitude
      },
      zoom: 20-this.mapServiceProvider.getZoom()
      
      //zoom: 1
      
    })
    console.log(this.mapServiceProvider.getZoom());
  }



}
