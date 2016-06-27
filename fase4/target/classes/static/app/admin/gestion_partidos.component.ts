import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Partido, PartidoService} from '../partido.service';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector:'gestionPartidos',
  templateUrl: 'app/admin/gestion_partidos.html'
})

export class gestionPartidosComponent {

  constructor(private _UsuarioService: UsuarioService, private _Partidoservice:PartidoService, private _Router: Router){}

  private partidos: Partido[];

  ngOnInit(){
    this._Partidoservice.getPartidos().subscribe(
      partidos => this.partidos = partidos,
      error => console.log(error)
    );
  }

  gotoHome(){
    this._Router.navigate(['Admin']);
  }

  gotoGestionJuegos(){
    this._Router.navigate(['GestionJuegos']);
  }

  gotoGestionPartidos(){
    this._Router.navigate(['GestionPartidos']);
  }

  gotoGestionUsuarios(){
    this._Router.navigate(['GestionUsuarios']);
  }

  gotoAjustes(){
    this._Router.navigate(['Ajustes']);
  }

  gotoMain(){
    this._Router.navigate(['Inicio']);
  }

  cerrarSesion(){
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

  gotoEditPartido(partido: Partido){
    let link = ['EditarPartido',{id: partido.id}];
    this._Router.navigate(link);
  }

  gotoAddPartido(){
    this._Router.navigate(['AddPartido']);
  }

  finalizarPartido(partido: Partido){
    this._Partidoservice.terminarPartido(partido).subscribe(
      response => this.refresh(),
      error => console.log(error)
    );
  }

  aDirecto(partido:Partido){
    this._Partidoservice.pasarADirecto(partido).subscribe(
      response => this.refresh(),
      error => console.log(error)
    );
  }

  borrarPartido(partido: Partido){
    this._Partidoservice.eliminarPartido(partido.id).subscribe(
      response => this.refresh(),
      error => console.log(error)
    );
  }

  private refresh(){
    this._Partidoservice.getPartidos().subscribe(
      partidos => this.partidos = partidos,
      error => console.log(error)
    );
  }

}
