
import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',// app es personalizao   `backtick
    template:  `

            <h1>hola mundo</h1>
            <p>{{ tit }}</p>
            <p>{{ 1+4 }}</p>

            <p>Contador app</p>

            <button (click)="acumular(1)">+ 1</button>
            <span>{{ numero }}</span>
            <button (click)="restar()"> - 1</button>

            <p>tarea </p>
            <button (click)="acumular2(base)">+ {{base}}</button>
            <span>{{ base }}</span>
            <button (click)="dismuniuir(base)"> - {{base}}</button>
         `
})
export class ContadorComponent{

    public tit: string = 'Bienvenido'; // se puede poner public y el tipado o tipo de la variable
    public numero: number = 10;
  
    //metodo
    sumar(){
     this.numero = this.numero +1 // +=
    }
    restar(){
      this.numero = this.numero -1 // +=
    }
    acumular(valor: number){
      this.numero += 1;
    }
  
    base: number = 5;
    acumular2(valor: number){
      this.base +=valor;
    }
    dismuniuir(valor: number){
      this.base -=valor;
    }

}