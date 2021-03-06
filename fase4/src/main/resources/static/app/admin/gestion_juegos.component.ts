import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'gestionJuegos',
  templateUrl: 'app/admin/gestion_juegos.html',
  directives: [ROUTER_DIRECTIVES]
})

export class gestionJuegosComponent {

  constructor(private _UsuarioService: UsuarioService, private _JuegoService: JuegoService, private _Router: Router){}

  private juegos:Juego[] = [];

  ngOnInit(){
    this._JuegoService.getJuegos().subscribe(
      juegos => this.juegos = juegos,
      error => console.log(error)
    );
  }

  private refresh(){
    this._JuegoService.getJuegos().subscribe(
      juegos => this.juegos = juegos,
      error => console.log(error)
    )
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

  gotoMain(){
    this._Router.navigate(['Inicio']);
  }

  cerrarSesion(){
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

  gotoEditJuego(juego: Juego){
    let link = ['EditarJuego', {id: juego.id}];
    this._Router.navigate(link);
  }

  gotoaddJuego(){
    this._Router.navigate(['AddJuego']);
  }

  borrarJuego(juego: Juego){
    this._JuegoService.eliminar(juego.id, juego.nombre, juego.siglas).subscribe(
      respuesta => this.refresh(),
      error => alert("Error al borrar")
    );
  }

}
