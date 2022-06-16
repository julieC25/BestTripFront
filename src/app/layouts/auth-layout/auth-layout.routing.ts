import { Routes } from '@angular/router';
import { AfriqueComponent } from 'src/app/pages/Afrique/afrique/afrique.component';
import { AmeriqueComponent } from 'src/app/pages/Amerique/amerique/amerique.component';
import { AsieComponent } from 'src/app/pages/Asie/asie/asie.component';
import { AustralieComponent } from 'src/app/pages/Australie/australie/australie.component';
import { CreationlieuComponent } from 'src/app/pages/creationlieu/creationlieu.component';
import { CreationpaysComponent } from 'src/app/pages/creationpays/creationpays.component';
import { CreationvilleComponent } from 'src/app/pages/creationville/creationville.component';
import { EuropeComponent } from 'src/app/pages/Europe/europe/europe.component';
import { ExpAfriqueComponent } from 'src/app/pages/Experience/exp-afrique/exp-afrique.component';
import { ExpAmeriqueComponent } from 'src/app/pages/Experience/exp-amerique/exp-amerique.component';
import { ExpAsieComponent } from 'src/app/pages/Experience/exp-asie/exp-asie.component';
import { ExpEuropeComponent } from 'src/app/pages/Experience/exp-europe/exp-europe.component';
import { ExpOceanieComponent } from 'src/app/pages/Experience/exp-oceanie/exp-oceanie.component';
import { ExperiencesComponent } from 'src/app/pages/Experience/experiences.component';
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
    { path: 'CreationPays',         component: CreationpaysComponent},
    { path: 'CreationVille',         component: CreationvilleComponent},
    { path: 'CreationLieu',         component: CreationlieuComponent},
   // { path: 'Lieux',          component: LieuxComponent},
    { path: 'Experience',     component: ExperiencesComponent},
    { path: 'ExpAfrique',     component: ExpAfriqueComponent},
    { path: 'ExpAmerique',    component: ExpAmeriqueComponent},
    { path: 'ExpAsie',        component: ExpAsieComponent},
    { path: 'ExpOceanie',     component: ExpOceanieComponent},
    { path: 'ExpEurope',      component: ExpEuropeComponent},




];
