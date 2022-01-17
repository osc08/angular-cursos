import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
/*
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
export class ListadoComponent{
    heroes: string[] = ['Spiderman', 'Ironman', 'Black Widow', 'Hulk']
    heroeborrado: string = '';
    borrarHeroe(){
      console.log('Borrando');
      
      //this.heroes.splice(1, 0);
     // const heroeborrados = this.heroes.shift();
      console.log(this.heroes);
      //console.log(heroeborrados);
      //this.heroeborrado = heroeborrados;
      this.heroeborrado =  this.heroes.shift() || '';
    }


}
