import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/model/pays';
import { PaysService } from 'src/app/services/pays.service';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';

@Component({
  selector: 'app-creationpays',
  templateUrl: './creationpays.component.html',
  styleUrls: ['./creationpays.component.scss']
})
export class CreationpaysComponent implements OnInit {

  constructor(private paysgenerique:PaysgeneriqueService, private paysService:PaysService) { }
  pays : Pays = new Pays();
  ngOnInit(): void {
    this.pays = this.paysgenerique.pays;
  }
  savePays(){
    this.paysService.save(this.pays).subscribe(()=>{
    });
    this.pays = new Pays();
    this.pays.nomContinent = this.paysgenerique.pays.nomContinent;
  }

}
