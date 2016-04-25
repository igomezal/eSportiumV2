import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';


export class Jugador{

  constructor(
    public nombre:string,
    public posicion: string,
    public kda: number
  ) {}

}

@Injectable()
export class JugadorService {

  private jugs = [
    new Jugador('Jug1','mid',1.5),
    new Jugador('Jug2','top',2.5),
    new Jugador('Jug3','noidea',3.5),
    new Jugador('Jug4','feed',0.0)
  ];

  getJugadores() {
    return withObserver(this.jugs);
  }

}
