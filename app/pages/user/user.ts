import { Component } from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import {StartTest} from '../startTest/startTest';
import {DatosPage} from '../Datos/Datos';

@Component({
    templateUrl: 'build/pages/user/user.html',
      providers: [AuthService]
})
export class UserPage {

    private service: any;
    private nav: NavController;
    datause: any;
    

    constructor(private authservice: AuthService, private navcontroller: NavController,public navParams: NavParams) {
        this.service = authservice;
        this.nav = navcontroller;
    


    }
    gostart(){
        this.nav.push(StartTest, this.datause);
        	}    
    
    logout() {
        this.service.logout();
        this.nav.setRoot(LoginPage);
    }

  onPageLoaded() {
    this.service.getinfo().then(data => {
       this.datause = data.grado
   console.log(this.datause);

       });
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