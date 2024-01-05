import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
})
export class EditMoviePage implements OnInit {
  movieId: string | null = '';
  editmovieForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiProv: ApiProvider,
    private toastController: ToastController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editmovieForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      director: ['', Validators.required],
      año: ['', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]],
      duracion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      genero: ['', Validators.required],
      img: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/\S+$/)]],
    });
    this.movieId = this.route.snapshot.queryParamMap.get('movieId');

    this.apiProv.getMoviesOne(this.movieId ?? "").then((res) => {
      this.editmovieForm.patchValue(res.data);
      console.log("edit", res);
    });
  }

  ngOnInit() {
    console.log(this.route);
  }

  public async editMovie() {
    console.log("id" + this.movieId);

    if (this.editmovieForm.valid && this.movieId) {
      const data = this.editmovieForm.value;

      this.apiProv
        .editMovie(this.movieId, data)
        .then(async (response) => {
          if (response) {
            const toast = await this.toastController.create({
              message: 'Película actualizada con éxito',
              duration: 2000,
              position: 'bottom',
            });
            toast.present();
            this.router.navigate(['/movies'], { skipLocationChange: false });
          }
        })
        .catch(async (error) => {
          console.error(error);
          const toast = await this.toastController.create({
            message: 'Error al actualizar la película',
            duration: 2000,
            position: 'bottom',
            color: 'danger', // Opcional: Puedes ajustar el color según tus necesidades
          });
          toast.present();
        });

      this.editmovieForm.reset();
    } else {
      const toast = await this.toastController.create({
        message: 'Los datos no son válidos o falta el ID de la película',
        duration: 2000,
        position: 'bottom',
        color: 'danger', 
      });
      toast.present();
    }
  }

  public gotomovies() {
    this.router.navigate(['/movies']);
  }
}
