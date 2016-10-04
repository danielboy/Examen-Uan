import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: []
})
export class HomePage {
  private nav: any;
  constructor(private navcontroller: NavController) {
      this.nav = navcontroller;

  }

  goLogin() {
      this.nav.push(LoginPage);
  }

}
