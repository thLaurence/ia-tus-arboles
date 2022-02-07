import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.page.html',
  styleUrls: ['./introduccion.page.scss'],
})
export class IntroduccionPage implements OnInit {

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  async ngOnInit() {
    const alert = await this.alertController.create({
      header: 'Introducción',
      message: 'Gracias por registrarte e iniciar sesión',
      buttons: ["¡Vamos!"],
    });
    await alert.present()
  }
}
