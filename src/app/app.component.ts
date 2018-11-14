import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




import { ChapiAppPage } from '../pages/chapi-app/chapi-app';
import { MapServiceProvider } from '../providers/map.service/map.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ChapiAppPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private mapServiceProvider: MapServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(()=> {
      this.rootPage= ChapiAppPage;

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    })
  }
  //el valor del range
  change(valor) {
      this.mapServiceProvider.setZoom(valor.value);
      console.log(valor.value);
      this.mapServiceProvider.mapData.emit(valor.value)
  }
  
  public valor: number = 0;
}


