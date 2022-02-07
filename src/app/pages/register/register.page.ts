import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public nombre: string;
  public email: string;
  public password: string;
  public passwordConf: string;
  public region: string;
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.auth.register(this.nombre, this.email, this.password, this.passwordConf, this.region).then( auth => {
      console.log(auth)
      this.router.navigate(['/inicio'])
    }).catch( err => console.log(err))
  }
}
