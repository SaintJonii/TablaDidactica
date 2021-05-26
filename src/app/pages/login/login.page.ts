import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormControl, FormGroup  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  pass: string;
  botonAcceso: boolean;
  loginForm = this.formBuider.group({
    correo: ['', 
    [
      Validators.required, 
      Validators.maxLength(40),
      Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
    ]],
    clave: ['', [
    
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4)
    ]]
  })

  get correo() {
    return this.loginForm.get('correo')
  }
  get clave() {
    return this.loginForm.get('clave')
  }

  public errorMessages = {
    correo: [
     { type: 'required', message: 'El correo es obligatorio' },
     { type: 'pattern', message: 'Ingrese un correo válido' },
     { type: 'maxlength', message: 'El correo no puede tener mas de 40 caracteres' } ],
    clave: [
     { type: 'required', message: 'La clave es obligatoria' },
     { type: 'maxlength', message: 'La clave no puede tener mas de 20 caracteres' },
     { type: 'minlength', message: 'La clave no puede tener menos de cuatro caracteres' } ],
 }
  constructor(private auth: AuthService, private formBuider: FormBuilder, private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.botonAcceso = true;
    this.limpiarInputs();
  }

  async login() {
    let validation:any = await this.auth.loginUser(this.user, this.pass);
    if(validation == 1){
      this.noValidado();
    }
  }

  LoginAdmin(){
    this.user="admin@admin.com";
    this.pass="111111";
  }
  LoginInvitado(){
    this.user="invitado@invitado.com";
    this.pass="222222";
  }
  LoginUsuario(){
    this.user="usuario@usuario.com";
    this.pass="333333";
  }
  LoginAnonimo(){
    this.user="anonimo@anonimo.com";
    this.pass="444444";
  }
  LoginTester(){
    this.user="tester@tester.com";
    this.pass="555555";
  }

  accesoRapido() {
    this.limpiarInputs();
    this.botonAcceso = !this.botonAcceso;
  }

  async noValidado() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: 'Credenciales incorrectas',
      message: 'Ingrese usuario y contraseña nuevamente',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  userSelected(e) {
    this.user = e.correo;
    this.pass = e.clave;
    this.botonAcceso = !this.botonAcceso;
  }

  limpiarInputs(){
    this.user = null;
    this.pass = null;
  }


}
