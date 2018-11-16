import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable,  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ChapiApp2Page } from '../../pages/chapi-app2/chapi-app2';
import { GoogleMap } from '@ionic-native/google-maps';


/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
 };
 const base = "https://chapiapp13nov.herokuapp.com/";
 const base2= "";


@Injectable()
export class MapServiceProvider {

  mapData = new EventEmitter<any>();
  map: GoogleMap;
  coordsActual: Coordinates;
  zoomActual: number = 0;
  event_id: number = 0;
  event_coords: Coordinates;
  private eventsUrl = base + "events";  // URL to web api

  getZoom(){
    return this.zoomActual;
  }

  setZoom(value){
    this.zoomActual = value;
  }


  //obtener todos los eventos
  constructor(private http: HttpClient) { }
  
  getEvents(): Observable<Event[]> {
    console.log(base);
    return this.http.get<Event[]>(base + "events")
  }
 //obtener evento por id
  getEvent():Observable<Event> {
      const url = `${this.eventsUrl}/${this.event_id}`;
      return this.http.get<Event>(url).pipe(
        catchError(this.handleError<Event>(`getEvent id=${this.event_id}`))
      );
  }
  //recibe Id
  setId(id: number){
    this.event_id = id;
  }




  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return null;
    };
  }

  

   
}
