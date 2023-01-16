import { Component } from "@angular/core";

@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent{
    nombre : string = "Reverse Flash";
    edad : number = 23;

    get nombreCapitalizado() :string {
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        /*esta es la manera basica: return this.nombre + '-' + this.edad
        pero en el retunr de abajo se implemetnan `` para crear un template string y se
        usa ${} para añadir valores dinamicos al template de string*/
        return ` ${ this.nombre } - ${this.edad} `;
    }

    cambiarNombre(): void{
        this.nombre = "Kid Flash";    
    }

    cambiarEdad(): void{
        this.edad = 17;    
    }
}