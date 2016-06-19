import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Equipo} from './equipo.interface';


export class Jugador{

  constructor(
    public nombre:string,
    public posicion: string,
    public kda: number,
    public equipo:Equipo
  ) {}

}

@Injectable()
export class JugadorService {

  getJugadores() {
    
  }

}
