import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';

@Component({
  selector: 'adminhome',
  templateUrl: 'app/admin/home.html'
})

export class homeComponent{

  constructor(private _Router:Router){}

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
