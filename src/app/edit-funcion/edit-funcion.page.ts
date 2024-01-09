import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-funcion',
  templateUrl: './edit-funcion.page.html',
  styleUrls: ['./edit-funcion.page.scss'],
})
export class EditFuncionPage implements OnInit {
  funcionId: string | null = '';
  editfuncionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiProv: ApiProvider,
    private toastController: ToastController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editfuncionForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      fecha: ['', [Validators.required, this.dateValidator]],
      hora: ['', [Validators.required, this.time24Validator]],
      duracion: ['', Validators.required],
    });
    this.funcionId = this.route.snapshot.queryParamMap.get('funcionId');

    this.apiProv.getFuncionOne(this.funcionId ?? "").then((res) => {
      this.editfuncionForm.patchValue(res.data);
      console.log("edit", res);
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

  public async editFuncion() {
    console.log("id" + this.funcionId);

    if (this.editfuncionForm.valid && this.funcionId) {
      const data = this.editfuncionForm.value;

      this.apiProv
        .editFuncion(this.funcionId, data)
        .then(async (response) => {
          if (response) {
            const toast = await this.toastController.create({
              message: 'Función actualizada con éxito',
              duration: 2000,
              position: 'bottom',
            });
            toast.present();
            this.router.navigate(['/funciones']);
          }
        })
        .catch(async (error) => {
          console.error(error);
          const toast = await this.toastController.create({
            message: 'Error al actualizar la función',
            duration: 2000,
            position: 'bottom',
            color: 'danger',
          });
          toast.present();
        });

      this.editfuncionForm.reset();
    } else {
      const toast = await this.toastController.create({
        message: 'Los datos no son válidos o falta el ID de la función',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
    }
  }

  public gotofunciones() {
    this.router.navigate(['/funciones']);
  }
  ngOnInit() {}
}
