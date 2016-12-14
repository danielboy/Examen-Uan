import { Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {UserPage} from '../user/user';
import {StartTest} from '../startTest/startTest';
import {CarrerasPage} from '../carreras/carreras';
import {RoundOfPipe, OrderBy} from '../../pipe/pipe';


@Component({
  templateUrl: 'build/pages/datos/datos.html',
  providers: [AuthService],
  pipes: [RoundOfPipe, OrderBy],
})
export class DatosPage {

    private service: any;
    datos: any;
    areas: any;
    puntos: any;

  constructor(private authservice: AuthService, private nav: NavController, private alertCtrl: AlertController) {
      
      this.nav = nav;
      this.service = authservice;
                this.datos = {
                    nombre: '-',
                    matricula: '-',
                    escuela: '_',
                    turno: '_',
                    grado: '_',
                    grupo: '_',                       

                }
  }

onPageLoaded() {

    this.service.getinfo().then(data => {
                this.datos = {
                    nombre: data.name +' '+ data.apellidos,
                    matricula: data.matricula,
                    escuela: data.escuela,
                    turno: data.turno,
                    gra_gru: data.grado +'°'+data.grupo,
                                    
                }


                this.puntos = [

                    {
                        nombre: 'C. DE LA SALUD',
                        puntos: data.CS,
                        clave: 'CS'
                    },
                                        {
                        nombre: 'C. SOCIALES Y HUMANIDADES',
                        puntos: data.CSH,
                        clave: 'CSH'
                    },
                                        {
                        nombre: 'C. ECONOMICAS ADMINISTRATIVAS',
                        puntos: data.CEA,
                        clave: 'CEA'
                    },
                                        {
                        nombre: 'C. BIOLOGICO-AGROPECUARIAS Y PESQUERAS',
                        puntos: data.CBAP,
                        clave: 'CBAP'
                    },
                                        {
                        nombre: 'C. BASICAS E INGENIERIAS',
                        puntos: data.CBI,
                        clave: 'CBI'
                    }
                ]
        
        });



 }
 


goUserPage(){
		this.nav.push(UserPage);
	}

goCarreras(clave){
		this.nav.push(CarrerasPage, {clave: clave});
	}    

gostart(){
        this.nav.push(StartTest);
        	}   

}

