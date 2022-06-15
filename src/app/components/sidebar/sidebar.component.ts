import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Accueil',  icon: 'ni-tv-2 text-primary', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
  //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    //{ path: '/user-profile', title: 'User profile',  icon:'ni-circle-08 text-yellow', class: '' },
    { path: '/profil', title: 'Profil',  icon:'ni-circle-08 text-blue', class: '' },
    { path: '/statistique', title: 'Statistique',  icon:'ni ni-chart-bar-32', class: '' },
  // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  //  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
  {path : '/destination', title:'Destination', icon:'ni-pin-3 text-orange', class:''},
    //{ path : '/compagniesTransports', title : 'Les Transports', icon : 'ni-spaceship text-blue', class:''},
    { path : '/administration', title : 'Administration', icon : 'ni-settings-gear-65 text-black', class:''},
    { path : '/Avis', title : 'Avis', icon : 'ni-favourite-28 text-red', class:''},
   // { path : '/CompagniesTransports', title : 'Les Transports', icon : 'ni-spaceship text-blue', class:''},
    { path: '/experience', title: 'Experience',  icon:'ni-album-2', class: '' },
    { path: '/guide', title: 'Guide',  icon:'ni-books', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
