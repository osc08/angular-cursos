import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{
    nombre: string = 'Batman';
    edad: number = 20;
    
    get nombreCapitalizado(){//getter
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return ` 
            ${ this.nombre} - ${ this.edad}
        `;//backtip para parsear
    }
    cambiarNombre(): void{
        this.nombre = 'Superman';
    }

    cambiarEdad(): void{
        this.edad = 45;
    }
    
}