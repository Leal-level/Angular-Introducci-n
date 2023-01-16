
import { compileComponentFromMetadata } from "@angular/compiler";
import {  NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //export significa que cosas quiero hacer publicas o visibles fuera de este modulo
    exports : [
        ListadoComponent
    ],
    //usualmente solo modulos son objetos que se ponen en los import
    imports : [
        // CommonModule
    ]
})
export class HeroesModule{
    
}