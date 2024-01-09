import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProvider } from '../providers/api.prov';



@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.page.html',
  styleUrls: ['./funciones.page.scss']
})

export class FuncionesPage implements OnInit {

  public funcionesTemp: any = [];
  public funciones: any = []; 

  constructor(private router: Router, private apiProv: ApiProvider) {
    this.getFunciones();
  }

  ngOnInit() { }

  public async getFunciones() {
    try {
      this.funcionesTemp = await this.apiProv.getFunciones(); 
      console.log(this.funcionesTemp.data);
      this.funciones = this.funcionesTemp.data;
    } catch (error) {
      console.error('Error al obtener las funciones:', error);
    }
  }

  public trackByFn(index: number, item: any): number {
    return item.id; 
  }

  public openNewFuncionPage(){
    // Llama la pantalla de registro de función
    this.router.navigate(['/new-funcion']);
  }

  public deleteFuncion(funcionId: string) {
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar esta función?');
    if (confirmacion) {
      this.apiProv.deleteFuncion(funcionId)
        .then(() => {
          console.log('Función eliminada con éxito');
          this.getFunciones();
        }, error => {
          console.error('Error al eliminar la función', error);
        });
    } else {
      console.log('Operación de eliminación cancelada');
    }
  }

  public openEditFuncionPage(funcionId: string) {
    console.log("funciones.page", funcionId)
    this.router.navigate(['/edit-funcion'], {
      queryParams: { funcionId: funcionId },
    });
  }

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

  public logout(){
    this.apiProv.logout();
    this.router.navigate(['/login']);
  }

}
