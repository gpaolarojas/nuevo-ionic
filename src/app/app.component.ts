import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




import { ChapiAppPage } from '../pages/chapi-app/chapi-app';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ChapiAppPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
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
  
}
export class BasicPage {
  public distance: number = 0;

  constructor() {
    //console.log("soy la primera ditancia:" + this.distance);
  }
  

  change(e) {
    this.distance= e;
      console.log(this.distance);
    
  }
  
}


