import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {InfCarPage} from '../inf-car/inf-car';

@Component({
  templateUrl: 'build/pages/carreras/carreras.html',
  providers: [AuthService],

})
export class CarrerasPage {

    private service: any;  
    carreras: any;
    clave: any;
    
  constructor(private nav: NavController,private authservice: AuthService,private navCtrl: NavController, public navParams: NavParams) {
  
  this.nav = nav;
  this.clave = navParams.data.clave
  this.service = authservice;

  }

onPageLoaded() {
            this.service.carreras().then(data => {

              var filtro = [];   

                for (let obj of data){

                    if(obj.clave_area == this.clave){
                       filtro.push(obj);

                   
                  } 

            }

                this.carreras = filtro;
                console.log(this.carreras)
                    
         });

 }

goInfo_car(clave){
		this.nav.push(InfCarPage, {clave: clave});
	} 

}
