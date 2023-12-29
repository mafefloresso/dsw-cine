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
    path: '**', 
    redirectTo: 'login' 
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }