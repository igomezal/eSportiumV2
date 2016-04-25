import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Partido, PartidoService} from '../partido.service';
import {RouteParams} from 'angular2/router';
import {Juego, JuegoService} from '../juego.interface';

@Component({
  selector:' editPartido',
  templateUrl: 'app/admin/edit_partido.html'
})

export class editPartidoComponent{

  constructor( private _Partidoservice: PartidoService,private _JuegoService: JuegoService, private _routeParams: RouteParams){}

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

  editar(juego:string, eq1: string, logo1:string, porcen1:string, eq2: string, logo2:string, porcen2:string, url: string, rondas: string, estado: string){
    if( juego == "" || eq1 == "" || logo1 == "" || porcen1 == "" ||eq2 == "" || logo2 == "" || porcen2 =="" || url == "" || rondas == "" || estado ==""){
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

}
