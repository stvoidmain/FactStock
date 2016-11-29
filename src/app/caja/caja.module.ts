import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaComponent } from './caja.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { InicioComponent } from '../inicio/inicio.component';

const cajaRoutes: Routes = [
  {
    path: 'caja',
    component: CajaComponent,
    children: [
      {
        path: 'facturacion',
        component: FacturacionComponent
        },
        { path: '**', component: InicioComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(cajaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CajaModule { }
