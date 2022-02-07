import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { promise } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public nombre: string;
  constructor( private AFauth: AngularFireAuth, private router: Router,
               private db: AngularFirestore, private alertController: AlertController) { }

  login( email: string, password: string){
    return new Promise((resolve, rejected) =>{
      if(email != null){
        if(password != null){
          this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
            resolve(user);
          }).catch(err => {
            let mensaje = 'Datos ingresados incorrectamente';
            this.alerta(mensaje);
            rejected(err)});
        }else{ //Contraseña no ingresada
          let mensaje = 'Ingrese su contraseña';
          this.alerta(mensaje);
        }
      }else{ //Email no ingresado
        let mensaje = 'Ingrese su email';
        this.alerta(mensaje);
      }
    });
  }

  cerrarSesion(){
    this.AFauth.signOut().then( auth => {
      this.router.navigate(['/login']);
    })
  }

  register(nombre: string, email: string, password: string, passwordConf: string, region: string){
    return new Promise ((resolve, reject) =>{
      if(nombre != null){
        if(password != null && passwordConf != null){
          if(password == passwordConf){
            if(region != null && nombre != null){
              this.AFauth.createUserWithEmailAndPassword(email, password).then( res =>{
                const uid = res.user.uid;
                this.db.collection('users').doc(uid).set({
                  nombre: nombre,
                  email: email,
                  password: password,
                  passwordConf: passwordConf,
                  region: region,
                  uid: uid
                })
                resolve(res)
              }).catch( err => {
                const errorCode = err.code;
                const errorMessage = err.message;
                if( errorCode == 'auth/invalid-email'){
                  let mensaje = 'Email ingresado incorrectamente'
                  this.alerta(mensaje);
                }else if (errorCode == 'auth/internal-error'){
                  let mensaje = 'Existen campos vacíos'
                  this.alerta(mensaje);
                }else if (errorCode == 'auth/email-already-in-use'){
                  let mensaje = 'El email ingresado ya esta en uso'
                  this.alerta(mensaje);
                }else if(errorCode == 'auth/missing-email'){
                  let mensaje = 'Email no ingresado'
                  this.alerta(mensaje);
                }
                reject(err)
              })
            } else{ //Regio no seleccionada
              let mensaje = 'Seleccione una región'
                this.alerta(mensaje);
            }
          }else { //CONTRASEÑAS IGUALES
            let mensaje = 'Las contraseñas no coinciden'
            this.alerta(mensaje);
          }
        } else{ //CONTRASEÑA VERIFICADO != DE NULL
          let mensaje = 'Escriba su contraseña, 6 carácteres mínimos'
          this.alerta(mensaje);
        }
    } else { //NOMBRE VERIFICADO
      let mensaje = 'Escriba su nombre'
      this.alerta(mensaje);
    }
  })
  }

  getUserAuth(){
    return this.AFauth.authState
  }

  async alerta(mensaje){
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ["Volver a intentar"],
    });
    await alert.present()
  }
}

