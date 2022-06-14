import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/model/pays';

@Component({
  selector: 'app-asie',
  templateUrl: './asie.component.html',
  styleUrls: ['./asie.component.scss']
})
export class AsieComponent implements OnInit {
  paysS!: any[];
  pays: Pays= new Pays();

  constructor() { }

  ngOnInit(): void {
  }

}
