import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  utilisateur!:Utilisateur;
  selectedFiles?: FileList;
  currentFileUpload?: File;
  constructor(private utilisateurService:UtilisateurService) { }

  ngOnInit() {
    this.utilisateur = new Utilisateur;
  }
  selectFile(event:any){
    this.selectedFiles = event.target.files;
    console.log(this.currentFileUpload)
  }
  saveUser(){
    this.currentFileUpload = this.selectedFiles?.item(0) as File;
    this.utilisateurService.save(this.currentFileUpload,this.utilisateur).subscribe(
      ()=>{
        this.utilisateur = new Utilisateur();
        this.selectFile = undefined;
      }
    )
  }
 
}
