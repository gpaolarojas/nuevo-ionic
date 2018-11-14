import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChapiAppPage } from '../pages/chapi-app/chapi-app';
import { ChapiApp2Page } from '../pages/chapi-app2/chapi-app2';
import { EventsPage } from '../pages/events/events';
import { EventDescript1Page } from '../pages/event-descript1/event-descript1';
import { EventDescript2Page } from '../pages/event-descript2/event-descript2';
import { EventDescript3Page } from '../pages/event-descript3/event-descript3';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { InteresesPage } from '../pages/intereses/intereses';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {GoogleMaps} from "@ionic-native/google-maps";
import {Geolocation} from "@ionic-native/geolocation"
import { MapServiceProvider } from '../providers/map.service/map.service';



@NgModule({
  declarations: [
    MyApp,
    ChapiAppPage,
    ChapiApp2Page,
    EventsPage,
    EventDescript1Page,
    EventDescript2Page,
    EventDescript3Page,
    SignupPage,
    LoginPage,
    InteresesPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChapiAppPage,
    ChapiApp2Page,
    EventsPage,
    EventDescript1Page,
    EventDescript2Page,
    EventDescript3Page,
    SignupPage,
    LoginPage,
    InteresesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MapServiceProvider,
    
    
  ]
})
export class AppModule {}