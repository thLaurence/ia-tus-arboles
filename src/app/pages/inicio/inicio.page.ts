import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore, docChanges } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre: string;

  constructor(private alertController: AlertController, private auth: AuthService,
              private db: AngularFirestore) { }

  async ngOnInit() {
    this.auth.getUserAuth().subscribe(users => {
      console.log(users)
      this.nombre = users.email;
      console.log(this.nombre);
    }); 
  }

  async bienvenido(){
    const alert = await this.alertController.create({
      header: '¡Bienvenido!', 
      message: this.nombre + ' ¡Gracias por iniciar sesión!',
      buttons: ["¡Vamos!"],
    });
    await alert.present()
  }

}
