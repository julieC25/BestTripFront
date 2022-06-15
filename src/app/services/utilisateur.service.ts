import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // le module rxjs
import { Role } from '../model/role';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL = "http://localhost:9090/utilisateurs";

  constructor(private httpClient:HttpClient) { }
 
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL); 
  }

  public updateUtilisateurRole(idUtilisateur:number,roles:Role[]):Observable<any>{
    return this.httpClient.post(this.baseURL+"/updateRole/"+idUtilisateur,roles); 
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }
  
 /*public save(utilisateur:any):Observable<any>{
    return this.httpClient.post(this.baseURL,utilisateur);
  }*/
  enabledString = "false";
  abonnementNewsletterString = "false";
  public save(imageProfil:File,utilisateur:Utilisateur):Observable<any>{
    if(utilisateur.enabled){
      this.enabledString="true";
    }
    if(utilisateur.abonnementNewsletter){
      this.abonnementNewsletterString="true";
    }
    const formData=new FormData();
    formData.append('nom',utilisateur.nom);
    formData.append('prenom',utilisateur.prenom);
    formData.append('username',utilisateur.username);
    formData.append('password',utilisateur.password);
    formData.append('email',utilisateur.email);
    formData.append('enabled',this.enabledString);
    formData.append('abonnementNewsletter',this.abonnementNewsletterString);
    formData.append('imageProfil',imageProfil);
    formData.append('nbConnexion',utilisateur.nbConnexion.toString());
    const requete = new HttpRequest('POST',this.baseURL,formData, 
      {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }

}
