import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {UserPage} from '../user/user';
import {SignupPage} from '../signup/signup';

@Component({
  templateUrl: 'build/pages/login/login.html',
    providers: [AuthService]
})
export class LoginPage {

    private usercreds: any;
    private service: any;
    private nav: any;
    private dusers: any;
    constructor(private authservice: AuthService, private navcontroller: NavController, private alertCtrl: AlertController) {
        this.usercreds = {
            name: '',
            password: ''
        }
        this.service = authservice;
        this.nav = navcontroller;
    }
    login(user) {
        this.service.authenticate(user).then(data => {
            if(data) {
                this.nav.setRoot(UserPage);
            }
            else  {
                let alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Selecciona Tu Respuesta',
                buttons: ['Ok']
                });
            alert.present();
            }

    });
}

      signup() {
      this.nav.push(SignupPage);
  }
}
