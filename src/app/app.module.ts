import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { DestinationComponent } from './pages/destination/destination/destination.component';
//import { AvisComponent } from './pages/Avis/avis/avis.component';
import { RoleService } from './services/role.service';
import { UtilisateurService } from './services/utilisateur.service';
import { AmeriqueComponent } from './pages/Amerique/amerique/amerique.component';
import { AsieComponent } from './pages/Asie/asie/asie.component';
import { AustralieComponent } from './pages/Australie/australie/australie.component';
import { AfriqueComponent } from './pages/Afrique/afrique/afrique.component';
import { EuropeComponent } from './pages/Europe/europe/europe.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { PaysComponent } from './pages/Pays/pays/pays.component';
import { ExperiencesComponent } from './pages/Experience/experiences.component';
import { VillesComponent } from './pages/Villes/villes/villes.component';
import { LieuxComponent } from './pages/Lieux/lieux/lieux.component';
import { GuideComponent } from './pages/Guide/guide.component';
import { ExpAfriqueComponent } from './pages/Experience/exp-afrique/exp-afrique.component';
import { ExpAsieComponent } from './pages/Experience/exp-asie/exp-asie.component';
import { ExpEuropeComponent } from './pages/Experience/exp-europe/exp-europe.component';
import { ExpOceanieComponent } from './pages/Experience/exp-oceanie/exp-oceanie.component';
import { ExpAmeriqueComponent } from './pages/Experience/exp-amerique/exp-amerique.component';
import { CreationpaysComponent } from './pages/creationpays/creationpays.component';
import { CreationvilleComponent } from './pages/creationville/creationville.component';
import { CreationlieuComponent } from './pages/creationlieu/creationlieu.component';
import { AfriqueExpConsultationComponent } from './pages/Experience/exp-afrique/afrique-exp-consultation/afrique-exp-consultation.component';
import { AmeriqueExpConsultationComponent } from './pages/Experience/exp-amerique/amerique-exp-consultation/amerique-exp-consultation.component';
import { AsieExpConsultationComponent } from './pages/Experience/exp-asie/asie-exp-consultation/asie-exp-consultation.component';
import { EuropeExpConsultationComponent } from './pages/Experience/exp-europe/europe-exp-consultation/europe-exp-consultation.component';
import { OceanieExpConsultationComponent } from './pages/Experience/exp-oceanie/oceanie-exp-consultation/oceanie-exp-consultation.component';
import { GuideAfriqueComponent } from './pages/Guide/guide-afrique/guide-afrique.component';
import { GuideAsieComponent } from './pages/Guide/guide-asie/guide-asie.component';
import { GuideAmeriqueComponent } from './pages/Guide/guide-amerique/guide-amerique.component';
import { GuideEuropeComponent } from './pages/Guide/guide-europe/guide-europe.component';
import { GuideOceanieComponent } from './pages/Guide/guide-oceanie/guide-oceanie.component';
import { AfriqueGuideConsultationComponent } from './pages/Guide/guide-afrique/afrique-guide-consultation/afrique-guide-consultation.component';
import { AmeriqueGuideConsultationComponent } from './pages/Guide/guide-amerique/amerique-guide-consultation/amerique-guide-consultation.component';
import { AsieGuideConsultationComponent } from './pages/Guide/guide-asie/asie-guide-consultation/asie-guide-consultation.component';
import { EuropeGuideConsultationComponent } from './pages/Guide/guide-europe/europe-guide-consultation/europe-guide-consultation.component';
import { OceanieGuideConsultationComponent } from './pages/Guide/guide-oceanie/oceanie-guide-consultation/oceanie-guide-consultation.component';
import { ExpPartageComponent } from './pages/Experience/exp-partage/exp-partage.component';
import { GuidePartageComponent } from './pages/Guide/guide-partage/guide-partage.component';
import { LieuGComponent } from './pages/lieuG/lieu-g/lieu-g.component';
import { AvisComponent } from './pages/Avis/avis/avis.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    DestinationComponent,
    AvisComponent,
    ExperiencesComponent,
    AmeriqueComponent,
    AsieComponent,
    AustralieComponent,
    AfriqueComponent,
    EuropeComponent,
    StatistiqueComponent,
    PaysComponent,
    VillesComponent,
    LieuxComponent,
    GuideComponent,
    ExpAfriqueComponent,
    ExpAsieComponent,
    ExpEuropeComponent,
    ExpOceanieComponent,
    ExpAmeriqueComponent,
    CreationpaysComponent,
    CreationpaysComponent,
    CreationvilleComponent,
    CreationlieuComponent,
    AfriqueExpConsultationComponent,
    AmeriqueExpConsultationComponent,
    AsieExpConsultationComponent,
    EuropeExpConsultationComponent,
    OceanieExpConsultationComponent,
    GuideAfriqueComponent,
    GuideAsieComponent,
    GuideAmeriqueComponent,
    GuideEuropeComponent,
    GuideOceanieComponent,
    AfriqueGuideConsultationComponent,
    AmeriqueGuideConsultationComponent,
    AsieGuideConsultationComponent,
    EuropeGuideConsultationComponent,
    OceanieGuideConsultationComponent,
    ExpPartageComponent,
    GuidePartageComponent,
    LieuGComponent,

    
  ],
  providers: [RoleService,
              UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
