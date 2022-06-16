import { Component, OnInit } from '@angular/core';
import { Monument } from 'src/app/model/monument';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';
import { MonumentService } from 'src/app/services/monument.service';
import { PaysService } from 'src/app/services/pays.service';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-creationlieu',
  templateUrl: './creationlieu.component.html',
  styleUrls: ['./creationlieu.component.scss']
})
export class CreationlieuComponent implements OnInit {

  constructor(private paysgenerique:PaysgeneriqueService, private villeService:VilleService,
    private paysService:PaysService,private monumentService:MonumentService) { }
  monument : Monument = new Monument();
  villes !: Ville[];
  payss !: Pays[];
  paysDuContinent !: any[];
  villeDuPays!: Ville[];
  findAllPays(){
    this.paysService.findAll().subscribe(data=>{this.payss=data;
      this.paysDuContinent = [];
      let j = 0;
      for(let i = 0;i<this.payss.length;i++){
        if(this.payss[i].nomContinent == this.monument.ville.pays.nomContinent){
          this.paysDuContinent[j] = this.payss[i];
          j++;
        }
      }
      this.findAllVille();
    })
  }
  findAllVille(){
    this.villeService.findAll().subscribe(data=>{this.villes=data;
      let k = 0;
      this.villeDuPays = []
      for(let i = 0;i<this.villes.length;i++){
        let paysBoucle = this.villes[i].pays;
        let paysLocal = this.monument.ville.pays;
        if( paysBoucle.nomPays == paysLocal.nomPays ){
          this.villeDuPays[k] = this.villes[i];
          k++;
        }
      }
    })
  }
  ngOnInit(): void {
    this.monument.ville = this.paysgenerique.ville;
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

}
