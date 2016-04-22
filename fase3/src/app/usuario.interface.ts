import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Partido} from './partido.service';

export class Usuario {

  constructor(
    public id: number,
    public name: string,
    public fecha: string,
    public genero: string,
    public apuestas: number[], //esto se obtendra de los ids de los partdos de la BDD
    public finalizados : number[], //esto se obtendra de los ids de los partdos de la BDD
    public karma: number,
    public foto: string
  ){}

}


@Injectable()
export class UsuarioService{
  private apuestas = [1,2,3];
  private finalizados = [1,2,3];
  private usuario = new Usuario (1,'Don Benito Camela','24/02/1990','hombre', this.apuestas,this.finalizados,600,'icon-profile.png');

  getUsuario(){
    return withObserver(this.usuario);
  }
}
