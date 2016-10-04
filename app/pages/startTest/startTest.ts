import {Component} from "@angular/core";
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {QuizService} from '../../services/authservice';
import {Result} from '../result/result';



@Component({
    templateUrl: 'build/pages/startTest/startTest.html',
    providers: [QuizService]

})
export class StartTest {
    Questions: any[];
    indexOfQuestion: number = 0;
    area1: number = 0;
    area2: number = 0;
    area3: number = 0;
    areas: number = 0;
    ans: any[];
    questionNo: number = 0;
    answerValue = null;
    answersNumber: number = 0;
    answerIndex: number = 0;
    correctAnsInd: any;
    serve :any;
    navParamsdata: any;
    lengthOfQuizQuestions: any;
    constructor(private nav: NavController, public navParams: NavParams, serve: QuizService, private alertCtrl: AlertController) {
    
       this.navParamsdata = navParams.data;
       this.nav = nav;

       this.serve = serve;
       this.Questions = serve.quizData[navParams.data].Questions[this.indexOfQuestion];
       this.areas = serve.quizData[navParams.data].Questions[this.indexOfQuestion].Area;
       this.ans = serve.quizData[navParams.data].Questions[this.indexOfQuestion].options;
       this.correctAnsInd = serve.quizData[navParams.data].Questions[this.indexOfQuestion].correctAns;
       this.lengthOfQuizQuestions = serve.quizData[navParams.data].Questions.length;
       


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

        if(opt == this.ans[this.correctAnsInd].option && this.areas == 1){
            this.area1++;
        }
        if(opt == this.ans[this.correctAnsInd].option && this.areas == 2){
            this.area2++;
        }
        if(opt == this.ans[this.correctAnsInd].option && this.areas == 3){
            this.area3++;
        }

       

        if(this.indexOfQuestion + 1 < this.lengthOfQuizQuestions){
          this.indexOfQuestion++;
          this.Questions = this.serve.quizData[this.navParamsdata].Questions[this.indexOfQuestion];
          this.areas = this.serve.quizData[this.navParams.data].Questions[this.indexOfQuestion].Area;
          this.ans = this.serve.quizData[this.navParamsdata].Questions[this.indexOfQuestion].options;
          this.correctAnsInd = this.serve.quizData[this.navParamsdata].Questions[this.indexOfQuestion].correctAns;
          this.answerIndex++;
          this.answerValue = null;
        }
        else{
          this.nav.push(Result, {
            a1: this.area1,
            a2: this.area2,
            a3: this.area3,
          });
        
        }
    }


     
}
