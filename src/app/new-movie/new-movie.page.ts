import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.page.html',
  styleUrls: ['./new-movie.page.scss'],
})
export class NewMoviePage {
  newmovieForm: FormGroup;
  isErrorToastDisplayed: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiProv: ApiProvider,
    private toastController: ToastController,
    private router: Router
  ) { 
    this.newmovieForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      director: ['', Validators.required],
      año: ['', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]],
      duracion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      genero: ['', Validators.required],
      img: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/\S+$/)]],
    });      
  }

  public newMovie(){
    if(this.newmovieForm.valid){
      const data = this.newmovieForm.value;
      this.apiProv.createMovie(data)
        .then(async (response) => {
          if(response){
            const toast = await this.toastController.create({
              message: 'Película creada con éxito',
              duration: 2000,
              position: 'bottom'
            });
            toast.present();
          }
        })      
      this.newmovieForm.reset();
    } else {
      this.showFormErrorMessage();
    }	
  }  

  private showFormErrorMessage() {
    if (!this.isErrorToastDisplayed) {
      const errorMessage = 'Por favor, complete correctamente todos los campos.';
      this.isErrorToastDisplayed = true; // Establecer la bandera de estado
      this.showToastMessage(errorMessage);
    }
  }
  
  private async showToastMessage(errorMessage: string | null) {
    if (errorMessage) {
      const toast = this.toastController.create({
        message: errorMessage,
        duration: 3000,
        position: 'bottom'
      });
      (await toast).present();
      // Después de mostrar el mensaje, restablecer la bandera de estado después de un tiempo
      setTimeout(() => {
        this.isErrorToastDisplayed = false;
      }, 5000); // Ajusta el tiempo según tus necesidades
    }
  }

  public gotomovies(){
    this.router.navigate(['/movies']);
  }  

  ngOnInit() {
  }
}
