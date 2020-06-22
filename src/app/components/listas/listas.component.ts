import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

  @Input() componenteTerminados: boolean;

  constructor( private router: Router, public deseoService: DeseosService ) { }

  modificarLista( listaId: number ){
    console.log( {listaId} );
    if ( this.componenteTerminados === true ){
      this.router.navigateByUrl('/tabs/tab2/agregar/' + listaId) ;
    }else{
      this.router.navigateByUrl('/tabs/tab1/agregar/' + listaId) ;
    }
  }

  borrarLista( listaId: number ){
    this.deseoService.borrarLista(listaId);
  }

}
