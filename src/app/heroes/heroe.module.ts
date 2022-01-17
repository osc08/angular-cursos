import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //cosas visibles 
    exports:[
        ListadoComponent
    ],
    //modulos objetos
    imports:[
            CommonModule
    ]

})
export class HeroeModule{}