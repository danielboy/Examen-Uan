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

   carreras() {
        return new Promise(resolve => {
            let headers = new Headers();
             this.http.get('http://localhost:3333/carreras/', {headers: headers}).subscribe(data => {
                this.data = data;
                 if(data.json().carreras){

                     resolve(data.json().carreras);
                 }
                 else
                     resolve(false);

                     console.log(data)
             });
        })
    }        

   preguntas() {
        return new Promise(resolve => {
            let headers = new Headers();
             this.http.get('http://localhost:3333/preguntas/', {headers: headers}).subscribe(data => {
                this.data = data;
                 if(data.json().preguntas){

                     resolve(data.json().preguntas);
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



