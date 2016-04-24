import {Component} from 'angular2/core';
import {Juego, JuegoService} from '../juego.interface'

@Component({
  selector: 'gestionJuegos',
  templateUrl: 'app/admin/gestion_juegos.html'
})

export class gestionJuegosComponent {

  constructor( private _JuegoService: JuegoService){}

  private juegos:Juego[];

  ngOnInit(){
    this._JuegoService.getJuegos().subscribe(
      juegos => this.juegos = juegos,
      error => console.log(error)
    )
  }

}
