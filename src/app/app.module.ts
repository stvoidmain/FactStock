import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
export const ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive];

import { AcercaDeComponent } from '../acercade/acercade.component';
import { InicioComponent } from './inicio/inicio.component';
import { FacturacionComponent } from './caja/facturacion/facturacion.component';
import { CajaComponent } from './caja/caja.component';
import { CajaModule } from './caja/caja.module';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acercade', component: AcercaDeComponent },
  { path: 'caja', component: CajaComponent },
  { path: '', component: InicioComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    InicioComponent,
    FacturacionComponent,
    CajaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    RouterModule.forRoot(appRoutes),
    CajaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
