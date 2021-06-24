import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CreatetorneoComponent } from './components/createtorneo/createtorneo.component';
import { CreategroupComponent } from './components/creategroup/creategroup.component';
import { CreateteamComponent } from './components/createteam/createteam.component';
import { ResultComponent } from './components/result/result.component';
import { SaveUserByAdminComponent } from './components/save-user-by-admin/save-user-by-admin.component';

import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    CreatetorneoComponent,
    CreategroupComponent,
    CreateteamComponent,
    ResultComponent,
    SaveUserByAdminComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
