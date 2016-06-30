import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Component} from 'angular2/core';
import {Apuesta} from './apuesta.interface';
import {Usuario} from './usuario.interface';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import 'rxjs/Rx';


@Component({
  selector:'apuestaUserinterface'
})

export class ApuestaUser {
  constructor (
    public id: number,
    public apuesta: Apuesta,
    public usuario: Usuario
  ){}
}

@Injectable()
export class ApuestaUserService{

constructor(private http: Http){}

  private apuestasUser =[];

  getApuestasUser(){
    let url = "https://localhost:8443/apuestaUser/";
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  getApuestaUser(id: number){
    let url = "https://localhost:8443/apuestaUser/" + id;
    return this.http.get(url).map(response => response.json()).catch(error => this.manejarError(error));
  }

  anadirApuestaUser(apuesta: Apuesta, usuario: Usuario){
    let url = "https://localhost:8443/apuestaUser/"
    let item = { id: null, apuesta, user: usuario };
    let body = JSON.stringify(item);
    let headers = new Headers({
    'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });
    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  editar(id:number, apuesta: Apuesta, usuario: Usuario){
    let item = {apuesta, usuario}
    let url = "https://localhost:8443/apuestaUser/" + id;
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error)
    );
  }

  obtenerApuestasUser(id: number){
    let url = "https://localhost:8443/apuestaUser/user/" + id;
    return this.http.get(url).map(response => response.json()).catch(error => this.manejarError(error));
  }

  obtenerUserApuestas(id :number){
    let url = "https://localhost:8443/apuestaUser/apuesta/" + id;
    return this.http.get(url).map(response => response.json()).catch(error => this.manejarError(error));
  }

  eliminar(id: number, apuesta: Apuesta, usuario: Usuario){
    let url = "https://localhost:8443/apuestaUser/" + id;
    return this.http.delete(url)
      .map(response => undefined)
      .catch(error => this.manejarError(error))
  }

  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }
}
