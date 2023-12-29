import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProvider } from '../providers/api.prov';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  public moviesTemp : any = [];
  public movies : any = []; 
  

  constructor( private router: Router , private apiProv: ApiProvider,) {
    this.getMovies();
   }

  ngOnInit() {
  }


  public async getMovies() {
    try {
      this.moviesTemp = await this.apiProv.getMovies();
      console.log(this.moviesTemp.data);
      this.movies = this.moviesTemp.data;
    } catch (error) {
      console.error('Error al obtener las películas:', error);
    }
  }
  
  public trackByFn(index: number, item: any): number {
    return item.id; 
  }
  public openRegisterUserPage(){
    // Llama la pantalla de registro
    this.router.navigate(['/register']);
  }

  public opennewMoviePage(){
    // Llama la pantalla de registro de pelicula
    this.router.navigate(['/new-movie']);
  }


  public gotomovies(){
    // Llama la pantalla peliculas
    this.router.navigate(['/movies']);
  }

  public gotofunciones(){
    // Llama la pantalla funciones
    this.router.navigate(['/funciones']);
  }

}
