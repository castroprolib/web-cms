import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

// importar las rutas
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
{ path: '', component: HomeComponent }, 
{ path: 'login', component: LoginComponent }  
];


// colocar aqui los modulos para poder usarlos luegos del import arriba
@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  LoginComponent,
  NavbarComponent,
  FooterComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
