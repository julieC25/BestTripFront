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
import { AvisComponent } from './pages/Avis/avis/avis.component';
import { ExperiencesComponent } from './pages/experiences/experiences/experiences.component';
import { GuidesComponent } from './pages/guide/guides/guides.component';


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
    GuidesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
