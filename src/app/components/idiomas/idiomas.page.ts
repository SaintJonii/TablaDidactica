import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { miIcono } from '../Modules/milcono';
import {IconosService}  from '../servicios/iconos.service';
import { MissionService }     from '../servicios/mission.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.page.html',
  styleUrls: ['./idiomas.page.scss'],
})
export class IdiomasPage implements OnInit {

  lista: Array<miIcono> = new Array<miIcono>();


  constructor(private router: Router, private servicioIconos:IconosService, private missionService: MissionService) {
    this.lista = this.servicioIconos.Idiomas();
  }

  ngOnInit() {
  }

  reaccion(item)
  {
    this.missionService.confirmMission(item.id);
    this.router.navigate(['/home']);
  }
 

}
