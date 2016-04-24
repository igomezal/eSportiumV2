import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Partido, PartidoService} from '../partido.service';

@Component({
  selector:'gestionPartidos',
  templateUrl: 'app/admin/gestion_partidos.html'
})

export class gestionPartidosComponent {

  constructor(private _Partidoservice:PartidoService){}

  private partidos: Partido[];

  ngOnInit(){
    this._Partidoservice.getPartidos().subscribe(
      partidos => this.partidos = partidos,
      error => console.log(error)
    );
  }

  

}
