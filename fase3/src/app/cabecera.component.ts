import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'cabecera',
  templateUrl: 'app/cabecera.component.html' //Por qué tengo que poner app/header.. ??? header.ts y header.html están a la misma altura
})

export class CabeceraComponent{

  constructor(private _router:Router){

  }

  goToInicio(){
    this._router.navigate(['Inicio']);
  }

  goToFinalizados(){
    this._router.navigate(['Finalizados']);
  }

  goToRegistro(){
    this._router.navigate(['Registro']);
  }

  goToUsuario(){
    this._router.navigate(['Perfil']);
  }

}
