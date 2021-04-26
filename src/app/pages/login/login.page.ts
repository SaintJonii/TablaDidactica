import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormControl, FormGroup  } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  pass: string;
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
      Validators.minLength(6)
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
     { type: 'minlength', message: 'La clave no puede tener menos de seis caracteres' } ],
 }

  constructor(private auth: AuthService, public formBuider: FormBuilder) { }

  ngOnInit() {
  }

  login() {
    this.auth.loginUser(this.user, this.pass);
  }


}
