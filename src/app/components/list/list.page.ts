import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { miIcono } from '../Modules/milcono';
import { IconosService } from '../servicios/iconos.service';
import { MissionService } from '../servicios/mission.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  lista: Array<miIcono> = new Array<miIcono>();

  // public selectedItem: any;

  constructor(private router: Router, private servicioIconos: IconosService, private missionService: MissionService) {
    this.lista = this.servicioIconos.Opciones();
  }

  ngOnInit() {
  }
 
  reaccion(item) {
    this.missionService.confirmarOpcion(item.id);
    this.router.navigate(['/home']);
  }

  // informarOpcion(opcion: any) {
  //   this.missionService.confirmarOpcion(opcion);
  //   this.router.navigate(['home']);
  // }
}
