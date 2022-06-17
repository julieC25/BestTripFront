import { Injectable } from '@angular/core';
import { Hotel } from '../model/hotel';
import { Lieu } from '../model/lieu';
import { Monument } from '../model/monument';
import { Musee } from '../model/musee';
import { Pays } from '../model/pays';
import { Restaurant } from '../model/restaurant';
import { Ville } from '../model/ville';
import {Experience} from '../model/experience';
import { Guide } from '../model/guide';

@Injectable({
  providedIn: 'root'
})
export class PaysgeneriqueService {
 typeLieu : string ='';
 pays: Pays = new Pays();
 ville: Ville = new Ville();
 lieu: Lieu = new Lieu();
 lieuGen!:any;
 monument:Monument = new Monument();
 restaurant:Restaurant=new Restaurant();
 musee :Musee = new Musee();
 hotel:Hotel=new Hotel();
 experience: Experience = new Experience();
 guide: Guide = new Guide();

  constructor() { }
  createLieu(){
    if(this.lieuGen?.description!=null){
      this.typeLieu = 'monument';
      this.monument = this.lieuGen;
    }
    else if(this.lieuGen?.prixNuit!=null){
      this.hotel = this.lieuGen;
      this.typeLieu = 'hotel';
    }else if (this.lieuGen?.carte!=null){
      this.restaurant = this.lieuGen;
      this.typeLieu = 'restaurant';
    }else{
      this.musee = this.lieuGen;
      this.typeLieu = 'musee';
    }
  }
}
