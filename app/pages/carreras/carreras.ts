import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../services/authservice';

@Component({
  templateUrl: 'build/pages/carreras/carreras.html',
  providers: [AuthService],
})
export class CarrerasPage {

    private service: any;  
    area: any;
    obj: any;
    
  constructor(private authservice: AuthService,private navCtrl: NavController, public navParams: NavParams) {
  this.obj = navParams.data.obj
  this.service = authservice;

  }

onPageLoaded() {

  console.log(this.obj)
            this.service.areas().then(data => {
                this.area = data[0][this.obj].carreras;
                    
         });

 }



}
