import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Utilisateur } from '../../model/utilisateur';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  utilisateur = new Utilisateur();
  nbGuides:number = 0;
  nbExperiences:number = 0;
  nbAvis:number=0;
  nbNewsletter:number=0;
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    if(this.appService.authenticated){
      this.utilisateur = this.appService.currentUser;
      if(this.utilisateur.guides !== undefined){
        this.nbGuides = this.utilisateur.guides.length;
      }
      if(this.utilisateur.experiences!==undefined){
        this.nbExperiences = this.utilisateur.experiences.length;
      }
      if(this.utilisateur.avisListe !== undefined){
        this.nbAvis = this.utilisateur.avisListe.length;
      }
      if(this.utilisateur.newsletters !== undefined){
        this.nbNewsletter = this.utilisateur.newsletters.length;
      }
    }
  }
  authenticated():boolean{
    return this.appService.authenticated;
  }
  isAbonneNewsletter(){
    return this.utilisateur.abonnementNewsletter;
  }

}
