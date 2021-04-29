import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ImagenBoton } from '../modules/ImagenBoton';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  //=================== Observables
  private missionAnnouncedSource = new Subject<number>();
  private missionConfirmedSource = new Subject<number>();

  private misionOpciones = new Subject<number>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
  miMision$ = this.misionOpciones.asObservable();

  //===================Diccionarios

  misionConfirmada: boolean = false;
  caminoAudios: string = '../../assets/audio/';

  public opcionActual: string = "colores";
  public idiomaAcutal: string = "espaniol";

  public indiceIdioma: number = 1;
  public indiceOpcion: number = 1;


  /* #region diccionario */

  botonAzul = new ImagenBoton("azul", './assets/fondoBotones/fondoAzul.png');
  botonVerde = new ImagenBoton("verde", './assets/fondoBotones/fondoVerde.png');
  botonAmarillo = new ImagenBoton("amarillo", './assets/fondoBotones/fondoAmarillo.png');
  botonRojo = new ImagenBoton("rojo", './assets/fondoBotones/fondoRojo.png');
  botonLila = new ImagenBoton("lila", './assets/fondoBotones/fondoLila.png');

  botonUno = new ImagenBoton("uno", './assets/fondoBotones/fondoUno.png');
  botonDos = new ImagenBoton("dos", './assets/fondoBotones/fondoDos.png');
  botonTres = new ImagenBoton("tres", './assets/fondoBotones/fondoTresCuatro.png');
  botonCuatro = new ImagenBoton("cuatro", './assets/fondoBotones/fondoCuatro.png');
  botonCinco = new ImagenBoton("cinco", './assets/fondoBotones/fondoCinco.png');

  botonAnimalUno = new ImagenBoton("leon", './assets/fondoBotones/fondoLeon.jpg');
  botonAnimalDos = new ImagenBoton("caiman", './assets/fondoBotones/fondoCaiman.png');
  botonAnimalTres = new ImagenBoton("elefante", './assets/fondoBotones/fondoElefante.png');
  botonAnimalCuatro = new ImagenBoton("jirafa", './assets/fondoBotones/fondoJirafa.png');
  botonAnimalCinco = new ImagenBoton("cebra", './assets/fondoBotones/fondoCebra.png');

  public diccionarioColores = Array<ImagenBoton>();
  public diccionarioNumeros = Array<ImagenBoton>();
  public diccionarioAnimales = Array<ImagenBoton>();
  public vectorGeneral = Array<any>();


  uno: any;
  dos: any;
  tres: any;
  cuatro: any;
  cinco: any;


  Reproducir(opcion: string) {

    //creo el objeto audio
    //le cargo el camino al idioma
    //le cargo el camino al objeto
    //le cargo la eleccion del boton

    let carpetaIdioma = "espaniol";
    let carpetaOpcion = "colores";

    switch (this.indiceIdioma) {
      case 0:
        carpetaIdioma = "espaniol"
        break;
      case 1:
        carpetaIdioma = "portugues";
        break;
      case 2:
        carpetaIdioma = "ingles";
        break;
    }

    switch (this.indiceOpcion) {
      case 0:
        carpetaOpcion = "colores"
        break;
      case 1:
        carpetaOpcion = "numeros";
        break;
      case 2:
        carpetaOpcion = "animales"
        break;
    }

    this.uno = new Audio();

    if(carpetaOpcion == "animales")
    {
      this.uno.src = this.caminoAudios + carpetaIdioma + '/' + carpetaOpcion + '/' + opcion + '.ogg';
    }
    else{
      this.uno.src = this.caminoAudios + carpetaIdioma + '/' + carpetaOpcion + '/' + opcion + '.ogg';  
    }
        
    this.uno.load();
    this.uno.play();
  }

  public Diccionario(): Array<ImagenBoton> {
    this.cargarDiccionarios();
    return this.vectorGeneral[this.indiceOpcion];
  }

  announceMission(mission: number) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: number) {
    this.indiceIdioma = astronaut;
    this.missionConfirmedSource.next(astronaut);

  }

  confirmarOpcion(opcion: number) {
    this.indiceOpcion = opcion;
    this.misionOpciones.next(opcion);
  }

  Mission(astronaut: number) {
    this.missionConfirmedSource.next(astronaut);
  }

  public cargarDiccionarios() {

    this.diccionarioColores.push(this.botonAzul);
    this.diccionarioColores.push(this.botonVerde);
    this.diccionarioColores.push(this.botonAmarillo);
    this.diccionarioColores.push(this.botonRojo);
    this.diccionarioColores.push(this.botonLila);

    this.diccionarioAnimales.push(this.botonAnimalUno);
    this.diccionarioAnimales.push(this.botonAnimalDos);
    this.diccionarioAnimales.push(this.botonAnimalTres);
    this.diccionarioAnimales.push(this.botonAnimalCuatro);
    this.diccionarioAnimales.push(this.botonAnimalCinco);

    this.diccionarioNumeros.push(this.botonUno);
    this.diccionarioNumeros.push(this.botonDos);
    this.diccionarioNumeros.push(this.botonTres);
    this.diccionarioNumeros.push(this.botonCuatro);
    this.diccionarioNumeros.push(this.botonCinco);

    this.vectorGeneral.push(this.diccionarioColores);
    this.vectorGeneral.push(this.diccionarioNumeros);
    this.vectorGeneral.push(this.diccionarioAnimales);

  }


}
