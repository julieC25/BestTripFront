import { Component, OnInit } from '@angular/core';
import { Avis } from 'src/app/model/avis';
import { avisService } from 'src/app/services/avis.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { GuideService } from 'src/app/services/guide.service';
import { LieuService } from 'src/app/services/lieu.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  avisExperience : Avis=new Avis();
  avisLieu : Avis=new Avis();
  avisGuide : Avis=new Avis();
  aviss  !: any[];
  experiences !: any[];
  lieux !: any[];
  guides !: any[];
  
  constructor(private avisService:avisService, private experienceService:ExperienceService, private lieuService:LieuService, private guideService:GuideService) { }

  findAllAvis (){
    this.avisService.findAll().subscribe(data => {this.aviss=data})
  }

  findAllExperiences (){
    this.experienceService.findAll().subscribe(data => {this.experiences=data})
  }

  findAllLieu (){
    this.lieuService.findAll().subscribe(data => {this.lieux=data})
  }

  findAllguides (){
    this.guideService.findAll().subscribe(data => {this.guides=data})
  }

  saveAvisOnExperience (){
    this.avisService.save(this.avisExperience).subscribe(()=> {
    this.avisExperience=new Avis();
    this.findAllAvis()})
  }

  saveAvisOnLieu (){
    this.avisService.save(this.avisLieu).subscribe(()=> {
    this.avisLieu=new Avis();
    this.findAllAvis()})
  }

  saveAvisOnGuides (){
    this.avisService.save(this.avisGuide).subscribe(()=> {
    this.avisGuide=new Avis();
    this.findAllAvis()})
  }

  note1experience(){
    this.avisExperience.note= 1;
  }
  note2experience(){
    this.avisExperience.note= 2;
  }
  note3experience(){
    this.avisExperience.note= 3;
  }
  note4experience(){
    this.avisExperience.note= 4;
  }
  note5experience(){
    this.avisExperience.note= 5;
  }

  ngOnInit(): void {
    this.findAllAvis();
    this.findAllExperiences();
    this.findAllLieu();
    this.findAllguides();
  }



}
