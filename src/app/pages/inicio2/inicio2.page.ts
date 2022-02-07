import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { pathToFileURL } from 'url';
import { AuthService } from '../../services/auth.service';

interface Componente {
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.page.html',
  styleUrls: ['./inicio2.page.scss'],
})


export class Inicio2Page implements OnInit {
  
  componentes : Componente[] = [
    {
      icon: 'clipboard-outline',
      name: 'Introducción',
      redirecTo: '/introduccion'
    },
    {
      icon: 'leaf',
      name: 'Mis Arboles',
      redirecTo: '/mis-arboles',
    },
    //{
      //icon: 'logo-apple',
      //name: 'Noticias Apple',
      //redirecTo: '/noticias-apple'
    //}
  ];

  constructor(private menuController: MenuController,
    public alertController: AlertController,
    public navCtrl: NavController,
    public authService : AuthService) { }

  ngOnInit() {
  }

  inicioMenu(){
    this.menuController.open('menu-inicio');
  }

  async cerrar(){
    this.authService.cerrarSesion();
  }

}

