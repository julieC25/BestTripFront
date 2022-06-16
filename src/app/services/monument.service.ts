import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonumentService {
  private baseURL="http://localhost:9090/monuments";

  constructor(private httpClient:HttpClient){}

  public findAll() : Observable<any>{
      return this.httpClient.get(this.baseURL);
  }
  public save(monument:any):Observable<any>{
    return this.httpClient.post(this.baseURL,monument);
  }

}
