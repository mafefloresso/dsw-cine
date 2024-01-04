import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMoviePageRoutingModule } from './new-movie-routing.module';

import { NewMoviePage } from './new-movie.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMoviePageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [NewMoviePage]
})
export class NewMoviePageModule {}
