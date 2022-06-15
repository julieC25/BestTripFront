import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  utilisateur = new Utilisateur();
  constructor(location: Location,  private element: ElementRef, private router: Router,
              private appService:AppService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    if(this.appService.authenticated){
      this.utilisateur = this.appService.currentUser;
    }
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            //return this.listTitles[item].title;
            return 'Acceuil'
        }
    }
    return 'Acceuil';
  }
  authenticated():boolean{
    return this.appService.authenticated;
  }
  logout(){
    this.appService.logout();
  }

}
