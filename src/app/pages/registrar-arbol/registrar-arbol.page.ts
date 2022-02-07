import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Arboles, MisArbolesCrudService } from 'src/app/services/mis-arboles-crud.service';
import { Platform, ToastController, IonList, NavController} from '@ionic/angular';


@Component({
  selector: 'app-registrar-arbol',
  templateUrl: './registrar-arbol.page.html',
  styleUrls: ['./registrar-arbol.page.scss'],
})
export class RegistrarArbolPage implements OnInit {

  arboles: Arboles[] = [];
  newArbol: Arboles = <Arboles>{};

  @ViewChild('myList')myList :IonList; 

  constructor(public alertController: AlertController, public navCtrl: NavController, private toastCtrl: ToastController,
    private plt: Platform, private storageService: MisArbolesCrudService){
      this.plt.ready().then(()=>{
        this.loadArboles();
      })
    }

  onSubmit(){
    console.log('holahola')
  }


  ngOnInit() {
  }

  //GET OBTENER DATOS
  loadArboles(){
    this.storageService.getArboles().then(arboles =>{
      this.arboles = arboles;
    });
  }

  //CREATE CREAR ARBOL
  addArbol(){
    this.newArbol.modified = Date.now();
    this.newArbol.id = Date.now();
    this.storageService.addArbol(this.newArbol).then(arbol =>{
    this.newArbol = <Arboles>{};
    this.showToast('Árbol ingresado');
    this.loadArboles();
    })
  }

  //DELETE ELIMINAR ARBOL
  deleteArbol(arbol: Arboles){
    this.storageService.deleteArboles(arbol.id).then(item=>{
      this.showToast('Árbol eliminado')
      this.myList.closeSlidingItems();
      this.loadArboles();
    })
  }

  async showToast(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1800
    });
    toast.present();
  }
}