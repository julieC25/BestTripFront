import { Component, OnInit } from '@angular/core';
import { multicast } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { Lieu } from 'src/app/model/lieu';
import { Monument } from 'src/app/model/monument';
import { Musee } from 'src/app/model/musee';
import { Restaurant } from 'src/app/model/restaurant';
import { Ville } from 'src/app/model/ville';

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

  constructor() { }

  ngOnInit(): void {
  }
 
  isMonumentInLieu(monument:Monument){
    return monument.lieu.typeLieu == 'monument';
  }
  isMuseeInLieu(musee:Musee){
    return musee.nom == 'musee';
  }
  isRestaurantInLieu(restaurant:Restaurant){
    return restaurant.lieu.typeLieu == 'restaurant';
  }
  isHotelInLieu(hotel:Hotel) {
    return hotel.lieu.typeLieu == 'hotel';
  }

}
