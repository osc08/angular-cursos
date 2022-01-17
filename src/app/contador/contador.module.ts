import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';



@NgModule({
    declarations:[
        ContadorComponent
    ],

    //ocupar fuera del modulo
    exports:[
        ContadorComponent
    ],
    imports:[
        CommonModule
    ]
})

export class ContadorModule{};