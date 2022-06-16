import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseURL="http://localhost:9090/restaurants";

  constructor(private httpClient:HttpClient){}

  public findAll() : Observable<any>{
      return this.httpClient.get(this.baseURL)
  }
  public saveWithoutFile(restaurant:Restaurant):Observable<any>{
    restaurant.carte = null;
    return this.httpClient.post(this.baseURL+"/rawdata",restaurant);
  }
  public saveRestaurantFile(ficher:File,id:number):Observable<any>{
    const formData=new FormData();
    formData.append('carte',ficher);
    const requete = new HttpRequest('POST',this.baseURL+"/file/"+id,formData, 
      {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }
  
}
