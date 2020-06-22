import { ListaItem } from './lista-item.model';

export class Lista{
    id: number;
    titulo: string;
    creada: Date;
    terminada: Date;
    completada: boolean;
    items: ListaItem[];

    constructor( titulo: string ){
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.creada = new Date();
        this.completada = false;
        this.items = [];
    }
}
