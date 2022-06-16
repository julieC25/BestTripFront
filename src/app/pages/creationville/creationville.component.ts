import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';
import { PaysService } from 'src/app/services/pays.service';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-creationville',
  templateUrl: './creationville.component.html',
  styleUrls: ['./creationville.component.scss']
})
export class CreationvilleComponent implements OnInit {

  constructor(private paysgenerique:PaysgeneriqueService, private villeService:VilleService,
    private paysService:PaysService) { }
  ville : Ville = new Ville();
  payss !: Pays[];
  paysDuContinent !: any[];
  findAllPays(){
    this.paysService.findAll().subscribe(data=>{this.payss=data;
      this.paysDuContinent = [];
      let j = 0;
      for(let i = 0;i<this.payss.length;i++){
        if(this.payss[i].nomContinent == this.ville.pays.nomContinent){
          this.paysDuContinent[j] = this.payss[i];
          j++;
        }
      }
    })
  }
  ngOnInit(): void {
    this.ville = this.paysgenerique.ville;
    this.findAllPays();
  }
  saveVille(){
    this.villeService.save(this.ville).subscribe(()=>{
      this.ville = new Ville();
      this.ville.pays = this.paysgenerique.ville.pays;
    });
  }
}
