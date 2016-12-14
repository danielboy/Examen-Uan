import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {UserPage} from '../user/user';
import {DatosPage} from '../Datos/Datos';


@Component({
  templateUrl: 'build/pages/login/login.html',
    providers: [AuthService]
})
export class LoginPage {

    private usercreds: any;
    private service: any;
    private nav: any;
    private dusers: any;
    private datause: any;
    constructor(private authservice: AuthService, private navcontroller: NavController, private alertCtrl: AlertController) {
        this.usercreds = {
            matricula: '',
            curp: ''
        }
        this.service = authservice;
        this.nav = navcontroller;
    }
    login(user) {
        this.service.authenticate(user).then(data => {
            if(data) {
                this.nav.setRoot(UserPage);
                return true;
            }

                console.log(user)

             if(user == null) {
                let alert = this.alertCtrl.create({
                  title: 'Datos Invalidos!',
                  subTitle: 'Verifica tus Matricula o Curp!',
                  buttons: ['OK']
                });
                alert.present();

                return false;
            }

    });
}



}

