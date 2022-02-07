import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( public alertController: AlertController, private storage: Storage ) {}

  componentes : Componente[] =[
    {
      icon: 'leaf',
      name: 'Introducción',
      redirecTo: '/introduccion'
    },
    {
      icon: 'logo-apple',
      name: 'Noticias Apple',
      redirecTo: '/noticias-apple'
    }
  ]

  
}


