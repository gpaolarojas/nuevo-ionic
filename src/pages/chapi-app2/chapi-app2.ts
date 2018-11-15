import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';


import { GoogleMaps, GoogleMap, Environment, Marker, BaseArrayClass, GoogleMapsEvent, MyLocationOptions, LocationService, GoogleMapZoomOptions, MarkerOptions, MarkerCluster, Circle } from '@ionic-native/google-maps';
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
  events: Event[];
  latEvent: number = 0;
  longEvent: number = 0;
  infoMarker= [];
  nameEvent: string = "";
  namePlace: string = "";


  constructor(public navCtrl: NavController, private geolocation: Geolocation, private mapServiceProvider: MapServiceProvider) {
    this.mapServiceProvider.mapData.subscribe(
      (data: any) => {
        console.log("Llegó a la sub")
        this.loadMap();
        
    });
  }

  ionViewDidLoad() {
    this.initMap();
    this.loadEvents();
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
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: this.coordsActual.latitude,
          lng: this.coordsActual.longitude
        }
      })
      .then((marker:Marker)=>{
        this.map.addCircle({
          center:marker.getPosition(),
          radius: 10,
          fillColor:"rgba(0, 0, 255, 0.5)",
          strokeColor: "rgba(0, 0, 255, 0.5)",
          strokeWidth: 1
        }).then((circle: Circle)=>{
          marker.bindTo("position", circle, "center");
        });
      });
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

  loadEvents(){
    var markersData= new Array();
    this.mapServiceProvider.getEvents()
    .subscribe(events => { for (let i = 0; i < events.length; i++) {
      const event = events[i];
      this.latEvent = event['lat'];
      this.longEvent = event['long'];
      this.nameEvent = event['name'];
      this.namePlace = event['placeName'];
      console.log("soy lo que buscas" + event['lat'] + event['long']+ event['placeName']+ event['name']);
      markersData.push(
        {
          position: {lat: this.latEvent, lng: this.longEvent},
          name: this.nameEvent,
          address: this.namePlace
          
        }
      );
    }

    this.map.addMarkerCluster({
      markers: markersData,
      icons:[
        {
          min: 1, max: 9,
          url: "../../assets/icon/eventMarkerGraph.png",
          label: {color: 'white'}
        }
      ]
    }).then((markerCluster: MarkerCluster)=>{
      markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((infoMarker)=>{
        let marker: Marker = infoMarker[1];
        marker.setTitle(marker.get('name'));
        marker.setSnippet(marker.get('address'));
        marker.showInfoWindow();
      });
    })
    });
  }

  loadMap() {

    this.map.moveCamera({
      target: {
        lat: this.coordsActual.latitude,
        lng: this.coordsActual.longitude
      },
      zoom: 20-this.mapServiceProvider.getZoom()
    })

    
    console.log(this.mapServiceProvider.getZoom());
  }
}
