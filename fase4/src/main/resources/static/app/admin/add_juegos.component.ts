import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface';
import {Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'addjuegos',
  templateUrl: 'app/admin/add_juegos.html'
})

export class addJuegoComponent {

  constructor(private _JuegoService: JuegoService, private _Router: Router, private _UsuarioService: UsuarioService) {}

  anadir(nombre: string, siglas: string) {
    if( nombre == "" || siglas == ""){
      alert("Datos incorrectos");
    }else{
      this._JuegoService.anadirJuego(nombre, siglas).subscribe(
        respuesta => alert("Juego " + respuesta.nombre + " creado correctamente")
      );
    }
  }

  cerrarSesion(){
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
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

}
