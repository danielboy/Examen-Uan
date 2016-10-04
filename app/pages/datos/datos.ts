import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {UserPage} from '../user/user';
import {RoundOfPipe} from '../../pipe/pipe';


@Component({
  templateUrl: 'build/pages/datos/datos.html',
  providers: [AuthService],
  pipes: [RoundOfPipe]
})
export class DatosPage {

    private service: any;
    datos: any;
    resul: any;

  constructor(private authservice: AuthService, private nav: NavController, private alertCtrl: AlertController) {
      
      this.nav = nav;
      this.service = authservice;
                this.datos = {
                    nombre: '-',
                    matricula: '-',
                    escuela: '_',
                    turno: '_',
                    grupo: '_',
                    CS: '_',
                    CSH: '_',
                    CEA: '_',
                    CBAP: '_',
                    CBI: '_',                       

                }

                

  }

onPageLoaded() {

    this.service.getinfo().then(data => {
                this.datos = {
                    nombre: data.name +' '+ data.apellidos,
                    matricula: data.matricula,
                    escuela: data.escuela,
                    turno: data.turno,
                    grupo: data.grupo,
                    CS: data.CS,
                    CSH: data.CSH,
                    CEA: data.CEA,
                    CBAP: data.CBAP,
                    CBI: data.CBI, 
                                     
                }
                console.log(this.datos.escuela)
                console.log(this.datos)
        });
 }
 


goUserPage(){
		this.nav.push(UserPage);
	}


}
