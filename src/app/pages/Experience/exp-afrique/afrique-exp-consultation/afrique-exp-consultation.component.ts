import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { Pays } from 'src/app/model/pays';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-afrique-exp-consultation',
  templateUrl: './afrique-exp-consultation.component.html',
  styleUrls: ['./afrique-exp-consultation.component.scss']
})
export class AfriqueExpConsultationComponent implements OnInit {
  experiences!:any[];
  experience: Experience=new Experience ();

  pays: Pays=new Pays ();

  constructor(private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.findAllExperience();
  }
  findAllExperience(){
    this.experienceService.findAll().subscribe(data => {this.experiences = data});
    }
    isExpInAfrica(exp:Experience){
      return exp.pays.nomContinent == 'afrique';
    }
}
