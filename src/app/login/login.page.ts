import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private apiProv: ApiProvider,
    private toastController: ToastController,
    private router: Router 
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    if(this.loginForm.valid){
       const data = this.loginForm.value;
       this.apiProv.login(data)
       .then(async (response)=>{
         if(response){
           //console.log(response);
           if(response.token){
            localStorage.setItem("token", response.token); //Add token to local storage
          }
           const toast = await this.toastController.create({
            message: 'Login exitoso',
            duration: 2000, // Duración de 2 segundos
            position: 'bottom'  // Posición inferior
          });
          toast.present();
          this.gotomovies();
         }
       })      

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
