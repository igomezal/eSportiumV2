import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';

@Component({
  selector: 'gestionJuegos',
  templateUrl: 'app/admin/gestion_juegos.html',
  directives: [ROUTER_DIRECTIVES]
})

export class gestionJuegosComponent {

  constructor( private _JuegoService: JuegoService, private _Router: Router){}

  private juegos:Juego[];

  ngOnInit(){
    this._JuegoService.getJuegos().subscribe(
      juegos => this.juegos = juegos,
      error => console.log(error)
    )
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
    this._Router.navigate(['gotoGestionUsuarios']);
  }

  gotoAjustes(){
    this._Router.navigate(['Ajustes']);
  }

  gotoEditJuego(juego : Juego){
    let link = ['EditarJuego',{id:juego.id}]
    this._Router.navigate(link);
  }

}
