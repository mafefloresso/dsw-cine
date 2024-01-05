import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private apiProv: ApiProvider,
    private toastController: ToastController,
    private router: Router 
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      
      try {
        const response = await this.apiProv.login(data);
        
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          const toast = await this.toastController.create({
            message: 'Inicio de sesión exitoso',
            duration: 2000,
            position: 'bottom'
          });
          toast.present();
          this.gotomovies();
        } else {
          this.showErrorMessage('Credenciales inválidas. Por favor, verifique su email y contraseña.');
        }
      } catch (error) {
        console.error('Error en la solicitud de inicio de sesión:', error);
        this.showErrorMessage('Ocurrió un error durante el inicio de sesión. Por favor, inténtelo de nuevo más tarde.');
      }
    } else {
      this.showErrorMessage('Por favor, complete correctamente todos los campos.');
    }
  }

  async showErrorMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  public gotomovies() {
    this.router.navigate(['/movies']);
  }

  ngOnInit() {
  }
}
