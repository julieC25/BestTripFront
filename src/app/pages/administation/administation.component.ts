import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Role } from 'src/app/model/role';
import { Utilisateur } from 'src/app/model/utilisateur';
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
  currentUser:Utilisateur = this.appService?.currentUser;
  updatedUser!:boolean[];
  checkedTable!:boolean[][];
  roles!:Role[];
  constructor(private appService:AppService, private roleService:RoleService, private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.findAllUtilisateur();
  }
  findAllUtilisateur(){
    this.utilisateurService.findAll().subscribe(data=>{this.utilisateurs=data;this.findAllRoles();});
  }
  findAllRoles(){
    this.roleService.findAll().subscribe(data=>{this.roles=data;this.initUpdatedUser();});
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
}
