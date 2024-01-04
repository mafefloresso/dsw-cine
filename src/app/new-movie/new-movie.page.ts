import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.page.html',
  styleUrls: ['./new-movie.page.scss'],
})
export class NewMoviePage implements OnInit {
  newmovieForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, 
    private apiProv: ApiProvider,
    private toastController: ToastController, private router: Router
    ) { 
      this.newmovieForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        director: ['', Validators.required],
        año: ['', Validators.required],    
        duracion: ['', Validators.required], 
        genero: ['', Validators.required],
        img: ['', Validators.required],   
      });      
    }

    public newMovie(){
      if(this.newmovieForm.valid){
        const data = this.newmovieForm.value;
        this.apiProv.createMovie(data)
        .then(async (response)=>{
          if(response){
            //console.log(response);
            const toast = await this.toastController.create({
             message: 'Pelicula creada con éxito',
             duration: 2000, // Duración de 2 segundos
             position: 'bottom'  // Posición inferior
           });
           toast.present();
           this.gotomovies()
          }
        })      
 
        this.newmovieForm.reset();
      }else{
        console.log('Los datos no son validos');
      }	
    }  


    public gotomovies(){
      // Llama la pantalla peliculas
      this.router.navigate(['/movies']);
    }  

  ngOnInit() {
  }

}
