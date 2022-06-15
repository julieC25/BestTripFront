import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/app/model/lieu';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';
import { LieuService } from 'src/app/services/lieu.service';
import { PaysService } from 'src/app/services/pays.service';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-afrique',
  templateUrl: './afrique.component.html',
  styleUrls: ['./afrique.component.scss']
})
export class AfriqueComponent implements OnInit {

  paysS!: any[];
  pays: Pays= new Pays();
  villes!: any[];
  ville: Ville= new Ville();
  lieux!: any[];
  lieu: Lieu= new Lieu();
  paysCache: boolean;
  villeCache: boolean;
  lieuxCache: boolean;

  constructor(private paysgenerique:PaysgeneriqueService, private paysservice:PaysService, private villeservice:VilleService, private lieuservice:LieuService) { }

  ngOnInit() {

    this.hideDataPays();
    this.hideDataVille();
    this.hideDataLieux();
    this.findAllPays();
    this.findAllVille();
    this.findAllLieu();

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
  findAllPays() {
    this.paysservice.findAll().subscribe(data =>{this.paysS=data;});
  }
  findAllVille() {
    this.villeservice.findAll().subscribe(data =>{this.villes=data;});
  }
  findAllLieu() {
    this.lieuservice.findAll().subscribe(data =>{this.lieux=data;});
  }

  redirectionPays(p:Pays) {
    this.paysgenerique.pays=p;
  }
  redirectionVille(v: Ville) {
    this.paysgenerique.ville=v;
  }
  redirectionLieu(l:Lieu) {
    this.paysgenerique.lieu=l;
  }
}
