import {Component,Injectable} from 'angular2/core';
import {Usuario,UsuarioService} from './usuario.interface';
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
  selector: 'profile',
  templateUrl: 'app/profile.component.html',
  providers:[UsuarioService],
  directives: [ROUTER_DIRECTIVES]
})

export class Perfil {
  usuario:Usuario;
  constructor (private _Usuarioservice: UsuarioService){}

  ngOnInit(){
    this._Usuarioservice.getUsuario().subscribe(
      usuario => this.usuario = usuario,
      error => console.log(error)
    );
  }   


}
