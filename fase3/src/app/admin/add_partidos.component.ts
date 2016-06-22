import {Component} from 'angular2/core';
import {Partido, PartidoService} from '../partido.service';
import {Juego, JuegoService} from '../juego.interface';
import {Router} from 'angular2/router';
import {Equipo, EquipoService} from '../equipo.interface';
import {UsuarioService} from '../usuario.interface';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import 'rxjs/Rx';

@Component({
  selector: 'addPartido',
  templateUrl: 'app/admin/add_partidos.html'
})

export class addPartidoComponent{

  constructor(private _UsuarioService: UsuarioService ,private _PartidoService: PartidoService, private _JuegoService: JuegoService, private _Router: Router, private _EquipoService: EquipoService){}

  private juegos: Juego[];
  private equipos: Equipo[];
  private juegoN = 0;
  private equipo1N = 0;
  private equipo2N = 0;

  ngOnInit(){
    this._JuegoService.getJuegos().subscribe(
      juegos => this.juegos = juegos,
      error => console.log(error)
    );
    this._EquipoService.getEquipos().subscribe(
      equipos => this.equipos = equipos,
      error => console.log(error)
    );
  }

  anadirP(logo1:string, porcen1:string, logo2:string, porcen2:string, url: string, condicion: string, estado: string){ //Faltaría lo de jugadores de cada equipo)
    if( this.juegoN == 0 || this.equipo1N == 0 || logo1 == "" || porcen1 == "" || this.equipo2N == 0 || logo2 == "" || porcen2 =="" || url == "" || condicion == "" || estado ==""){
      alert("Datos incorrectos");
    }else{
      this._PartidoService.anadirPartido(this.juegoN, this.equipo1N, porcen1, this.equipo2N, porcen2, url, condicion, estado).subscribe(
        response => alert("Partido creado correctamente"),
        error => this.manejarError(error)
      );
    }
  }

  seleccion1N(equipo1N){
    this.equipo1N = equipo1N;
    console.log(equipo1N);
  }

  seleccion2N(equipo2N){
    this.equipo2N = equipo2N;
    console.log(equipo2N);
  }

  seleccionj(juegoN){
    this.juegoN = juegoN;
    console.log(juegoN);
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

  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }
}
