import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Jose";
  nombre2 = "jose antonio palacios ramIRez";

  array = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;
  
  heroe = {
    nombre: 'Logan',
    clave: 'Lobezno',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  }

  valorDePromesa =  new Promise( (resolve,reject) => {
    setTimeout( () => resolve('Llego los datos!'), 3500)
  });

  fecha = new Date();

  video = "kWEPp73pyvY";

  activar = true

 
}
