import { Component, OnInit } from '@angular/core';
import { Guide } from 'src/app/model/guide';
import { Pays } from 'src/app/model/pays';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-amerique-guide-consultation',
  templateUrl: './amerique-guide-consultation.component.html',
  styleUrls: ['./amerique-guide-consultation.component.scss']
})
export class AmeriqueGuideConsultationComponent implements OnInit {

  guides!:any[];
  guide: Guide=new Guide();

  pays: Pays=new Pays ();

  constructor(private guideService:GuideService) { }

  ngOnInit(): void {
    this.findAllGuide();
  }
  findAllGuide(){
    this.guideService.findAll().subscribe(data => {this.guides = data});
    }
    isExpInAmerica(guide:Guide){
      return guide.pays.nomContinent == 'amerique';
    }

}
