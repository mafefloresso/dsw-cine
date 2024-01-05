import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'; // Import AbstractControl
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private apiProv: ApiProvider,
              private toastController: ToastController,private router: Router) {

    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator.bind(this)]],
    });
  }

  // Use AbstractControl as the type for the control parameter
  private passwordValidator(control: AbstractControl) {
    const password = control.value as string;

    // Verifica que la contraseña contenga al menos un número y una mayúscula
    if (!/[0-9]/.test(password) || !/[A-Z]/.test(password)) {
      return { invalidPassword: true };
    }

    return null;
  }

  public async register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const data = this.registerForm.value;
      
      this.apiProv.register(data)
        .then(async (response) => {
          if (response) {
            const toast = await this.toastController.create({
              message: 'Registro exitoso',
              duration: 2000,
              position: 'bottom'
            });
            toast.present();
          }
        });

      this.registerForm.reset();
    } else {
      // Acciones adicionales para manejar datos no válidos
      const errorMessage = 'Por favor, complete correctamente todos los campos.';
      const toast = await this.toastController.create({
        message: errorMessage,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  public gotomovies(){
    // Llama la pantalla peliculas
    this.router.navigate(['/movies']);
  } 

  ngOnInit() {
  }
}
