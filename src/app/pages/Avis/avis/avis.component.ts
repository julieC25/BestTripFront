import { Component, OnInit } from '@angular/core';
import { Avis } from 'src/app/model/avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
  avis :Avis = new Avis();
  constructor() { }
  starExperience(n:number){
    this.avis.note = n;
  }
  starOver(n:number){
    return this.avis.note >= n;
  }
  ngOnInit(): void {
  }
}
