import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // le module rxjs
import { Experience } from '../model/experience';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private baseURL = "http://localhost:9090/Experiences";

  constructor(private httpClient:HttpClient) { }
 
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL); 
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public saveWithoutFile(experience:Experience):Observable<any>{
    experience.image = null;
    return this.httpClient.post(this.baseURL+"/rawdata",experience);
  }
  public saveExperienceFile(ficher:File,id:number):Observable<any>{
    const formData=new FormData();
    formData.append('image',ficher);
    const requete = new HttpRequest('POST',this.baseURL+"/file/"+id,formData, 
      {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }

  public countByMonth():Observable<any>{
    return this.httpClient.get(this.baseURL+"/countByMonth"); 
  }

  public removeFile(id:number){
    return this.httpClient.delete(this.baseURL+"/removefile/"+id);
  }
}
