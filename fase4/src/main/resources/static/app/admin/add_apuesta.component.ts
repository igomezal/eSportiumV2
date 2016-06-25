import {Component} from 'angular2/core';
import {Equipo, EquipoService} from '../equipo.interface';
import {Jugador, JugadorService} from '../jugador.interface';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsuarioService, Usuario} from '../usuario.interface';
import {Apuesta, ApuestaService} from '../apuesta.interface';
import {ApuestaUserService} from '../apuestaUser.interface';
import {Partido} from '../partido.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'anadirApuesta',
  //templateUrl: 'app/admin/add_jugador.html',
  directives: [ROUTER_DIRECTIVES]
})

export class addApuestaComponent {

  constructor(private _UsuarioService: UsuarioService, private _Router: Router, private _ApuestaService:ApuestaService, private _ApuestaUserService: ApuestaUserService, private _LoginService: LoginService) { }

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

  anadirAp(partido: Partido, equipo: Equipo, karma: string) {
    console.log(partido,equipo,karma);
    if (karma == "" || karma == "0") {
      alert("Es necesario apostar una cantidad minima de karma")
    }else{
      this._ApuestaService.anadirApuesta(partido,equipo,karma).subscribe(
        response => { alert("Apostado "+ karma +" karma al equipo "+equipo.nombre);}
      );
      this._ApuestaUserService.anadirApuestaUser({ id: null, partido, equipo, karma },this._LoginService.user);
    }
  }

  ngAfterContentInit() {
    var e1 = document.createElement("script");
    e1.type = "text/javascript";
    e1.src = "js/select2.min.js";
    document.head.appendChild(e1);

    var e1 = document.createElement("script");
    e1.type = "text/javascript";
    e1.src = "js/jS.js";
    document.head.appendChild(e1);
  }
}
