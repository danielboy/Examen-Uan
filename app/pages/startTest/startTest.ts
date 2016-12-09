import {Component} from "@angular/core";
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {Result} from '../result/result';



@Component({
    templateUrl: 'build/pages/startTest/startTest.html',
    providers: [AuthService]

})
export class StartTest {
    data: any;
    preguntas: any;
    Questions: any;
    indexOfQuestion: number = 0;
    CS: number = 0;
    CSH: number = 0;
    CEA: number = 0;
    CBAP: number = 0;
    CBI: number = 0;
    areas: string;
    ans: any[];
    questionNo: number = 0;
    answerValue = null;
    answersNumber: number = 0;
    answerIndex: number = 0;
    correctAnsInd: any;
    service :any;
    navParamsdata: any;
    lengthOfQuizQuestions: any;
    constructor(private nav: NavController, serve: AuthService, private alertCtrl: AlertController) {
    
       
       this.nav = nav;

       this.service = serve;
       this.Questions = 
       {
           Reactivo: '',
           area:'',
           id: ';'
       }

    }

    onPageLoaded() {
    this.service.preguntas().then( data => {

        this.data = data;
        this.Questions = this.data[this.indexOfQuestion];
        this.areas = this.data[this.indexOfQuestion].area;
        this.ans = this.data[this.indexOfQuestion].respuestas;
        this.correctAnsInd = this.data[this.indexOfQuestion].res_correcta;
        this.lengthOfQuizQuestions = this.data.length;

       });
  }

    next(opt: any) {

        if(this.answerValue == null){
            let alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Selecciona Tu Respuesta',
                buttons: ['Ok']
                });
            alert.present();
            
            return;
        }

        if(opt == this.ans[this.correctAnsInd].respuesta && this.areas == 'CS'){
            this.CS++;
        }
        if(opt == this.ans[this.correctAnsInd].respuesta && this.areas == 'CSH'){
           this.CSH++;
        }
        if(opt == this.ans[this.correctAnsInd].respuesta && this.areas == 'CEA'){
            this.CEA++;
        }
        if(opt == this.ans[this.correctAnsInd].respuesta && this.areas == 'CBAP'){
            this.CBAP++;
        }
        if(opt == this.ans[this.correctAnsInd].respuesta && this.areas == 'CBI'){
            this.CBI++;
        }             

       

        if(this.indexOfQuestion + 1 < this.lengthOfQuizQuestions){
          this.indexOfQuestion++;
          this.Questions = this.data[this.indexOfQuestion];
          this.areas = this.data[this.indexOfQuestion].area;
          this.ans = this.data[this.indexOfQuestion].respuestas;
          this.correctAnsInd = this.data[this.indexOfQuestion].res_correcta;
          this.answerIndex++;
          this.answerValue = null;
          console.log(this.CS, this.CSH)
        }
        else{
         this.nav.push(Result, {
            CS: this.CS,
            CSH: this.CSH,
            CEA: this.CEA,
            CBAP: this.CBAP,
            CBI: this.CBI,
          });
        
        }
    }


     
}
