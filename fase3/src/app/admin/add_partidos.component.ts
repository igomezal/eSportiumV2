import {Component} from 'angular2/core';
import {Partido, PartidoService} from '../partido.service';
import {Juego, JuegoService} from '../juego.interface';

@Component({
  selector: 'addPartido',
  templateUrl: 'app/admin/add_partidos.html'
})

export class addPartidoComponent{

  constructor(private _PartidoService: PartidoService, private _JuegoService: JuegoService){}

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
}
