import {Component,Injectable,AfterContentInit} from 'angular2/core';
import {Usuario,UsuarioService} from './usuario.interface';
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
  selector: 'profile',
  templateUrl: 'app/profile.component.html'
})

export class Perfil {
  sesion:Usuario;
  constructor (private _usuarioService: UsuarioService){}

  ngOnInit(){
    this._usuarioService.getSesion().subscribe(
      usuario =>this.sesion = usuario,
      error => console.log(error)
    );
  }
}
