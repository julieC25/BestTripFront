import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/model/pays';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {
  paysS!: any[];
  pays: Pays= new Pays();
  constructor() { }

  ngOnInit(): void {
  }

}
