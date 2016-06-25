import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'adminhome',
  templateUrl: 'app/admin/home.html'
})

export class homeComponent{

  constructor(private _UsuarioService: UsuarioService, private _Router:Router){}

  gotoHome(){
    this._Router.navigate(['Admin']);
  }

  gotoGestionJuegos(){
    this._Router.navigate(['GestionJuegos']);
  }

  gotoGestionEquipos(){
    this._Router.navigate(['GestionEquipos']);
  }

  gotoGestionJugadores() {
    this._Router.navigate(['GestionJugadores']);
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

}
