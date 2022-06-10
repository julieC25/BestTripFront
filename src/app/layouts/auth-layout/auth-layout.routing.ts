import { Routes } from '@angular/router';
import { AfriqueComponent } from 'src/app/pages/Afrique/afrique/afrique.component';
import { AmeriqueComponent } from 'src/app/pages/Amerique/amerique/amerique.component';
import { AsieComponent } from 'src/app/pages/Asie/asie/asie.component';
import { AustralieComponent } from 'src/app/pages/Australie/australie/australie.component';
import { EuropeComponent } from 'src/app/pages/Europe/europe/europe.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'Afrique',        component: AfriqueComponent},
    { path: 'Amerique',       component: AmeriqueComponent},
    { path: 'Asie',           component: AsieComponent},
    { path: 'Australie',      component: AustralieComponent},
    { path: 'Europe',         component: EuropeComponent}

];
