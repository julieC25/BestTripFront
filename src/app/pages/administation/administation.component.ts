import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Experience } from 'src/app/model/experience';
import { Guide } from 'src/app/model/guide';
import { Newsletter } from 'src/app/model/newsletter';
import { Role } from 'src/app/model/role';
import { Utilisateur } from 'src/app/model/utilisateur';
import { ExperienceService } from 'src/app/services/experience.service';
import { GuideService } from 'src/app/services/guide.service';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { RoleService } from 'src/app/services/role.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-administation',
  templateUrl: './administation.component.html',
  styleUrls: ['./administation.component.scss']
})
export class AdministationComponent implements OnInit {
  utilisateurs!:Utilisateur[];
  utilisateur!:Utilisateur;
  emails:string = "";
  guides!:Guide[];
  currentUser:Utilisateur = this.appService?.currentUser;
  updatedUser!:boolean[];
  checkedTable!:boolean[][];
  roles!:Role[];
  newsletters!:Newsletter[];
  experiences!:Experience[];
  selectedFiles?: FileList;
  currentFileUpload?: File;
  constructor(private appService:AppService, private roleService:RoleService, private utilisateurService:UtilisateurService,
    private guideService:GuideService,private newsletterService:NewsletterService,private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.findAllUtilisateur();
    this.findAllGuides();
    this.findAllNewsletter();
    this.findAllExperience();
  }
  findAllNewsletter(){
    this.newsletterService.findAll().subscribe(data=>{this.newsletters=data;})
  }
  findAllGuides(){
    this.guideService.findAll().subscribe(data=>{this.guides=data;});
  }
  findAllUtilisateur(){
    this.utilisateurService.findAll().subscribe(data=>{this.utilisateurs=data;this.findAllRoles();this.createEmails()});
  }
  findAllRoles(){
    this.roleService.findAll().subscribe(data=>{this.roles=data;this.initUpdatedUser();});
  }
  createEmails(){
    this.emails = "";
    for(let i = 0;i<this.utilisateurs.length;i++){
      if(this.utilisateurs[i].abonnementNewsletter == true){
        this.emails = this.emails +", "+this.utilisateurs[i].email;
      }
    }
  }
  userChanged(utilisateur:Utilisateur,role:Role){
    var numUtilisateur = this.getUtilisateurNum(utilisateur);
    var numRole = this.getRoleNum(role);
    this.updatedUser[numUtilisateur] = true;
    this.utilisateurs[numUtilisateur].roles = [];
    if(this.checkedTable[numUtilisateur][numRole]){
      this.checkedTable[numUtilisateur][numRole] = false;
    }
    else{
      this.checkedTable[numUtilisateur][numRole] = true
    }
    this.checkedTable[numUtilisateur][numRole]
    for(let j=0;j<this.roles.length;j++){
      if(this.checkedTable[numUtilisateur][j]){
        this.utilisateurs[numUtilisateur].roles[this.utilisateurs[numUtilisateur].roles.length]=this.roles[j];
      }
    }
  }
  initUpdatedUser(){
    this.updatedUser = new Array();
    this.checkedTable = new Array();
    for(let i=0;i<this.utilisateurs.length;i++){
      this.updatedUser[i]=false;
      this.checkedTable[i] = new Array();
      for(let j = 0;j<this.roles.length;j++){
        for(let k =0;k<this.utilisateurs[i].roles.length;k++){
          if(this.roles[j].idRole == this.utilisateurs[i].roles[k].idRole){
            this.checkedTable[i][j]=true;
          }
        }
      }
    }
  }
  saveRoles(){
    for(let i = 0;i<this.utilisateurs.length;i++){
      if(this.updatedUser[i]){
        this.utilisateurService.updateUtilisateurRole(this.utilisateurs[i].idUtilisateur,this.utilisateurs[i].roles).subscribe(()=>{
          this.findAllUtilisateur();
        }
        );
      }
    }
  }
  authenticated():boolean{
    return this.appService.authenticated;
  }
  authorities(){
    return this.appService.isAdmin;
  }
  getUtilisateurNum(utilisateur:Utilisateur){
    let iU = 0;
    while(this.utilisateurs[iU].idUtilisateur!=utilisateur.idUtilisateur){
      iU++;
    }
    return iU;
  }
  getRoleNum(role:Role){
    let iR = 0;
    
    while(this.roles[iR].idRole!=role.idRole){
      iR++;
    }
    return iR;
  }
  isTableChecked(utilisateur:Utilisateur,role:Role){
    return this.checkedTable[this.getUtilisateurNum(utilisateur)][this.getRoleNum(role)];
  }
  updateCheckedTable(utilisateur:Utilisateur,role:Role){
    //this.checkedTable[this.getUtilisateurNum(utilisateur)][this.getRoleNum(role)]=!this.checkedTable[this.getUtilisateurNum(utilisateur)][this.getRoleNum(role)];
  }
  findAllExperience(){
    this.experienceService.findAll().subscribe(data=>{this.experiences=data;});
  }
  supprimerGuide(guide:Guide){
    this.guideService.delete(guide.idGuide).subscribe(()=>{this.findAllExperience();});
  }
  supprimerExperience(experience:Experience){
    this.experienceService.delete(experience.idExperience).subscribe(()=>{this.findAllExperience();});
  }
  approuverGuide(guide:Guide){
    guide.approbation = true;
    this.guideService.saveWithoutFile(guide).subscribe(()=>{
      this.findAllGuides()});
  }
  approuverExperience(experience:Experience){
    experience.approbation = true;
    this.experienceService.save(experience).subscribe(()=>{
      this.findAllExperience()});
  }
  isApprouved(guide:Guide){
    return guide.approbation;
  }
  isExperienceApprouved(experience:Experience){
    return experience.approbation;
  }
  
  desapprouverGuide(guide:Guide){
    guide.approbation = false;
    this.guideService.saveWithoutFile(guide).subscribe(()=>{this.findAllGuides()});
  }
  desapprouverExperience(experience:Experience){
    experience.approbation = false;
    this.experienceService.save(experience).subscribe(()=>{this.findAllExperience()});
  }
  selectFile(event:any){
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
      }
    }
  }
  ajouterFichier(guide:Guide){
    this.guideService.saveGuideFile(this.selectedFiles?.item(0) as File,guide.idGuide).subscribe(()=>{
      this.findAllGuides();
    })
  }
  doesGuideHasFile(guide:Guide){
    if(guide.fichierPdf == undefined || guide.fichierPdf == null){
      return false;
    }
    else{
      return true;
    }
  }
  supprimerFichier(guide:Guide){
    this.guideService.removeFile(guide.idGuide).subscribe(()=>{
      this.findAllGuides();
    })
  }
  envoyerNewsletter(newsletter:Newsletter){

  }
  supprimerUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(()=>{
      this.ngOnInit();
    });
  }
}
