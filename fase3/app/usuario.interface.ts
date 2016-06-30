import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Partido} from './partido.service';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import 'rxjs/Rx';

export class Usuario {

  constructor(
    public id: number,
    public name: string,
    public fecha: any,
    public genero: string,
    public apuestas: {id:number,karma:number}[], //esto se obtendra de los ids de los partdos de la BDD
    public finalizados : {id:number,karma:number}[], //esto se obtendra de los ids de los partdos de la BDD
    public karma: number,
    public foto: string,
    public clave: string,
    public correo: string,
    public admin: boolean,
    public roles: string[]
  ){}

}


@Injectable()
export class UsuarioService{
  private apuestas = [{"id":1,"karma":200},{"id":2,"karma":200},{"id":3,"karma":200}];
  private finalizados = [{"id":1,"karma":200},{"id":2,"karma":200},{"id":3,"karma":200}];
  private sesion:Usuario;
  private usuario : Usuario[];
  /*private usuario:Usuario[] = [new Usuario (0,'yeah',new Date('December 25, 1995 23:15:30'),'Masculino', this.apuestas,this.finalizados,600,'icon-profile.png','1234','falso@falso.es',false),
  new Usuario (1,'administrator',new Date('December 25, 1995 23:15:30'),'Masculino', this.apuestas,this.finalizados,600,'icon-profile.png','administrator','falso@falso.es',true)];
  */private admin:boolean = false;

  constructor( private http: Http){}

  getUsuarios(){
    let url ="https://localhost:8443/usuarios/";
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  getUsuario(id: number){
    let url ="https://localhost:8443/usuarios/"+id;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
    }

  addUsuario(name:string,correo:string, genero:string , password: string){
    let url = "https://localhost:8443/usuarios/"
    let item = {id: null, name, correo, genero, estaeslacont: password, karma:5000, roles:["ROLE_USER"]};
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
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
    }if( user == undefined){
      alert("Error, usuario o contraseña incorrectos");
    }else{
      if(user.clave === clave){
        this.sesion = user;
        this.admin = user.admin;
      }else{
        console.log("Usuario/Contraseña incorrecta");
      }

      return withObserver(this.sesion);
    }
}

  getAdmin(){
    return withObserver(this.admin);
  }

  setAdmin(admin:boolean){
    this.admin = admin;
    return withObserver(this.admin);
  }

  setSesion(sesion:Usuario){
    this.sesion = sesion;
    return withObserver(this.sesion);
  }

  apostar(partido:Partido,apuesta:number){
    let url ="https://localhost:8443/apuestas/";
    let item = {id: null, partido, karma: apuesta}; // Como pongo el equipo????
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));

    //Ahora se hace la petición a la tabla de Relación ApuestaUser

    let url2 = "https://localhost:8443/apuestaUser/";
    let item2 = {id: null, partido, }; // Cómo paso el usuario?? importo el loginService y loginService.user
  }

  quitarKarma(user : Usuario, karma: number){
    let url ="https://localhost:8443/usuarios/"+user.id;
    let item = {id: user.id, name: user.name, karma: (user.karma-karma), fecha: user.fecha, foto: user.foto, genero:user.genero, correo: user.correo };
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options = new RequestOptions({headers});
     return this.http.put(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  cobrarKarma(user : Usuario, karma: number){
    let url ="https://localhost:8443/usuarios/actKarma/"+user.id;
    let item = {id: user.id, name: user.name, karma: (user.karma+(2*karma)), fecha: user.fecha, foto: user.foto, genero:user.genero, correo: user.correo };
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options = new RequestOptions({headers});
     return this.http.put(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }


  editarDatos(user: Usuario, nombre: string, contraseña:string,foto:string,correo:string,genero:string){
      let url ="https://localhost:8443/usuarios/"+user.id;
      let contra;
      if (contraseña == "") {
        contra = null;
      }else{
        contra = contraseña;
      }
      let item = {id: user.id, name: nombre, karma: user.karma, fecha: user.fecha, foto: foto, genero:genero, correo: correo, estaeslacont: contra};
      let body = JSON.stringify(item);
      let headers = new Headers({
        'Content-Type':'application/json'
      });
      let options = new RequestOptions({headers});
       return this.http.put(url, body, options)
        .map(response => response.json())
        .catch(error => this.manejarError(error));
  }

  doAdmin(user: Usuario){
    let url = "https://localhost:8443/usuarios/doAdmin/"+user.id;
    let item = {id:null};
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(url, body, options)
      .map(response => response.json)
      .catch(error => this.manejarError(error));
  }

  almacenarSesion(sesion:Usuario){ //Almacenamos los cambios realizados en la sesion
    for(var i=0; i < this.usuario.length; i++) {
        if(this.usuario[i].name === this.sesion.name){
          this.usuario[i] = sesion;
        }
    }
  }

  getUsuarioporId(id : number){
    return withObserver(this.usuario[id]);
  }

  eliminarUsuario(id: number){
    let url ="https://localhost:8443/usuarios/"+id
    var r = confirm("¿Quieres borrar a este usuario?");
    if(r == true){
      return this.http.delete(url)
        .map(response => undefined)
        .catch(error => this.manejarError(error)
      );
    }else{
      alert("Casi la lías");
    }
  }

  refLogged(id: number){
    let url = "https://localhost:8443/usuarios/actLog/"+id;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  getKarma(usuario: Usuario){
    return usuario.karma;
  }

  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }
}
