import {Component} from 'angular2/core';
import {Equipo, EquipoService} from '../equipo.interface';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'gestionEquipos',
  templateUrl: 'app/admin/gestion_equipos.html',
  directives: [ROUTER_DIRECTIVES]
})

export class gestionEquiposComponent {

  constructor(private _UsuarioService: UsuarioService, private _EquipoService: EquipoService, private _Router: Router) { }

  private equipos: Equipo[] = [];

  ngOnInit() {
    this._EquipoService.getEquipos().subscribe(
      equipos=> this.equipos = equipos,
      error => console.log(error)
    );
  }

  private refresh() {
    this._EquipoService.getEquipos().subscribe(
      equipos => this.equipos = equipos,
      error => console.log(error)
    )
  }

  gotoHome() {
    this._Router.navigate(['Admin']);
  }

  gotoGestionEquipos() {
    this._Router.navigate(['GestionEquipos']);
  }

  gotoGestionJuegos() {
    this._Router.navigate(['GestionJuegos']);
  }

  gotoGestionPartidos() {
    this._Router.navigate(['GestionPartidos']);
  }

  gotoGestionUsuarios() {
    this._Router.navigate(['GestionUsuarios']);
  }

  gotoAjustes() {
    this._Router.navigate(['Ajustes']);
  }

  gotoEditEquipo(equipo: Equipo) {
    let link = ['EditarEquipo', { id: equipo.id }]
    this._Router.navigate(link);
  }

  gotoMain() {
    this._Router.navigate(['Inicio']);
  }

  cerrarSesion() {
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

  gotoaddEquipo() {
    this._Router.navigate(['AddEquipo']);
  }

  borrarEquipo(equipo: Equipo) {
    this._EquipoService.eliminar(equipo.id).subscribe(
      respuesta =>  this.refresh(),
      error => console.log(error)
    );
  }

}