import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // le module rxjs


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private baseURL = "http://localhost:9090/experiences";

  constructor(private httpClient:HttpClient) { }
 
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL); 
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public save(utilisateur:any):Observable<any>{
    return this.httpClient.post(this.baseURL,utilisateur);
  }
}
