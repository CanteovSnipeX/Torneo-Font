import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


//Componetes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


//Services
import { CreatetorneoComponent } from './components/createtorneo/createtorneo.component';
import { CreategroupComponent } from './components/creategroup/creategroup.component';
import { CreateteamComponent } from './components/createteam/createteam.component';
import { ResultComponent } from './components/result/result.component';

import { PerfilComponent } from './components/perfil/perfil.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { RestUserService } from './services/restUser/rest-user.service';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { ListorneoComponent } from './components/listorneo/listorneo.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';
import { TablePosicionesComponent } from './components/table-posiciones/table-posiciones.component';
import { GraphicsEquipoComponent } from './components/graphics-equipo/graphics-equipo.component';

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
    PerfilComponent,
    ListuserComponent,
    HomeAdminComponent,
    ListorneoComponent,
    ListEquipoComponent,
    TablePosicionesComponent,
    GraphicsEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ RestUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
