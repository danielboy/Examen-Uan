import { Component,  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../services/authservice';

/*
  Generated class for the InfCarPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/inf-car/inf-car.html',
})
export class InfCarPage {

  private service: any;  
  clave: any;
  carrera: any;

  constructor(private navCtrl: NavController, public navParams: NavParams, private authservice: AuthService) {

      this.clave = navParams.data.clave
      this.service = authservice;
 console.log(this.clave);

  }

    onPageLoaded() {
            this.service.carreras().then(data => {

      

                for (let obj of data){

                    if(obj._id == this.clave){
                     
                        this.carrera 
                   
                  } 

            }

                console.log(this.carrera)
                    
         });


 }

 

}
