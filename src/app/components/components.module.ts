import { NgModule } from '@angular/core'; // Este esta siempre brou
import { CommonModule } from '@angular/common'; // Trae el ngIf ngFoe ngSwitch etc

import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ ListasComponent ], // Aca van los componentes que utiliza el modulo
  // Exports es un arreglo con todas las cosas que son propias de este modulo que van a ser
  // necesarias si yo necesito trabajar con este modulo o con los componentes de este modulo de forma externa
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
