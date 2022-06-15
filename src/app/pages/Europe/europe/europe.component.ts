import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/app/model/lieu';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.scss']
})
export class EuropeComponent implements OnInit {

  paysS!: any[];
  pays: Pays= new Pays();
  villes!: any[];
  ville: Ville= new Ville();
  lieux!: any[];
  lieu: Lieu= new Lieu();
  paysCache: boolean;
  villeCache: boolean;
  lieuxCache: boolean;

  constructor() { }

  ngOnInit() {

    this.hideDataPays();
    this.hideDataVille();
    this.hideDataLieux();

  }
  hideDataPays() {
    return (this.paysCache=false);
  }
  showDataPays() {
    return (this.paysCache = true);
  }
  hideDataVille() {
    return (this.villeCache=false);
  }
  showDataVille() {
    return (this.villeCache = true);
  }
  hideDataLieux() {
    return (this.lieuxCache=false);
  }
  showDataLieux() {
    return (this.lieuxCache = true);
  }
}
