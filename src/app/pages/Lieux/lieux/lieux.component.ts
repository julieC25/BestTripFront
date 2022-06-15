import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';
import { Lieu } from 'src/app/model/lieu';
import { Monument } from 'src/app/model/monument';
import { Musee } from 'src/app/model/musee';
import { Restaurant } from 'src/app/model/restaurant';
import { HotelService } from 'src/app/services/hotel.service';
import { LieuService } from 'src/app/services/lieu.service';
import { MonumentService } from 'src/app/services/monument.service';
import { MuseeService } from 'src/app/services/musee.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-lieux',
  templateUrl: './lieux.component.html',
  styleUrls: ['./lieux.component.scss']
})
export class LieuxComponent implements OnInit {
  restaurants!:any[];
  restaurant: Restaurant=new Restaurant ();

  musees!:any[];
  musee: Musee=new Musee ();

  monuments!:any[];
  monument : Monument= new Monument ();

  hotels!:any[];
  hotel : Hotel = new Hotel ();

  lieux!:any[];
  lieu : Lieu = new Lieu ();

  constructor(private restaurantService:RestaurantService, private hotelService:HotelService,private museeService:MuseeService,private monumentService:MonumentService,private lieuService:LieuService) {

    }

  ngOnInit() {
  this.findAllRestaurant();
  this.findAllHotel();
  this.findAllMonument();
  this.findAllMusee();
  this.findAllLieu();
}

findAllRestaurant(){
  this.restaurantService.findAll().subscribe(data => {this.restaurants = data});
  }

findAllHotel(){
    this.hotelService.findAll().subscribe(data => {this.hotels = data});
  }

findAllMonument(){
      this.monumentService.findAll().subscribe(data => {this.monuments = data});
  }
findAllMusee(){
      this.museeService.findAll().subscribe(data => {this.musees = data});
  }
findAllLieu(){
    this.lieuService.findAll().subscribe(data => {this.lieux = data});
}

}

