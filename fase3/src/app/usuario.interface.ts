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
    public correo: string,
    public admin: boolean
  ){}

}


@Injectable()
export class UsuarioService{
  private apuestas = [1,2,3];
  private finalizados = [1,2,3];
  private sesion:Usuario;
  private usuario:Usuario[] = [new Usuario (0,'yeah',new Date('December 25, 1995 23:15:30'),'Masculino', this.apuestas,this.finalizados,600,'icon-profile.png','1234','falso@falso.es',false),
  new Usuario (0,'administrator',new Date('December 25, 1995 23:15:30'),'Masculino', this.apuestas,this.finalizados,600,'icon-profile.png','administrator','falso@falso.es',true)];
  private admin:boolean = false;
  
  getUsuario(){
    return withObserver(this.usuario[0]);
  }
  
  addUsuario(nombre:string,correo:string, genero:string , clave: string){
    let id = this.usuario.length
    let today = Date.now();
    let user = new Usuario(id,nombre,today,genero,[],[],6000,'icon-profile.png',clave,correo,false);
    this.usuario.push(user);
    return withObserver(user);
  }
  
  getUsuarios(){
    return withObserver(this.usuario);
  }
  
  getSesion(){
    console.log(this.sesion);
    return withObserver(this.sesion);
  }
  
  login(nombre:string, clave:string){
    var user:Usuario;
    for(var i=0; i < this.usuario.length; i++) {
        if(this.usuario[i].name === nombre){
          user = this.usuario[i];
        }
    }
    if(user.clave === clave){
      this.sesion = user;
      this.admin = user.admin;
    }else{
      console.log("Usuario/Contraseña incorrecta");
    }
    
    return withObserver(this.sesion);
  }
  
  getAdmin(){
    return withObserver(this.admin);
  }
  
  
}
