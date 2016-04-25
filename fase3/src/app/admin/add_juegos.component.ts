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

  anadir(nombre: string, id: string){
    if( nombre == "" || id == ""){
      alert("Datos incorrectos");
    }else{
      let j = new Juego(nombre, id);
      this._JuegoService.anadirJuego(j);
      alert("Juego "+j.nombre+ " creado correctamente");
    }
  }

  cerrarSesion(){
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

  gotoMain(){
    this._Router.navigate(['Inicio']);
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

}
