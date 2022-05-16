import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent,
    ContactoComponent
  ],
  exports: [
    CardComponent,
    ContactoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
