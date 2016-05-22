import {Component} from 'angular2/core';
import {Partido, PartidoService} from '../partido.service';
import {Juego, JuegoService} from '../juego.interface';
import {Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'addPartido',
  templateUrl: 'app/admin/add_partidos.html'
})

export class addPartidoComponent{

  constructor(private _UsuarioService: UsuarioService ,private _PartidoService: PartidoService, private _JuegoService: JuegoService, private _Router: Router){}

  private juegos: Juego[];

  ngOnInit(){
    this._JuegoService.getJuegos().subscribe(
      juegos => this.juegos = juegos,
      error => console.log(error)
    );
  }

  anadirP(juego:string, eq1: string, logo1:string, porcen1:string, eq2: string, logo2:string, porcen2:string, url: string, condicion: string, estado: string){ //Faltaría lo de jugadores de cada equipo)
    if( juego == "" || eq1 == "" || logo1 == "" || porcen1 == "" ||eq2 == "" || logo2 == "" || porcen2 =="" || url == "" || condicion == "" || estado ==""){
      alert("Datos incorrectos");
    }else{
      this._PartidoService.anadirPartido(juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, condicion, estado);
      alert("Partido creado correctamente");
    }

  }
  gotoMain(){
    this._Router.navigate(['Inicio']);
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

  cerrarSesion(){
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }
}
