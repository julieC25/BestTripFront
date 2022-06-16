import { Routes } from '@angular/router';
import { AfriqueComponent } from 'src/app/pages/Afrique/afrique/afrique.component';
import { AmeriqueComponent } from 'src/app/pages/Amerique/amerique/amerique.component';
import { AsieComponent } from 'src/app/pages/Asie/asie/asie.component';
import { AustralieComponent } from 'src/app/pages/Australie/australie/australie.component';
import { EuropeComponent } from 'src/app/pages/Europe/europe/europe.component';
import { AfriqueExpConsultationComponent } from 'src/app/pages/Experience/exp-afrique/afrique-exp-consultation/afrique-exp-consultation.component';
import { AfriqueExpPartageComponent } from 'src/app/pages/Experience/exp-afrique/afrique-exp-partage/afrique-exp-partage.component';
import { ExpAfriqueComponent } from 'src/app/pages/Experience/exp-afrique/exp-afrique.component';
import { AmeriqueExpConsultationComponent } from 'src/app/pages/Experience/exp-amerique/amerique-exp-consultation/amerique-exp-consultation.component';
import { AmeriqueExpPartageComponent } from 'src/app/pages/Experience/exp-amerique/amerique-exp-partage/amerique-exp-partage.component';
import { ExpAmeriqueComponent } from 'src/app/pages/Experience/exp-amerique/exp-amerique.component';
import { AsieExpConsultationComponent } from 'src/app/pages/Experience/exp-asie/asie-exp-consultation/asie-exp-consultation.component';
import { AsieExpPartageComponent } from 'src/app/pages/Experience/exp-asie/asie-exp-partage/asie-exp-partage.component';
import { ExpAsieComponent } from 'src/app/pages/Experience/exp-asie/exp-asie.component';
import { EuropeExpConsultationComponent } from 'src/app/pages/Experience/exp-europe/europe-exp-consultation/europe-exp-consultation.component';
import { EuropeExpPartageComponent } from 'src/app/pages/Experience/exp-europe/europe-exp-partage/europe-exp-partage.component';
import { ExpEuropeComponent } from 'src/app/pages/Experience/exp-europe/exp-europe.component';
import { ExpOceanieComponent } from 'src/app/pages/Experience/exp-oceanie/exp-oceanie.component';
import { OceanieExpConsultationComponent } from 'src/app/pages/Experience/exp-oceanie/oceanie-exp-consultation/oceanie-exp-consultation.component';
import { OceanieExpPartageComponent } from 'src/app/pages/Experience/exp-oceanie/oceanie-exp-partage/oceanie-exp-partage.component';
import { ExperiencesComponent } from 'src/app/pages/Experience/experiences.component';
import { LieuGComponent } from 'src/app/pages/lieuG/lieu-g/lieu-g.component';
import { LieuxComponent } from 'src/app/pages/Lieux/lieux/lieux.component';
import { PaysComponent } from 'src/app/pages/Pays/pays/pays.component';
import { VillesComponent } from 'src/app/pages/Villes/villes/villes.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',                component: LoginComponent },
    { path: 'register',             component: RegisterComponent },
    { path: 'Afrique',              component: AfriqueComponent},
    { path: 'Amerique',             component: AmeriqueComponent},
    { path: 'Asie',                 component: AsieComponent},
    { path: 'Australie',            component: AustralieComponent},
    { path: 'Europe',               component: EuropeComponent},
    { path: 'Pays',                 component: PaysComponent},
    { path: 'Villes',               component: VillesComponent},
    { path: 'lieuG',                component: LieuGComponent},
    { path: 'Experience',           component: ExperiencesComponent},
    { path: 'ExpAfrique',           component: ExpAfriqueComponent},
    { path: 'ExpAmerique',          component: ExpAmeriqueComponent},
    { path: 'ExpAsie',              component: ExpAsieComponent},
    { path: 'ExpOceanie',           component: ExpOceanieComponent},
    { path: 'ExpEurope',            component: ExpEuropeComponent},
    { path: 'AfriqueConsultation',  component: AfriqueExpConsultationComponent},
    { path: 'AfriquePartage',       component: AfriqueExpPartageComponent},
    { path: 'AmeriqueConsultation', component: AmeriqueExpConsultationComponent},
    { path: 'AmeriquePartage',      component: AmeriqueExpPartageComponent},
    { path: 'AsieConsultation',     component: AsieExpConsultationComponent},
    { path: 'AsiePartage',          component: AsieExpPartageComponent},
    { path: 'EuropeConsultation',   component: EuropeExpConsultationComponent},
    { path: 'EuropePartage',        component: EuropeExpPartageComponent},
    { path: 'OceanieConsultation',  component: OceanieExpConsultationComponent},
    { path: 'OceaniePartage',       component: OceanieExpPartageComponent},




];
