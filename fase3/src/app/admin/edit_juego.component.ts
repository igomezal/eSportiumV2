import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface';
import {RouteParams} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'editJuego',
  templateUrl: 'app/admin/edit_juego.html'
})

export class editJuegoComponent {

  constructor(private _UsuarioService: UsuarioService ,private _JuegoService: JuegoService, private _routeParams:RouteParams, private _Router:Router){}

  private juego:Juego;

  ngOnInit(){
    let id = this._routeParams.get('id');
    this._JuegoService.getJuego(id).subscribe(
      juego => this.juego = juego,
      error => console.log(error)
    );
  }

  editar(nombre: string, id: string){
    if(nombre == "" || id == ""){
      alert("Datos incorrectos");
    }else{
      this._JuegoService.editar(this.juego.id, nombre, id);
      this.goToJuegos();
      }
    }

  eliminar(nombre: string, id: string){
    if(nombre == "" || id == ""){
      alert("Datos incorrectos");
    }else{
      this._JuegoService.eliminar(nombre, id);
      this.goToJuegos();
    }
  }

  goToJuegos(){
    this._Router.navigate(['GestionJuegos']);
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

}
