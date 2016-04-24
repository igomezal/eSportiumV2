import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Component} from 'angular2/core';

@Component({
  selector:'juegointerface'
})

export class Juego {
  constructor (
    public nombre: string,
    public id: string
  ){}
}

@Injectable()
export class JuegoService{

constructor(){}

  private juegos =[
    new Juego('League of Legends','lol'),
    new Juego('Counter Strike: GO', 'cs'),
    new Juego('Call of Duty: BO3','cod'),
  ];

  getJuegos(){
    return withObserver(this.juegos);
  }
}
