import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Partido} from './partido.service';

export class Usuario {

  constructor(
    public id: number,
    public name: string,
    public fecha: any,
    public genero: string,
    public apuestas: number[], //esto se obtendra de los ids de los partdos de la BDD
    public finalizados : number[], //esto se obtendra de los ids de los partdos de la BDD
    public karma: number,
    public foto: string,
    public clave: string,
    public correo: string
  ){}

}


@Injectable()
export class UsuarioService{
  private apuestas = [1,2,3];
  private finalizados = [1,2,3];
  private usuario:Usuario[] = [new Usuario (0,'Don Benito Camela',new Date('December 25, 1995 23:15:30'),'Masculino', this.apuestas,this.finalizados,600,'icon-profile.png','1234','falso@falso.es')];

  getUsuario(){
    return withObserver(this.usuario[0]);
  }
  
  addUsuario(nombre:string,correo:string, genero:string , clave: string){ //Revisar para usar observadores?
    let id = this.usuario.length
    let today = Date.now();
    let user = new Usuario(id,nombre,today,genero,[],[],6000,'icon-profile.png',clave,correo);
    this.usuario.push(user);
  }
  
  getUsuarios(){
    return withObserver(this.usuario);
  }
}
