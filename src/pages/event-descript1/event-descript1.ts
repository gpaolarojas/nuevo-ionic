import { Component, OnInit, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Location } from '@angular/common';
 
import { EventsPage }         from '../events/events';
import { MapServiceProvider } from '../../providers/map.service/map.service';

@Component({
  selector: 'page-event-descript1',
  templateUrl: 'event-descript1.html'
})
export class EventDescript1Page implements OnInit {
  @Input() event: Event;
 


  constructor(public navCtrl: NavController, public MapServiceProvider: MapServiceProvider) {
  }
  
  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void{
    this.MapServiceProvider.getEvent()
      .subscribe(event => this.event = event);
  }
}
