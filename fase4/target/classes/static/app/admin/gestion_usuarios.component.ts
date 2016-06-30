import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Usuario, UsuarioService} from '../usuario.interface';
import {LoginService} from '../login.service';

@Component({
  selector: 'gestionUsuarios',
  templateUrl: 'app/admin/gestion_usuarios.html'
})

export class gestionUsuariosComponent {

  constructor(private _UsuarioService: UsuarioService, private _LoginService: LoginService, private _Router: Router){}

  private usuarios: Usuario[];

  ngOnInit(){
    this._UsuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios,
      error => console.log(error)
    );
  }

  refresh(){
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

  gotoGestionEquipos(){
    this._Router.navigate(['GestionEquipos']);
  }

  gotoGestionJugadores() {
    this._Router.navigate(['GestionJugadores']);
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
    this._UsuarioService.eliminarUsuario(usuario.id).subscribe(
        response => undefined,
        error => alert("Error al borrar")
    );
  }

  hacerAdmin(usuario: Usuario){
    var r = confirm("¿Quieres hacer Administrador a este usuario?");
    if(r == true){
      console.log(usuario);
      this._UsuarioService.doAdmin(usuario).subscribe(
        response => alert("Privilegios actualizados"),
        error => {console.log(error);
        alert("Este usuario no existe o ya es Administrador");}
      );
    }
  }

  nuevokarma(){
    this._UsuarioService.nuevokarma().subscribe(
      response => { this._LoginService.refresh().subscribe(
                      response => console.log("Actualizado loginService")
                    );
                    this.refresh();
                    alert("A todos los usuarios se les ha añadido 2000 puntos de karma");},
      error    => {console.log(error); 
                   alert("No se ha podido realizar la operación con exito");
                  }
    );
  }

}
