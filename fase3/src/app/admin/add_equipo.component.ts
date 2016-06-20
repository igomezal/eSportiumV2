import {Component} from 'angular2/core';
import {Equipo, EquipoService} from '../equipo.interface';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'anadirEquipos',
  templateUrl: 'app/admin/add_equipo.html',
  directives: [ROUTER_DIRECTIVES]
})

export class addEquipoComponent {

  constructor(private _UsuarioService: UsuarioService, private _EquipoService: EquipoService, private _Router: Router) { }

  gotoHome() {
    this._Router.navigate(['Admin']);
  }

  gotoGestionEquipos() {
    this._Router.navigate(['GestionEquipos']);
  }

  gotoGestionJugadores() {
    this._Router.navigate(['GestionJugadores']);
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

  gotoMain() {
    this._Router.navigate(['Inicio']);
  }

  cerrarSesion() {
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

  anadir(nombre:string, logo:string){
    this._EquipoService.anadirEquipo(nombre, logo).subscribe(
      response => { alert("Añadido equipo " + nombre); this.gotoGestionEquipos(); }
    );
  }
}