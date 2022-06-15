import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/app/model/lieu';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';

@Component({
  selector: 'app-australie',
  templateUrl: './australie.component.html',
  styleUrls: ['./australie.component.scss']
})
export class AustralieComponent implements OnInit {

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
    this.paysCache=false;
  }
  showDataPays() {
    this.paysCache = true ;
    this.villeCache=false ;
    this.lieuxCache=false ;
  }
  hideDataVille() {
    this.villeCache=false;
  }
  showDataVille() {
    this.villeCache = true ;
    this.paysCache = false ;
    this.lieuxCache = false ;
  }
  hideDataLieux() {
    this.lieuxCache=false ;
  }
  showDataLieux() {
    this.lieuxCache = true;
    this.paysCache = false;
    this.villeCache = false;

  }
}
