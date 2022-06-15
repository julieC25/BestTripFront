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
    //AvisComponent,
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

    
  ],
  providers: [RoleService,
              UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
