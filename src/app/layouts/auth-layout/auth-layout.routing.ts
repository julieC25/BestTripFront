import { Routes } from '@angular/router';
import { AfriqueComponent } from 'src/app/pages/Afrique/afrique/afrique.component';
import { AmeriqueComponent } from 'src/app/pages/Amerique/amerique/amerique.component';
import { AsieComponent } from 'src/app/pages/Asie/asie/asie.component';
import { AustralieComponent } from 'src/app/pages/Australie/australie/australie.component';
import { EuropeComponent } from 'src/app/pages/Europe/europe/europe.component';
import { LieuxComponent } from 'src/app/pages/Lieux/lieux/lieux.component';
import { PaysComponent } from 'src/app/pages/Pays/pays/pays.component';
import { VillesComponent } from 'src/app/pages/Villes/villes/villes.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'Afrique',        component: AfriqueComponent},
    { path: 'Amerique',       component: AmeriqueComponent},
    { path: 'Asie',           component: AsieComponent},
    { path: 'Australie',      component: AustralieComponent},
    { path: 'Europe',         component: EuropeComponent},
    { path: 'Pays',           component: PaysComponent},
    { path: 'Villes',         component: VillesComponent},
    { path: 'Lieux',          component: LieuxComponent},



];
