import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from './model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  currentUser!:Utilisateur;
  authFailed = false;
  authenticated=false;
  responseAll: any;
  isAdmin=false;
  isUser=false;
  constructor(private httpClient:HttpClient) { }
  authenticate(credentials:any,callback:any){
    const headers = new HttpHeaders(
      credentials ? {
        authorization : 'Basic ' + btoa(credentials.username+ ':' +credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:9090/login/user',{headers:headers}).subscribe(response =>{
      this.responseAll = response;
      if(this.responseAll['username']){
        this.authenticated = true;
        this.authFailed = false;
        this.currentUser = this.responseAll;
        console.log(this.responseAll);
        for(let i=0;i<this.responseAll['roles'].length;i++){
          if (this.responseAll['roles'][i].libelle=='admin'){
            this.isAdmin = true;
          }
        }
      }
      else{
        this.authenticated = false;
      }
      return callback && callback();
    })
    this.delay(2000).then(()=>{
      if(!this.authenticated){
        this.authFailed = true;
      }
    })
    

  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
