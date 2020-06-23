import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

  @Input() componenteTerminados: boolean;
  @ViewChild( IonList ) componenteLista: IonList;

  constructor( private router: Router, public deseoService: DeseosService, private alertController: AlertController ) { }

  modificarLista( listaId: number ){
    if ( this.componenteTerminados === true ){
      this.router.navigateByUrl('/tabs/tab2/agregar/' + listaId) ;
    }else{
      this.router.navigateByUrl('/tabs/tab1/agregar/' + listaId) ;
    }
  }

  borrarLista( listaId: number ){
    this.deseoService.borrarLista(listaId);
  }

  async modificarNombreLista( lista: Lista ){
    const alert =  await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Editar nombre lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.componenteLista.closeSlidingItems();
          }
        },
        {
          text: 'Modificar',
          handler: ( data ) => {
            if ( data.titulo.length === 0 ){ return; }
            else{
              lista.titulo = data.titulo;
              this.deseoService.guardarStorage();
              this.componenteLista.closeSlidingItems();
            }
          }
        }
      ]
    });

    alert.present();
  }

}
