import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LieuService {
  private baseURL="http://localhost:9090/lieux";

  constructor(private httpClient:HttpClient){}

  public findAll() : Observable<any>{
      return this.httpClient.get(this.baseURL);
  }
}
