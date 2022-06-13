import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProfilComponent } from 'src/app/pages/profil/profil.component';
import { DestinationComponent } from '../../pages/destination/destination/destination.component';
import { AvisComponent } from 'src/app/pages/Avis/avis/avis.component';
import { StatistiqueComponent } from 'src/app/pages/statistique/statistique.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'profil',         component: ProfilComponent},
    { path: 'destination',    component: DestinationComponent},
    { path: 'statistique',    component: StatistiqueComponent},
    { path: 'Avis',           component: AvisComponent},

];
