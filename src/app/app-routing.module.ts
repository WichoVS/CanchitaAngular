import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MostrarNoticiasComponent } from './mostrar-noticias/mostrar-noticias.component';
import { MostrarNoticias2Component } from './mostrar-noticias2/mostrar-noticias2.component';

const routes: Routes = [
  { path: 'Inicio', component: PrincipalComponent },
  { path: 'InicioSesion', component: IniciosesionComponent },
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Perfil', component: PerfilComponent },
  { path: 'Deportes', component: MostrarNoticiasComponent},
  { path: 'Esports', component: MostrarNoticias2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
