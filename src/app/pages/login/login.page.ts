import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router, 
              private alertController: AlertController, private AFauth: AngularFireAuth) { }

  ngOnInit() {
  }

  async alerta(){
    if(this.email == null && this.password == null){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No ha ingresado ningun dato',
        buttons: ["Volver a intentar"],
      });
      await alert.present()
    }
    else if(this.email == null){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Email no registrado',
        buttons: ["Volver a intentar"],
      });
      await alert.present()
    }
    else if(this.password == null){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Contraseña incorrecta',
        buttons: ["Volver a intentar"],
      });
      await alert.present()
    }
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then( res => {
      this.router.navigate(['/inicio']);
    }).catch(err => {
      this.alerta();
    })
  }
  
  
}
