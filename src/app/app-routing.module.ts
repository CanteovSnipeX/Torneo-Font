import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreategroupComponent } from './components/creategroup/creategroup.component';
import { CreateteamComponent } from './components/createteam/createteam.component';
import { CreatetorneoComponent } from './components/createtorneo/createtorneo.component';
import { GraphicsEquipoComponent } from './components/graphics-equipo/graphics-equipo.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeComponent } from './components/home/home.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';
import { ListorneoComponent } from './components/listorneo/listorneo.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultComponent } from './components/result/result.component';
import { SaveUserByAdminComponent } from './components/save-user-by-admin/save-user-by-admin.component';
import { TablePosicionesComponent } from './components/table-posiciones/table-posiciones.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'navbar' , component:NavbarComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createTorneo', component: CreatetorneoComponent},
  {path: 'createGroup', component: CreategroupComponent},
  {path: 'createTeam', component: CreateteamComponent},
  {path: 'result', component: ResultComponent},
  {path: 'saveUserByAdmin' , component: SaveUserByAdminComponent},
  {path: 'listuser', component: ListuserComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'home-admin',component: HomeAdminComponent},
  {path: 'tabla', component:TablePosicionesComponent},
  {path: 'listTorneo', component:ListorneoComponent },
  {path: 'listEquipo',component:ListEquipoComponent},
  {path: 'graficas',component:GraphicsEquipoComponent},
  {path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
