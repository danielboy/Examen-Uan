import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {UserPage} from '../user/user';
import {QuizService, AuthService} from '../../services/authservice';
import {RoundOfPipe, OrderBy} from '../../pipe/pipe';


@Component({
    templateUrl: 'build/pages/result/result.html',
    providers: [QuizService, AuthService],
    pipes: [RoundOfPipe, OrderBy]
})
export class Result {
  private service: any;
  result: any;
  porcentage: any;
  a1: number;
  a2: number;
  a3: number;
  CS: number;
  CSH: number;
  CEA: number;
  CBAP: number;
  CBI: number;
  public resul;
  constructor(private nav: NavController, public navParams: NavParams, serve: QuizService, private authservice: AuthService) {

    this.service = authservice;
    this.nav = nav;
    this.result = navParams.data;
    this.CS = (100 / 3) * this.result.a1;
    this.CSH = (100 / 3) * this.result.a2;
    this.CEA = (100 / 3) * this.result.a3;
    this.CBAP = (100 / 3) * this.result.a1;
    this.CBI = (100 / 3) * this.result.a2;


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

  }

   onPageLoaded(resul) {
    this.service.putinfo({CS:this.CS, CSH:this.CSH, CEA:this.CEA, CBAP:this.CBI, CBI:this.CBI}).subscribe(
       data => {

       });
  }


  goUserPage(){
		this.nav.push(UserPage);	}

 }
