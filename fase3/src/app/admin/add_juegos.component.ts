import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface';
import {Router} from 'angular2/router';

@Component({
  selector: 'addjuegos',
  templateUrl: 'app/admin/add_juegos.html'
})

export class addJuegoComponent {

  constructor(private _JuegoService: JuegoService, private _Router: Router) {}

  anadir(nombre: string, id: string){
    if( nombre == "" || id == ""){
      alert("Datos incorrectos");
    }else{
      let j = new Juego(nombre, id);
      this._JuegoService.anadirJuego(j);
      alert("Juego "+j.nombre+ " creado correctamente");
    }
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
    this._Router.navigate(['gotoGestionUsuarios']);
  }

  gotoAjustes(){
    this._Router.navigate(['Ajustes']);
  }

}
