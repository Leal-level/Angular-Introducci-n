import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador-tarea.component";


@NgModule({
    declarations : [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports : []
})
export class ContadorModule{

}