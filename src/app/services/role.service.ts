import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseURL="http://localhost:9090/roles"
  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
}
