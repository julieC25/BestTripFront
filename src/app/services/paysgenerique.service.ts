import { Injectable } from '@angular/core';
import { Lieu } from '../model/lieu';
import { Pays } from '../model/pays';
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
 experience: Experience = new Experience();
 guide: Guide = new Guide();

  constructor() { }
}
