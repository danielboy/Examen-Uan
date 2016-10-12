import {Injectable, Inject} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class AuthService {
    private isLoggedin: any;
    private AuthToken: any;
     data: any ;
    constructor(private http: Http) {
        this.isLoggedin = false;
        this.AuthToken = null;
    }

    storeUserCredentials(userdata) {
        window.localStorage.setItem('userdata', JSON.stringify(userdata));
        this.useCredentials(userdata);

    }

    useCredentials(userdata) {
        this.isLoggedin = !!true;
        this.AuthToken = userdata;
       
    }

    loadUserCredentials() {
        let token = JSON.parse(window.localStorage.getItem('userdata'));
        this.useCredentials(token);
    }

    destroyUserCredentials() {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.clear();
    }

    authenticate(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new Promise(resolve => {
            this.http.post('http://localhost:3333/authenticate',JSON.stringify(user), {headers: headers}).subscribe(data => {
                if(data.json()&& data.json().token){
                    this.storeUserCredentials({
                        "token": data.json().token

                    });
                     
                    resolve(true);

                }
                else
                    resolve(false);
            });
        });
    }

    isAuthenticated() {
      return this.isLoggedin;
    }

   getinfo() {
        return new Promise(resolve => {
            let headers = new Headers();
            this.loadUserCredentials();
             headers.append('Authorization', 'Bearer ' + this.AuthToken.token);
             this.http.get('http://localhost:3333/getinfo/', {headers: headers}).subscribe(data => {
                this.data = data;
                 if(data.json().user){

                     resolve(data.json().user);
                 }
                 else
                     resolve(false);
             });
        })
    }

   areas() {
        return new Promise(resolve => {
            let headers = new Headers();
          //   headers.append('Authorization', 'Bearer ' + this.AuthToken.token);
             this.http.get('http://localhost:3333/areas/', {headers: headers}).subscribe(data => {
                this.data = data;
                 if(data.json().areas){

                     resolve(data.json().areas);
                 }
                 else
                     resolve(false);

                     console.log(data)
             });
        })
    }    

   putinfo(resul) {
        return new Promise(resolve => {
            console.log(resul)
            let headers = new Headers();
            this.loadUserCredentials();
             headers.append('Authorization', 'Bearer ' + this.AuthToken.token);
             headers.append('Content-Type','application/json');
             this.http.put('http://localhost:3333/putinfo/',JSON.stringify(resul),{headers: headers}).subscribe(data => {
                this.data = data;
                 if(data.json().decodedtoken){

                     resolve(data.json().decodedtoken);
                 }
                 else
                     resolve(false);
             });
        })
    }


    logout() {
        this.destroyUserCredentials();
    }
}

export class QuizService {
    quizData : any[] =  [
        {
            nameOfTest : "Apptitude",
            Questions: [
                {
                    QuiestionNo: 1,
                    Area: 1,
                    questionTitle: "",
                    Question: "¿Te gusta Solventar problemas contables y financieros, controlar presupuestos y contabilidad?",
                    correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1
                },
                {
                    QuiestionNo: 2,
                    Area: 1,
                    questionTitle: "",
                    Question: "¿Te Gusta Trabajar en un banco o caja postal?",
                      correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1

                },
                {
                    QuiestionNo: 3,
                    Area: 1,
                    questionTitle: "",
                    Question: "¿Te Gusta Realizar programas de gestión empresarial?",
                      correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1
                },
                                {
                    QuiestionNo: 4,
                    Area: 2,
                    questionTitle: "",
                    Question: "¿Te Gusta Trabajar ordenando, clasificando y archivando documentos?",
                      correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1
                },
                                {
                    QuiestionNo: 5,
                    Area: 2,
                    questionTitle: "",
                    Question: "¿Te Gustaria Trabajar como auditor?",
                    correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1
                },
                {
                    QuiestionNo: 6,
                    Area: 2,
                    questionTitle: "",
                    Question: "¿Te Gustaria Organizar y controlar la recepción, almacenamiento y expedición de mercancías, anotando las entradas y las salidas?",
                      correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1

                },
                {
                    QuiestionNo: 7,
                    Area: 3,
                    questionTitle: "",
                    Question: "¿Te Gustaria Trabajar de publicista?",
                      correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1
                },
                                {
                    QuiestionNo: 8,
                    Area: 3,
                    questionTitle: "",
                    Question: "¿Te Gustaria Ejercer como profesor de deporte?",
                      correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1
                },
                 {
                    QuiestionNo: 9,
                    Area: 3,
                    questionTitle: "",
                    Question: "¿Te Gustaria Elaborar programas para ordenador. Aplicar la informática para analizar necesidades y problemas?",
                      correctAns: 0,
                    options: [
                        {option:"Si", ansValue: true, marks: 1},
                        {option:"NO", ansValue: false, marks:0}
                    ],
                    ans: 1
                }]
        },

        

    ];

    userName: string = 'Haider';

}

