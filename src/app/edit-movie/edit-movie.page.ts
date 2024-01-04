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
export class EditMoviePage implements OnInit{
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
      año: ['', Validators.required],    
      duracion: ['', Validators.required], 
      genero: ['', Validators.required],
      img: ['', Validators.required],   
    });
    this.movieId = this.route.snapshot.queryParamMap.get('movieId');
    
    this.apiProv.getMoviesOne(this.movieId ?? "").then((res) => {
      //this.editmovieForm.patchValue({nombre:res.nombre })
      this.editmovieForm.patchValue(res.data) 
      console.log("edit",res)
    })
    
  }
  
  ngOnInit() {
    console.log(this.route)
  }

  public editMovie() {
    
    console.log("id"+this.movieId)

    if (this.editmovieForm.valid && this.movieId) {
      const data = this.editmovieForm.value;
      
      this.apiProv.editMovie(this.movieId, data)
        .then(async (response) => {
          if (response) {
            const toast = await this.toastController.create({
              message: 'Película actualizada con éxito',
              duration: 2000,
              position: 'bottom'
            });
            toast.present();
            this.router.navigate(["/movies"],{skipLocationChange: false})
          }
        })
        .catch((error) => {
          console.error(error);
        });

      this.editmovieForm.reset();
      
    } else {
      console.log('Los datos no son válidos o falta el ID de la película');
    }
  }

  public gotomovies() {
    this.router.navigate(['/movies']);
  }
}
