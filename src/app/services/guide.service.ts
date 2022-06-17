import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // le module rxjs
import { Guide } from '../model/guide';


@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private baseURL = "http://localhost:9090/guides";

  constructor(private httpClient:HttpClient) { }
 
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL); 
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public save(hotel:Guide) : Observable<any>{
    return this.httpClient.post(this.baseURL,hotel);
}

  public saveWithoutFile(guide:Guide):Observable<any>{
    guide.fichierPdf = null;
    return this.httpClient.post(this.baseURL+"/rawdata",guide);
  }
  public saveGuideFile(ficher:File,id:number):Observable<any>{
    const formData=new FormData();
    formData.append('fichierPdf',ficher);
    const requete = new HttpRequest('POST',this.baseURL+"/file/"+id,formData, 
      {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }
  public removeFile(id:number){
    return this.httpClient.delete(this.baseURL+"/removefile/"+id);
  }
}
