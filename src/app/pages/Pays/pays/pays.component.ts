import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {
  paysS!: any[];
  pays: Pays= new Pays();
  constructor(private paysgenerique:PaysgeneriqueService) { }

  ngOnInit(): void {
  }
  redirectionVille(v: Ville) {
    this.paysgenerique.ville=v;
  }
}
