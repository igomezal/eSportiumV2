import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Usuario, UsuarioService} from '../usuario.interface';

@Component({
  selector: 'gestionUsuarios',
  templateUrl: 'app/admin/gestion_usuarios.html'
})

export class gestionUsuariosComponent {

  constructor(private _UsuarioService: UsuarioService){}

  private usuarios: Usuario[];

  ngOnInit(){
    this._UsuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios,
      error => console.log(error)
    );
  }

}
