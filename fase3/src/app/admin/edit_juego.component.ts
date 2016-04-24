import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface';
import {RouteParams} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';

@Component({
  selector: 'editJuego',
  templateUrl: 'app/admin/edit_juego.html'
})

export class editJuegoComponent {

  constructor( private _JuegoService: JuegoService, private _routeParams:RouteParams, private _router:Router){}

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
    this._router.navigate(['GestionJuegos']);
  }

}
