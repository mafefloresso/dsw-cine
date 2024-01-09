import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-funcion',
  templateUrl: './new-funcion.page.html',
  styleUrls: ['./new-funcion.page.scss'],
})
export class NewFuncionPage implements OnInit {
  newfuncionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiProv: ApiProvider,
    private toastController: ToastController,
    private router: Router
  ) {
    this.newfuncionForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      fecha: ['', [Validators.required, this.dateValidator]],
      hora: ['', [Validators.required, this.time24Validator]],
      duracion: ['', Validators.required],
    });
  }

  // Validador de fecha en formato DD/MM/AAAA
  dateValidator(control: FormControl) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(control.value) ? null : { invalidDate: true };
  }

  // Validador de hora en formato de 24 horas
  time24Validator(control: FormControl) {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(control.value) ? null : { invalidTime: true };
  }

  // Agregar una nueva función
  public newFuncion() {
    if (this.newfuncionForm.valid) {
      const data = this.newfuncionForm.value;
      this.apiProv.createFuncion(data).then(async (response) => {
        if (response) {
          const toast = await this.toastController.create({
            message: 'Función creada con éxito',
            duration: 2000,
            position: 'bottom',
          });
          toast.present();
          this.gotofunciones();
        }
      });

      this.newfuncionForm.reset();
    } else {
      console.log('Los datos no son válidos');
    }
  }

  public gotofunciones() {
    this.router.navigate(['/funciones']);
  }

  ngOnInit() {}
}
