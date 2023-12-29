import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProvider } from '../providers/api.prov';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private apiProv: ApiProvider,
    private toastController: ToastController,
    ) {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],  

    });
   }

   public register(){
     if(this.registerForm.valid){
       console.log(this.registerForm.value);
       const data = this.registerForm.value;
       this.apiProv.register(data)
       .then(async (response)=>{
         if(response){
           //console.log(response);
           const toast = await this.toastController.create({
            message: 'Registro exitoso',
            duration: 2000, // Duración de 2 segundos
            position: 'bottom'  // Posición inferior
          });
          toast.present();
         }
       })      

       this.registerForm.reset();
     }else{
       console.log('Los datos no son validos');
     }	
   }

  ngOnInit() {
  }

}
