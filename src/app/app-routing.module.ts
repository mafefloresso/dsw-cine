import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'funciones',
    loadChildren: () => import('./funciones/funciones.module').then( m => m.FuncionesPageModule)
  },
  {
    path: 'new-movie',
    loadChildren: () => import('./new-movie/new-movie.module').then( m => m.NewMoviePageModule)
  },  
  {
    
    path: 'edit-movie', // Agrega un parámetro llamado movieId
    loadChildren: () => import('./edit-movie/edit-movie.module').then( m => m.EditMoviePageModule)
  },
  {
    path: 'new-funcion',
    loadChildren: () => import('./new-funcion/new-funcion.module').then( m => m.NewFuncionPageModule)
  },
  {
    path: 'edit-funcion',
    loadChildren: () => import('./edit-funcion/edit-funcion.module').then( m => m.EditFuncionPageModule)
  },
  {
    path: '**', 
    redirectTo: 'login' 
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }