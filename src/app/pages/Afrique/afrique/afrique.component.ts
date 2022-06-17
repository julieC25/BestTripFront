import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/app/model/lieu';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';
import { HotelService } from 'src/app/services/hotel.service';
import { LieuService } from 'src/app/services/lieu.service';
import { MonumentService } from 'src/app/services/monument.service';
import { MuseeService } from 'src/app/services/musee.service';
import { PaysService } from 'src/app/services/pays.service';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
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
  monuments!:any[];
  hotels!:any[];
  restaurants!:any[];
  musees!:any[];
  lieu: Lieu= new Lieu();
  paysCache: boolean;
  villeCache: boolean;
  lieuxCache: boolean;

  constructor(private paysgenerique:PaysgeneriqueService, private paysservice:PaysService, private villeservice:VilleService, private lieuService:LieuService) { }

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
    this.lieuService.findAll().subscribe(data=>{this.lieux=data;})
    
  }
  redirectionPays(p:Pays) {
    this.paysgenerique.pays=p;
  }
  redirectionVille(v: Ville) {
    this.paysgenerique.pays=v.pays;
    this.paysgenerique.ville=v;
  }
  redirectionLieu(l:any) {
    this.paysgenerique.pays=l.ville.pays;
    this.paysgenerique.ville=l.ville;
    this.paysgenerique.lieuGen = l;
    this.paysgenerique.createLieu();
  }
  isPaysInAfrica(p:Pays){
    return p.nomContinent == 'afrique';
  }
  isLieuInAfrica(l:any){
    return l.ville.pays.nomContinent == 'afrique'
  }
  isVilleInAfrica(v:Ville){
    return v.pays.nomContinent == 'afrique';
  }
  saveContinent(){
    this.paysgenerique.pays = new Pays();
    this.paysgenerique.ville = new Ville();
    this.paysgenerique.lieu = new Lieu();
    this.paysgenerique.pays.nomContinent = 'afrique';
    this.paysgenerique.ville.pays = this.paysgenerique.pays;
    this.paysgenerique.lieu.ville = this.paysgenerique.ville;
  }
  selectMonument(){
    this.paysgenerique.typeLieu = 'monument';
  }
  selectMusee(){
    this.paysgenerique.typeLieu = 'musee';
  }
  selectHotel(){
    this.paysgenerique.typeLieu = 'hotel';
  }
  selectRestaurant(){
    this.paysgenerique.typeLieu = 'restaurant';
  }
}
