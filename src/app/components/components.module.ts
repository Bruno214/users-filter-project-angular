import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFiltroComponent } from './user-filtro/user-filtro.component';
import {FormsModule} from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { PipesModule } from '../Pipes/pipes/pipes.module';



@NgModule({
  declarations: [
    UserDetailsComponent,
    UserFiltroComponent,
    UserListComponent


  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    UserDetailsComponent,
    UserFiltroComponent,
    UserListComponent
  ]
})
export class ComponentsModule {}
