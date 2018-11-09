import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChapiApp2Page } from '../chapi-app2/chapi-app2';
import { EventsPage } from '../events/events';
import { EventDescript1Page } from '../event-descript1/event-descript1';
import { EventDescript2Page } from '../event-descript2/event-descript2';
import { EventDescript3Page } from '../event-descript3/event-descript3';


@Component({
  selector: 'page-chapi-app',
  templateUrl: 'chapi-app.html'
})
export class ChapiAppPage {

  tab1Root: any = ChapiApp2Page;
  tab2Root: any = EventsPage;
  constructor(public navCtrl: NavController) {
  }
  goToChapiApp2(params){
    if (!params) params = {};
    this.navCtrl.push(ChapiApp2Page);
  }goToEvents(params){
    if (!params) params = {};
    this.navCtrl.push(EventsPage);
  }goToEventDescript1(params){
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
