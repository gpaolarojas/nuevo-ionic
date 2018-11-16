import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ChapiAppPage } from '../../pages/chapi-app/chapi-app';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  displayName;  

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });
  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      this.navCtrl.push(ChapiAppPage)
  }

  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      this.navCtrl.push(ChapiAppPage)
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

}
