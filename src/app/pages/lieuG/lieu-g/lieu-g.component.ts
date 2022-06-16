import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';
import { Lieu } from 'src/app/model/lieu';
import { Monument } from 'src/app/model/monument';
import { Musee } from 'src/app/model/musee';
import { Restaurant } from 'src/app/model/restaurant';
import { Ville } from 'src/app/model/ville';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';

@Component({
  selector: 'app-lieu-g',
  templateUrl: './lieu-g.component.html',
  styleUrls: ['./lieu-g.component.scss']
})
export class LieuGComponent implements OnInit {
  villes!: any[];
  ville: Ville= new Ville();
  lieux!: any[];
  lieu: Lieu= new Lieu();
  musee : Musee= new Musee();
  restaurant: Restaurant= new Restaurant();
  monument: Monument= new Monument();
  hotel: Hotel= new Hotel();

  constructor(private paysgenerique:PaysgeneriqueService) { }

  ngOnInit(): void {
    this.ville = this.paysgenerique.ville;
    if(this.paysgenerique.typeLieu=='monument'){
      this.monument = this.paysgenerique.monument;
    }
    if(this.paysgenerique.typeLieu=='musee'){
      this.musee = this.paysgenerique.musee;
    }
    if(this.paysgenerique.typeLieu=='hotel'){
      this.hotel = this.paysgenerique.hotel;
    }
    if(this.paysgenerique.typeLieu=='restaurant'){
      this.restaurant =  this.paysgenerique.restaurant;
    }
  }
 
  isMonumentInLieu(){
    return this.paysgenerique.typeLieu == 'monument';
  }
  isMuseeInLieu(){
    return this.paysgenerique.typeLieu == 'musee';
  }
  isRestaurantInLieu(){
    return this.paysgenerique.typeLieu == 'restaurant';
  }
  isHotelInLieu() {
    return this.paysgenerique.typeLieu == 'hotel';
  }

}
