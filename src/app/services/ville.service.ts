import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private baseURL = "http://localhost:9090/villes";

  constructor(private httpClient:HttpClient) { }
 
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL); 
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public save(ville:any):Observable<any>{
    return this.httpClient.post(this.baseURL,ville);
  }
}
