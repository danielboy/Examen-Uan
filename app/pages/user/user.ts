import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {HomePage} from '../home/home';
import {StartTest} from '../startTest/startTest';
import {DatosPage} from '../Datos/Datos';

@Component({
    templateUrl: 'build/pages/user/user.html',
      providers: [AuthService]
})
export class UserPage {

    private service: any;
    private nav: NavController;

    constructor(private authservice: AuthService, private navcontroller: NavController) {
        this.service = authservice;
        this.nav = navcontroller;
    }
    gostart(){
        this.nav.push(StartTest, 0);
        	}    
    
    logout() {
        this.service.logout();
        this.nav.setRoot(HomePage);
    }
    
    perfil() {

          this.nav.push(DatosPage);    
        /*this.service.getinfo().then(data => {
            if(data.name) {
                console.log(data)
                let alert = this.alertController.create({
                    title: "Hola, " + data.name,
                    subTitle: "Tu Escuela es:  " + data.prepa,
                    buttons: ['Aceptar']
                });
                alert.present();
            }
        });*/
    }
}