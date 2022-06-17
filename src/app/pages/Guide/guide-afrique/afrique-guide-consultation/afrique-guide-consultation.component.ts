import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { Guide } from 'src/app/model/guide';
import { Pays } from 'src/app/model/pays';
import { ExperienceService } from 'src/app/services/experience.service';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-afrique-guide-consultation',
  templateUrl: './afrique-guide-consultation.component.html',
  styleUrls: ['./afrique-guide-consultation.component.scss']
})
export class AfriqueGuideConsultationComponent implements OnInit {

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
    isExpInAfrica(guide:Guide){
      return guide.pays.nomContinent == 'afrique';
    }
}
