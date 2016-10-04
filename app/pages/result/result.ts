import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {UserPage} from '../user/user';
import {QuizService, AuthService} from '../../services/authservice';
import {RoundOfPipe} from '../../pipe/pipe';


@Component({
    templateUrl: 'build/pages/result/result.html',
    providers: [QuizService, AuthService],
    pipes: [RoundOfPipe]
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
    this.resul = {
                    CS: this.CS,
                    CSH: this.CSH,
                    CEA: this.CEA,
                    CBAP: this.CBAP,
                    CBI: this.CBI, 
        }

        console.log(this.resul)

  }

   onPageLoaded(resul) {
    this.service.putinfo(this.resul).subscribe(
       data => {

       });
  }


  goUserPage(){
		this.nav.push(UserPage);	}

 }
