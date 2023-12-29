import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.page.html',
  styleUrls: ['./funciones.page.scss'],
})
export class FuncionesPage implements OnInit {

  constructor(private router: Router ,) { }

  public openRegisterUserPage(){
    // Llama la pantalla de registro
    this.router.navigate(['/register']);
  }

  public gotomovies(){
    // Llama la pantalla peliculas
    this.router.navigate(['/movies']);
  }

  public gotofunciones(){
    // Llama la pantalla funciones
    this.router.navigate(['/funciones']);
  }

  ngOnInit() {
  }

}
