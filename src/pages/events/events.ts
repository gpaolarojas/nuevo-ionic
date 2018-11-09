import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDescript1Page } from '../event-descript1/event-descript1';
import { EventDescript2Page } from '../event-descript2/event-descript2';
import { EventDescript3Page } from '../event-descript3/event-descript3';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  constructor(public navCtrl: NavController) {
  }
  goToEventDescript1(params){
    if (!params) params = {};
    this.navCtrl.push(EventDescript1Page);
  }goToEventDescript2(params){
    if (!params) params = {};
    this.navCtrl.push(EventDescript2Page);
  }goToEventDescript3(params){
    if (!params) params = {};
    this.navCtrl.push(EventDescript3Page);
  }
}
