import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';



@NgModule({
  declarations: [
    PantallaPrincipalComponent
  ],
  exports: [
    CommonModule,
    PantallaPrincipalComponent
  ]
})
export class LoginModule { }
