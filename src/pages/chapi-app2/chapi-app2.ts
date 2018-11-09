import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import{ GoogleMaps, GoogleMap, Environment, Marker, BaseArrayClass, GoogleMapsEvent, MyLocationOptions, LocationService } from '@ionic-native/google-maps';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'page-chapi-app2',
  templateUrl: 'chapi-app2.html'
})
export class ChapiApp2Page {

  map: GoogleMap;
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '',
      'API_KEY_FOR_BROWSER_DEBUG': ''
    });
    //pinta el mapa
    this.map = GoogleMaps.create('map_canvas')
    //le pone marker al mapa en el punto
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'blue',
      animation: 'DROP',
      position:{
        lat: 43.0741904,
        lng:-89.3809802
      }
    }).then((marker: Marker)=>{
      //eventos relacionados al mapa
      marker.showInfoWindow();
      marker.addEventListenerOnce(GoogleMapsEvent.MARKER_CLICK).then();
      marker.one(GoogleMapsEvent.MARKER_CLICK).then();

      marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe();

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe();

      marker.off(GoogleMapsEvent.MARKER_CLICK, this.onMarkerClick);

      marker.off(GoogleMapsEvent.MARKER_CLICK);
      
      marker.off();

    })

    this.map.addMarkerSync({
      title: '@ionic-native/google-maps',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });


    let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>([
      {
        position: {lat:41.79883, lng: 140.75675},
        iconData: "./assets/imgs/Number-1-icon.png"
      },
      {
        position: {lat:41.799240000000005, lng: 140.75875000000000002},
        iconData: "./assets/imgs/Number-1-icon.png"
      },
      {
        position: {lat:41.79765000000000004, lng: 140.75905},
        iconData: "./assets/imgs/Number-1-icon.png"
      },
      {
        position: {lat:41.79637, lng: 140.76018000000002},
        title: "4",
        iconData: "blue"
      },
      {
        position: {lat:41.79567, lng: 140.75845},
        title: "5",
        iconData: "data: image/png;base64,iVBORw...CC"
      }
    ]);

    //para reconocer la posicion actual
    let option: MyLocationOptions ={
      enableHighAccuracy: true
    };

    LocationService.getMyLocation(option).then(location: myLocationService) => {
      this.map = GoogleMaps.create({
        'camera': location.latLng ,
        'zoom':16
      });
    }).catch((error: any) => {
      //can no get location, permission refused--
      console.log(error);
    });

    
    
  }

 
  
}