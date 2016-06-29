import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Partido, PartidoService} from '../partido.service';
import {RouteParams} from 'angular2/router';
import {Juego, JuegoService} from '../juego.interface';
import {Equipo,EquipoService} from '../equipo.interface';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector:' editPartido',
  templateUrl: 'app/admin/edit_partido.html'
})

export class editPartidoComponent{

  constructor(private _UsuarioService: UsuarioService ,private _Router: Router ,private _Partidoservice: PartidoService,
    private _JuegoService: JuegoService, private _routeParams: RouteParams, private _EquipoService:EquipoService){}

  private partido: Partido;
  private equipo1N = 0;
  private juegoN = 0;
  private equipo2N = 0;

  private equipos: Equipo[];
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
    this._EquipoService.getEquipos().subscribe(
      equipos => this.equipos = equipos,
      error => console.log(error)
    );
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

  editar(porcen1:string, porcen2:string, url: string, rondas: string, estado: string){
    if(this.juegoN == 0 || this.equipo1N == 0 || this.equipo2N == 0 || porcen1 == "" || porcen2 =="" || url == "" || rondas == "" || estado ==""){
      alert("Datos incorrectos");
    }else{
      let id = +this._routeParams.get('id');
      this._Partidoservice.editarPartido(id,this.juegoN, this.equipo1N, porcen1, this.equipo2N, porcen2, url, rondas, estado).subscribe(
        response => alert("Partido editado")
      );
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

}
