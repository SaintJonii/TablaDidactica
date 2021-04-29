import { Injectable } from '@angular/core';
import { miIcono } from '../modules/milcono';


@Injectable({
  providedIn: 'root'
})
export class IconosService {

  
  espaniol = new miIcono(0,"Español","../../assets/espania.svg");
  portugues = new miIcono(1,"Portugues","../../assets/brasil.svg");
  ingles = new miIcono(2,"Ingles","../../assets/inglaterra.svg");
 
  colores = new miIcono(0,"Colores","../../assets/colors.svg");
  numeros = new miIcono(1,"Numeros","../../assets/letter.svg");
  animales = new miIcono(2,"Animales","../../assets/cow.svg");
  

  ///Colores numeros animales


  constructor() { }

  public Idiomas() {

    let lista = new Array<miIcono>();
    lista.push(this.espaniol);
    lista.push(this.portugues);
    lista.push(this.ingles);

    return lista;
  }

  public Opciones(){
    let lista = new Array<miIcono>();
    lista.push(this.colores);
    lista.push(this.numeros);
    lista.push(this.animales);

    return lista;
  }
}
