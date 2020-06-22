import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  lista: Lista;
  descripItem: string;

  constructor( private deseosService: DeseosService, private activateRoute: ActivatedRoute ) {

    /* De esta forma genero un observable para leer el parametro que viene de la URL */
    /* this.activateRoute.params.subscribe( params => {
       this.lista =  this.deseosService.obtenerLista( params['listaId'] )
    }); */

    const listaId =  this.activateRoute.snapshot.paramMap.get('listaId');
    this.lista =  this.deseosService.obtenerLista( listaId );
    console.log( this.lista );
   }

   agregarItem(){
    if ( this.descripItem.length === 0 ){ return; }
    else{
      const nuevoItem = new ListaItem( this.descripItem );
      this.lista.items.push( nuevoItem );
      this.descripItem = '';
      this.deseosService.guardarStorage();
    }
   }

   cambioCheck( item: ListaItem ){

    // Esto retorna la cantidad de items pendientes que hay en la lista
    const pendientes = this.lista.items.filter( itemData => !itemData.completado).length;

    if ( pendientes === 0 ){
      this.lista.terminada = new Date();
      this.lista.completada = true;
    }else{
      this.lista.terminada = null;
      this.lista.completada = false;
    }
    this.deseosService.guardarStorage();
   }

   borraItem( i: number ){
      this.lista.items.splice( i, 1 );
      this.deseosService.guardarStorage();
   }
}
