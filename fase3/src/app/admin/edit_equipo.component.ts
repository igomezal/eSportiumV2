import {Component} from 'angular2/core';
import {Equipo, EquipoService} from '../equipo.interface';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'editEquipo',
  templateUrl: 'app/admin/edit_equipo.html'
})

export class editEquipoComponent {

  constructor(private _UsuarioService: UsuarioService, private _EquipoService: EquipoService, private _routeParams: RouteParams, private _Router: Router) { }

  private equipo:Equipo;

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._EquipoService.getEquipo(id).subscribe(
      equipo => this.equipo = equipo,
      error => console.log(Error)
    );
  }

  editar(nombre: string, logo: string) {
    if (nombre == "" || logo == "") {
      alert("Datos incorrectos");
    } else {
      this._EquipoService.editar(this.equipo.id, nombre, logo).subscribe(
        respuesta => alert("Equipo editado correctamente")
      );
      this.gotoGestionEquipos();;
      this.gotoGestionEquipos();
    }
  }

  eliminar(id: number) {
      this._EquipoService.eliminar(id).subscribe(
        response => alert('Se ha eliminado el equipo seleccionado.'),
        error => console.log(error)
      );
      this.gotoGestionEquipos();
  }

  goToJuegos() {
    this._Router.navigate(['GestionJuegos']);
  }

  gotoHome() {
    this._Router.navigate(['Admin']);
  }

  gotoGestionJuegos() {
    this._Router.navigate(['GestionJuegos']);
  }

  gotoGestionPartidos() {
    this._Router.navigate(['GestionPartidos']);
  }

  gotoGestionEquipos() {
    this._Router.navigate(['GestionEquipos']);
  }

  gotoGestionUsuarios() {
    this._Router.navigate(['GestionUsuarios']);
  }

  gotoAjustes() {
    this._Router.navigate(['Ajustes']);
  }

  gotoMain() {
    this._Router.navigate(['Inicio']);
  }

  cerrarSesion() {
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

}
