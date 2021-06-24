import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreategroupComponent } from './components/creategroup/creategroup.component';
import { CreateteamComponent } from './components/createteam/createteam.component';
import { CreatetorneoComponent } from './components/createtorneo/createtorneo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultComponent } from './components/result/result.component';
import { SaveUserByAdminComponent } from './components/save-user-by-admin/save-user-by-admin.component';

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

  {path: 'perfil', component:PerfilComponent},
  {path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
