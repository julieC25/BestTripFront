import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';
import { Lieu } from 'src/app/model/lieu';
import { Monument } from 'src/app/model/monument';
import { Musee } from 'src/app/model/musee';
import { Pays } from 'src/app/model/pays';
import { Restaurant } from 'src/app/model/restaurant';
import { Ville } from 'src/app/model/ville';
import { HotelService } from 'src/app/services/hotel.service';
import { MonumentService } from 'src/app/services/monument.service';
import { MuseeService } from 'src/app/services/musee.service';
import { PaysService } from 'src/app/services/pays.service';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-creationlieu',
  templateUrl: './creationlieu.component.html',
  styleUrls: ['./creationlieu.component.scss']
})
export class CreationlieuComponent implements OnInit {

  constructor(private paysgenerique:PaysgeneriqueService, private villeService:VilleService,
    private paysService:PaysService,private monumentService:MonumentService,
    private museeService:MuseeService,private hotelService:HotelService,
    private restaurantService:RestaurantService) { }
  monument : Monument = new Monument();
  musee : Musee = new Musee();
  hotel : Hotel = new Hotel();
  restaurant : Restaurant = new Restaurant();
  lieu : Lieu = new Lieu();
  villes !: Ville[];
  payss !: Pays[];
  paysDuContinent !: any[];
  villeDuPays!: Ville[];

  selectedFiles?: FileList;
  imageSource!:any;
  currentFileUpload?: File;

  findAllPays(){
    this.paysService.findAll().subscribe(data=>{this.payss=data;
      this.paysDuContinent = [];
      let j = 0;
      for(let i = 0;i<this.payss.length;i++){
        if(this.payss[i].nomContinent == this.lieu.ville.pays.nomContinent){
          this.paysDuContinent[j] = this.payss[i];
          j++;
        }
      }
      this.findAllVille();
    })
  }
  findAllVille(){
    this.villeService.findAll().subscribe(data=>{this.villes=data;
      let kmonu = 0;
      let kmuse = 0;
      let khotel = 0;
      let krestaurant = 0;
      this.villeDuPays = []
      for(let i = 0;i<this.villes.length;i++){
        let paysBoucle = this.villes[i].pays;
        let paysMonument = this.monument.ville.pays;
        if( paysBoucle.nomPays == paysMonument.nomPays ){
          this.villeDuPays[kmonu] = this.villes[i];
          kmonu++;
        }
        let paysMusee = this.musee.ville.pays;
        if( paysBoucle.nomPays == paysMusee.nomPays ){
          this.villeDuPays[kmuse] = this.villes[i];
          kmuse++;
        }
        let paysHotel = this.hotel.ville.pays;
        if( paysBoucle.nomPays == paysHotel.nomPays ){
          this.villeDuPays[khotel] = this.villes[i];
          khotel++;
        }
        let paysRestaurant = this.restaurant.ville.pays;
        if( paysBoucle.nomPays == paysRestaurant.nomPays ){
          this.villeDuPays[krestaurant] = this.villes[i];
          krestaurant++;
        }
      }
    })
  }
  ngOnInit(): void {
    this.monument.ville = this.paysgenerique.ville;
    this.musee.ville= this.paysgenerique.ville;
    this.hotel.ville=this.paysgenerique.ville;
    this.lieu.ville = this.paysgenerique.ville;
    this.restaurant.ville = this.paysgenerique.ville;
    this.findAllPays();
  }
  saveMonument(){
    this.monumentService.save(this.monument).subscribe(()=>{
      this.monument = new Monument();
      this.monument.ville = this.paysgenerique.ville;
    });
  }
  isAMonument(){
    return this.paysgenerique.typeLieu == 'monument';
  }
  isARestaurant(){
    return this.paysgenerique.typeLieu == 'restaurant';
  }
  saveMusee(){
    this.museeService.save(this.musee).subscribe(()=>{
      this.musee = new Musee();
      this.musee.ville = this.paysgenerique.ville;
    });
  }
  saveRestaurant(){
    this.currentFileUpload = this.selectedFiles?.item(0) as File;
    this.restaurantService.saveWithoutFile(this.restaurant).subscribe(data=>{
      this.restaurant = data;
      if(this.currentFileUpload.size < 500000){
        this.restaurantService.saveRestaurantFile(this.currentFileUpload,this.restaurant.idLieu).subscribe(
          ()=>{
            this.restaurant = new Restaurant();
            this.restaurant.ville = this.paysgenerique.ville;
            this.selectedFiles = undefined;
            this.currentFileUpload = undefined;
          }
        )
        }
        else{
          alert("image trop volumineuse : " + this.currentFileUpload.size/1000 +"ko > 500ko")
        }
    });
  }
  saveHotel(){
    this.hotelService.save(this.hotel).subscribe(()=>{
      this.hotel = new Hotel();
      this.hotel.ville = this.paysgenerique.ville;
    });
  }
  isAMusee(){
    return this.paysgenerique.typeLieu == 'musee';
  }
  isAHotel(){
    return this.paysgenerique.typeLieu == 'hotel';
  }
  selectFile(event:any){
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageSource = event.target.result;
      }
    }
  }
  isImageSelected(){
    return this.selectedFiles == undefined;
  }
}
