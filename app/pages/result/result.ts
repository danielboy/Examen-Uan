import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {UserPage} from '../user/user';
import {AuthService} from '../../services/authservice';
import {RoundOfPipe, OrderBy} from '../../pipe/pipe';


@Component({
    templateUrl: 'build/pages/result/result.html',
    providers: [ AuthService],
    pipes: [RoundOfPipe, OrderBy]
})
export class Result {
  private service: any;
  result: any;
  resultado: any;
  porcentage: any;
  CS: number;
  CSH: number;
  CEA: number;
  CBAP: number;
  CBI: number;
  public resul;
  constructor(private nav: NavController, public navParams: NavParams, private authservice: AuthService) {


    this.nav = nav;
    this.result = navParams.data;
    this.service = authservice;
  
    this.CS = (100 / 2) * this.result.CS;
    this.CSH = (100 / 2) * this.result.CSH;
    this.CEA = (100 / 2) * this.result.CEA;
    this.CBAP = (100 / 2) * this.result.CBAP;
    this.CBI = (100 / 2) * this.result.CBI;


                        this.resul = [

                    {
                        nombre: 'C. DE LA SALUD',
                        puntos: this.CS,
                    },
                                        {
                        nombre: 'C. SOCIALES Y HUMANIDADES',
                        puntos: this.CSH,
                    },
                                        {
                        nombre: 'C. ECONOMICAS ADMINISTRATIVAS',
                        puntos: this.CEA,
                    },
                                        {
                        nombre: 'C. BIOLOGICO-AGROPECUARIAS Y PESQUERAS',
                        puntos: this.CBAP,
                    },
                                        {
                        nombre: 'C. BASICAS E INGENIERIAS',
                        puntos: this.CBI,
                    }
                ]
                
                this.resultado = {CS:this.CS, CSH:this.CSH, CEA:this.CEA, CBAP:this.CBI, CBI:this.CBI}
                 console.log(this.resultado)
  }



  onPageLoaded(resultado) {
    this.service.putinfo(this.resultado).subscribe(
       data => {
   
       });
  }

  goUserPage(){
		this.nav.push(UserPage);	}

 }
