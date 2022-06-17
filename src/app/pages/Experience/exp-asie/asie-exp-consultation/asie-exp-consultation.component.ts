import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { Pays } from 'src/app/model/pays';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-asie-exp-consultation',
  templateUrl: './asie-exp-consultation.component.html',
  styleUrls: ['./asie-exp-consultation.component.scss']
})
export class AsieExpConsultationComponent implements OnInit {

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
    isExpInAsia(exp:Experience){
      return exp.pays.nomContinent == 'asie';
    }

}
