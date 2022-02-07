import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'


export interface Arboles{
  id: number,
  nombre: string,
  comentario: string,
  enlace: string,
  modified: number
}

const ITEMS_KEY = "mi-arbol";


@Injectable({
  providedIn: 'root'
})



export class MisArbolesCrudService {

  private _storage : Storage;

  constructor(private storage: Storage) { 
    this.init();
   }
  
  //Creación de método para la creación del almacenamieto
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //Añadir arbol
  addArbol(arbol: Arboles):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((arboles : Arboles[])=>{
      if (arboles){
        arboles.push(arbol);
        return this.storage.set(ITEMS_KEY, arboles);
      }else {
        return this.storage.set(ITEMS_KEY, [arbol]);
      }
    })
  }


  //Obtener datos del storage através de la key
  getArboles(): Promise<Arboles[]>{
    return this.storage.get(ITEMS_KEY);
  }

  //Eliminar árbol
  deleteArboles(id: number): Promise<Arboles>{
    return this.storage.get(ITEMS_KEY).then((arboles : Arboles[])=>{
      if (!arboles || arboles.length === 0){
        return null;
      }
      let toKeep: Arboles[] = []; 
      for (let i of arboles){
        if (i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}



