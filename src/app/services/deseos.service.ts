import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
    console.log( this.listas );
  }

  crearLista( titulo: string ){
    const nuevaLista = new Lista( titulo );
    this.listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista( listaId: number ){
     this.listas =  this.listas.filter( lista => lista.id !== listaId );
     this.guardarStorage();
  }

  obtenerLista( listaId: string | number ){
    listaId = Number(listaId);
    return this.listas.find( listaData => listaData.id === listaId );
  }

  guardarStorage(){
    localStorage.setItem( 'data', JSON.stringify(this.listas)  );
  }

  cargarStorage(){
    if ( localStorage.getItem('data') ){
      this.listas = JSON.parse( localStorage.getItem('data') );
      console.log(this.listas);
    }
  }

}
