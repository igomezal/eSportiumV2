import {Component} from 'angular2/core';
import {Equipo} from '../equipo.interface';
import {Jugador, JugadorService} from '../jugador.interface';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'gestionJugadores',
  templateUrl: 'app/admin/gestion_jugadores.html',
  directives: [ROUTER_DIRECTIVES]
})

export class gestionJugadoresComponent {

  constructor(private _UsuarioService: UsuarioService, private _JugadorService: JugadorService, private _Router: Router) { }

  private jugadores: Jugador[] = [];

  ngOnInit() {
    this._JugadorService.getJugadores().subscribe(
      jugador => this.jugadores = jugador,
      error => console.log(error)
    );
  }

  private refresh() {
    this._JugadorService.getJugadores().subscribe(
      jugador => this.jugadores = jugador,
      error => console.log(error)
    );
  }

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

  gotoEditJugador(jugador: Jugador) {
    let link = ['EditarJugador', { id: jugador.id }]
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

  gotoaddJugador() {
    this._Router.navigate(['AddJugador']);
  }

  borrarJugador(jugador: Jugador) {
    this._JugadorService.eliminar(jugador.id).subscribe(
      respuesta => this.refresh(),
      error => console.log(error)
    );
  }

}
