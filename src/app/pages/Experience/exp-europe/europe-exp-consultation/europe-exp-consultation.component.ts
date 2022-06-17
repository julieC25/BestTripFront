import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { Pays } from 'src/app/model/pays';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-europe-exp-consultation',
  templateUrl: './europe-exp-consultation.component.html',
  styleUrls: ['./europe-exp-consultation.component.scss']
})
export class EuropeExpConsultationComponent implements OnInit {

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
  isExpInEurope(exp:Experience){
      return exp.pays.nomContinent == 'europe';
    }
}
