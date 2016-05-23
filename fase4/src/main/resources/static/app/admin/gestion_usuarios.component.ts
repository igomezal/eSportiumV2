import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Usuario, UsuarioService} from '../usuario.interface';

@Component({
  selector: 'gestionUsuarios',
  templateUrl: 'app/admin/gestion_usuarios.html'
})

export class gestionUsuariosComponent {

  constructor(private _UsuarioService: UsuarioService, private _Router: Router){}

  private usuarios: Usuario[];

  ngOnInit(){
    this._UsuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios,
      error => console.log(error)
    );
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

  gotoMain(){
    this._Router.navigate(['Inicio']);
  }

  cerrarSesion(){
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

  gotoEditUsuario(usuario: Usuario){
    let link = ['EditUsuario',{id: usuario.id}];
    this._Router.navigate(link);
  }

  borrarUsuario(usuario: Usuario){
    this._UsuarioService.eliminarUsuario(usuario.id);
  }

}
