import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Partido, PartidoService} from '../partido.service';
import {RouteParams} from 'angular2/router';
import {Juego, JuegoService} from '../juego.interface';
import {Equipo} from '../equipo.interface';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector:' editPartido',
  templateUrl: 'app/admin/edit_partido.html'
})

export class editPartidoComponent{

  constructor(private _UsuarioService: UsuarioService ,private _Router: Router ,private _Partidoservice: PartidoService,private _JuegoService: JuegoService, private _routeParams: RouteParams){}

  private partido: Partido;

  private juegos: Juego[];

  ngOnInit(){
    let id = +this._routeParams.get('id');
    this._Partidoservice.getPartido(id).subscribe(
      partido => this.partido = partido,
      error => console.log(error)
    );
    this._JuegoService.getJuegos().subscribe(
      juegos => this.juegos = juegos,
      error => console.log(error)
    );
  }

  editar(juego:Juego, eq1: Equipo, logo1:string, porcen1:string, eq2: Equipo, logo2:string, porcen2:string, url: string, rondas: string, estado: string){
    if( juego == null || eq1 == null || logo1 == "" || porcen1 == "" ||eq2 == null || logo2 == "" || porcen2 =="" || url == "" || rondas == "" || estado ==""){
      alert("Datos incorrectos");
    }else{
      let id = +this._routeParams.get('id');
      this._Partidoservice.editarPartido(id,juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, rondas, estado)
    }
  }

  eliminar(){
    let id = +this._routeParams.get('id');
    this._Partidoservice.eliminarPartido(id);
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
