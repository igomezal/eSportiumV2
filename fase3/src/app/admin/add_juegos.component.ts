import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface'

@Component({
  selector: 'addjuegos',
  templateUrl: 'app/admin/add_juegos.html'
})

export class addJuegoComponent {

  constructor(private _JuegoService: JuegoService) {}

  anadir(nombre: string, id: string){
    if( nombre == "" || id == ""){
      alert("Datos incorrectos");
    }else{
      let j = new Juego(nombre, id);
      this._JuegoService.anadirJuego(j);
      alert("Juego "+j.nombre+ " creado correctamente");
    }
  }

}
