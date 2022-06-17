import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { Pays } from 'src/app/model/pays';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-oceanie-exp-consultation',
  templateUrl: './oceanie-exp-consultation.component.html',
  styleUrls: ['./oceanie-exp-consultation.component.scss']
})
export class OceanieExpConsultationComponent implements OnInit {

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
  isExpInOceania(exp:Experience){
      return exp.pays.nomContinent == 'oceanie';
    }
}
