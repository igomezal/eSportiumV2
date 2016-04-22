import {Component,Injectable} from 'angular2/core';
import {Usuario,UsuarioService} from './usuario.interface';

@Component({
  selector: 'profile',
  templateUrl: 'app/profile.component.html',
  providers:[UsuarioService]
})

export class Perfil {
  usuario = Usuario;
  constructor (private _Usuarioservice: UsuarioService){}

  /*ngOnInit(){
    this._Usuarioservice.getUsuario().subscribe(
      usuario => this.usuario = usuario,
      error => console.log(error)
    );
  }*/
}
