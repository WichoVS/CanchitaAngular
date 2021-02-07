import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MostrarNoticiasComponent } from './mostrar-noticias/mostrar-noticias.component';
import { MostrarNoticias2Component } from './mostrar-noticias2/mostrar-noticias2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    IniciosesionComponent,
    RegistroComponent,
    PerfilComponent,
    MostrarNoticiasComponent,
    MostrarNoticias2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
