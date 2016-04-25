import {Component} from 'angular2/core';
import {Usuario, UsuarioService} from '../usuario.interface';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'editUsuario',
  templateUrl: 'app/admin/edit_usuario.html'
})

export class editUsuarioComponent {

  constructor( private _UsuarioService: UsuarioService, private _Router: Router, private _RouteParams: RouteParams){}

  private usuario: Usuario;

  ngOnInit(){
    let id = +this._RouteParams.get('id');
    this._UsuarioService.getUsuarioporId(id).subscribe(
      usuario => this.usuario = usuario,
      error => console.log(error)
    );
  }

  eliminar(){
    var r = confirm("¿Quierres borrar el partido?");
    if (r == true){
      let id = +this._RouteParams.get('id');
      this._UsuarioService.eliminarUsuario(id);
      this.gotoUsuarios();
    }else{
      alert("Casi la lias");
    }
  }

  gotoUsuarios(){
    this._Router.navigate(['GestionUsuarios']);
  }

}
