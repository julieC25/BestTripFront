import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // le module rxjs
import { Avis } from '../model/avis';

@Injectable({
  providedIn: 'root'
})
export class avisService {
  private baseURL = "http://localhost:9090/avis";

  constructor(private httpClient:HttpClient) { }
 
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL); 
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }
  public save(avis:Avis):Observable<any>{
    return this.httpClient.post(this.baseURL,avis);
  }
 /*public save(avis:any):Observable<any>{
    return this.httpClient.post(this.baseURL,avis);
  }*/
  /*enabledString = "false";
  abonnementNewsletterString = "false";*/
  /*public save(imageProfil:File,avis:Avis):Observable<any>{
    if(avis.idAvis){
      this.idAvisNumber!=0;
    }
    const formData=new FormData();
    formData.append('titre',avis.titre);
    formData.append('note',avis.note);
    formData.append('recommandation',avis.recommandation);
    const requete = new HttpRequest('POST',this.baseURL,formData, 
      {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }*/

}
