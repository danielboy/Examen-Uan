import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {UserPage} from '../user/user';
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
                    grupo: data.grupo,                    
                }


                this.puntos = [

                    {
                        nombre: 'C. DE LA SALUD',
                        puntos: data.CS,
                        obj: '0'
                    },
                                        {
                        nombre: 'C. SOCIALES Y HUMANIDADES',
                        puntos: data.CSH,
                        obj: '1'
                    },
                                        {
                        nombre: 'C. ECONOMICAS ADMINISTRATIVAS',
                        puntos: data.CEA,
                        obj: '2'
                    },
                                        {
                        nombre: 'C. BIOLOGICO-AGROPECUARIAS Y PESQUERAS',
                        puntos: data.CBAP,
                        obj: '3'
                    },
                                        {
                        nombre: 'C. BASICAS E INGENIERIAS',
                        puntos: data.CBI,
                        obj: '4'
                    }
                ]
            
                console.log(this.datos,' data')
        });



 }
 


goUserPage(){
		this.nav.push(UserPage);
	}

goCarreras(obj){
		this.nav.push(CarrerasPage, {obj: obj});
	}    


}

