import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MissionService } from '../../services/mission.service';
import {ImagenBoton} from '../../modules/ImagenBoton';
import { miIcono } from '../../modules/milcono';
import { IconosService } from '../../services/iconos.service';
// import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  diccionarioPrincipal =  Array<ImagenBoton>();
  public diccionarioImagenes = Array<ImagenBoton>();

  public categoria: number = 1;
  idiomaActual:string;
  indiceIdioma:number = 1;
  lista: Array<miIcono> = new Array<miIcono>();
  listaIdiomas: Array<miIcono> = new Array<miIcono>();
  objetoIdioma: miIcono = new miIcono(1,'Portugues', '../../assets/brasil.svg')

  constructor(private router: Router,
     private missionService: MissionService, private servicioIconos: IconosService) {

     this.listaIdiomas = this.servicioIconos.Idiomas();

     this.lista = this.servicioIconos.Opciones();
    this.diccionarioPrincipal = this.missionService.Diccionario();
    console.log(this.diccionarioPrincipal[2].nombreBoton);
    console.log(this.idiomaActual);


    missionService.missionConfirmed$.subscribe(
      astronaut => {
        console.log("En home:"+astronaut);
        this.indiceIdioma = astronaut;
        if(astronaut == 0)
        {
          this.idiomaActual = "Espaniol";
        }
        else if(astronaut == 1) {
          this.idiomaActual = "Portugues";
        }
        else{
          this.idiomaActual = "Ingles";
        }


        this.diccionarioPrincipal = this.missionService.Diccionario();
        console.log('segunda vez')
        console.log(this.diccionarioPrincipal[2].caminoImagen);

      });

      missionService.miMision$.subscribe(
        astronaut => {
          console.log("Segunda mision:"+astronaut);
          console.log('categoria');
          this.categoria = astronaut;
          console.log(this.categoria);
          this.categoria = astronaut;
          this.diccionarioPrincipal = this.missionService.Diccionario();
  
        });
  }

  reaccionIdioma(item) {

    this.objetoIdioma = item;
    this.missionService.confirmMission(item.id);
    // this.router.navigate(['/home']);
  }

  reaccionObjeto(item) {

    this.missionService.confirmarOpcion(item.id);
    // this.router.navigate(['/home']);
  }

  ngOnInit() {    
    
  }

  Accion(indice) {   
    console.log(indice);    
this.missionService.Reproducir(indice);

// this.cassettera.Reproducir(evento.toElement.id);
  }

  salir()
  {
    this.router.navigate(['/login']);
  }
}
