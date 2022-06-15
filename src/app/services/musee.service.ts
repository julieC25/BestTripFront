import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseeService {
  private baseURL:"http://localhost:9090/musees";

  constructor(private httpClient:HttpClient){}

  public findAll() : Observable<any>{
      return this.httpClient.get(this.baseURL)
  }
}
