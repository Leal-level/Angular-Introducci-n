import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//modulo que se creo para almacenar todo lo que tiene en la carpeta heroes
import { HeroesModule } from './heroes/heroes.module';

import {ContadorModule} from './contadores/contador.module';

@NgModule({
  //las declaraciones dicen que cosas contiene el modulo (que componentes, pipes,etc)
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
