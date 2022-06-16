import { Routes } from '@angular/router';
import { AfriqueComponent } from 'src/app/pages/Afrique/afrique/afrique.component';
import { AmeriqueComponent } from 'src/app/pages/Amerique/amerique/amerique.component';
import { AsieComponent } from 'src/app/pages/Asie/asie/asie.component';
import { AustralieComponent } from 'src/app/pages/Australie/australie/australie.component';
import { CreationlieuComponent } from 'src/app/pages/creationlieu/creationlieu.component';
import { CreationpaysComponent } from 'src/app/pages/creationpays/creationpays.component';
import { CreationvilleComponent } from 'src/app/pages/creationville/creationville.component';
import { EuropeComponent } from 'src/app/pages/Europe/europe/europe.component';
import { AfriqueExpConsultationComponent } from 'src/app/pages/Experience/exp-afrique/afrique-exp-consultation/afrique-exp-consultation.component';
import { ExpAfriqueComponent } from 'src/app/pages/Experience/exp-afrique/exp-afrique.component';
import { AmeriqueExpConsultationComponent } from 'src/app/pages/Experience/exp-amerique/amerique-exp-consultation/amerique-exp-consultation.component';
import { ExpAmeriqueComponent } from 'src/app/pages/Experience/exp-amerique/exp-amerique.component';
import { AsieExpConsultationComponent } from 'src/app/pages/Experience/exp-asie/asie-exp-consultation/asie-exp-consultation.component';
import { ExpAsieComponent } from 'src/app/pages/Experience/exp-asie/exp-asie.component';
import { EuropeExpConsultationComponent } from 'src/app/pages/Experience/exp-europe/europe-exp-consultation/europe-exp-consultation.component';
import { ExpEuropeComponent } from 'src/app/pages/Experience/exp-europe/exp-europe.component';
import { ExpOceanieComponent } from 'src/app/pages/Experience/exp-oceanie/exp-oceanie.component';
import { OceanieExpConsultationComponent } from 'src/app/pages/Experience/exp-oceanie/oceanie-exp-consultation/oceanie-exp-consultation.component';
import { ExpPartageComponent } from 'src/app/pages/Experience/exp-partage/exp-partage.component';
import { ExperiencesComponent } from 'src/app/pages/Experience/experiences.component';
import { LieuGComponent } from 'src/app/pages/lieuG/lieu-g/lieu-g.component';
import { AfriqueGuideConsultationComponent } from 'src/app/pages/Guide/guide-afrique/afrique-guide-consultation/afrique-guide-consultation.component';
import { GuideAfriqueComponent } from 'src/app/pages/Guide/guide-afrique/guide-afrique.component';
import { AmeriqueGuideConsultationComponent } from 'src/app/pages/Guide/guide-amerique/amerique-guide-consultation/amerique-guide-consultation.component';
import { GuideAmeriqueComponent } from 'src/app/pages/Guide/guide-amerique/guide-amerique.component';
import { AsieGuideConsultationComponent } from 'src/app/pages/Guide/guide-asie/asie-guide-consultation/asie-guide-consultation.component';
import { GuideAsieComponent } from 'src/app/pages/Guide/guide-asie/guide-asie.component';
import { EuropeGuideConsultationComponent } from 'src/app/pages/Guide/guide-europe/europe-guide-consultation/europe-guide-consultation.component';
import { GuideEuropeComponent } from 'src/app/pages/Guide/guide-europe/guide-europe.component';
import { GuideOceanieComponent } from 'src/app/pages/Guide/guide-oceanie/guide-oceanie.component';
import { OceanieGuideConsultationComponent } from 'src/app/pages/Guide/guide-oceanie/oceanie-guide-consultation/oceanie-guide-consultation.component';
import { GuidePartageComponent } from 'src/app/pages/Guide/guide-partage/guide-partage.component';
import { GuideComponent } from 'src/app/pages/Guide/guide.component';
import { PaysComponent } from 'src/app/pages/Pays/pays/pays.component';
import { VillesComponent } from 'src/app/pages/Villes/villes/villes.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes =[
    { path: 'login',                     component: LoginComponent },
    { path: 'register',                  component: RegisterComponent },
    { path: 'Afrique',                   component: AfriqueComponent},
    { path: 'Amerique',                  component: AmeriqueComponent},
    { path: 'Asie',                      component: AsieComponent},
    { path: 'Australie',                 component: AustralieComponent},
    { path: 'Europe',                    component: EuropeComponent},
    { path: 'Pays',                      component: PaysComponent},
    { path: 'Villes',                    component: VillesComponent},
    { path: 'Experience',                component: ExperiencesComponent},
    { path: 'ExpPartage',                component: ExpPartageComponent},
    { path: 'ExpAfrique',                component: ExpAfriqueComponent},
    { path: 'ExpAmerique',               component: ExpAmeriqueComponent},
    { path: 'ExpAsie',                   component: ExpAsieComponent},
    { path: 'ExpOceanie',                component: ExpOceanieComponent},
    { path: 'ExpEurope',                 component: ExpEuropeComponent},
    { path: 'ExpAfriqueConsultation',    component: AfriqueExpConsultationComponent},
    { path: 'ExpAmeriqueConsultation',   component: AmeriqueExpConsultationComponent},
    { path: 'ExpAsieConsultation',       component: AsieExpConsultationComponent},
    { path: 'ExpEuropeConsultation',     component: EuropeExpConsultationComponent},
    { path: 'ExpOceanieConsultation',    component: OceanieExpConsultationComponent},
    { path: 'Guide',                     component: GuideComponent},
    { path: 'GuidePartage',              component: GuidePartageComponent},
    { path: 'GuideAfrique',              component: GuideAfriqueComponent},
    { path: 'GuideAmerique',             component: GuideAmeriqueComponent},
    { path: 'GuideAsie',                 component: GuideAsieComponent},
    { path: 'GuideEurope',               component: GuideEuropeComponent},
    { path: 'GuideOceanie',              component: GuideOceanieComponent},
    { path: 'GuideAfriqueConsultation',  component: AfriqueGuideConsultationComponent},
    { path: 'GuideAmeriqueConsultation', component: AmeriqueGuideConsultationComponent},
    { path: 'GuideAsieConsultation',     component: AsieGuideConsultationComponent},
    { path: 'GuideEuropeConsultation',   component: EuropeGuideConsultationComponent},
    { path: 'GuideOceanieConsultation',  component: OceanieGuideConsultationComponent},
    { path: 'CreationPays',              component: CreationpaysComponent},
    { path: 'CreationVille',             component: CreationvilleComponent},
    { path: 'CreationLieu',              component: CreationlieuComponent},
    { path: 'lieuG',                     component: LieuGComponent},
    { path: 'AfriqueConsultation',       component: AfriqueExpConsultationComponent},
    { path: 'AmeriqueConsultation',      component: AmeriqueExpConsultationComponent},
    { path: 'AsieConsultation',          component: AsieExpConsultationComponent},
    { path: 'EuropeConsultation',        component: EuropeExpConsultationComponent},
    { path: 'OceanieConsultation',       component: OceanieExpConsultationComponent},

];
