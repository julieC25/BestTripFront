import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/app/model/lieu';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss']
})
export class VillesComponent implements OnInit {
  ville : Ville = new Ville();
  lieux!: any[];
  pays : Pays = new Pays();

  constructor(private paysgenerique:PaysgeneriqueService) { }

  ngOnInit() {
    this.ville=this.paysgenerique.ville;
    this.pays=this.paysgenerique.pays;
  }
  redirectionVille(l: Lieu) {
    this.paysgenerique.lieu=l;
  }

}
