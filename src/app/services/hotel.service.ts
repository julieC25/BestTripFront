import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseURL="http://localhost:9090/hotels";

    constructor(private httpClient:HttpClient){}

    public findAll() : Observable<any>{
        return this.httpClient.get(this.baseURL);
    }
    public save(hotel:Hotel) : Observable<any>{
      return this.httpClient.post(this.baseURL,hotel);
  }

}
