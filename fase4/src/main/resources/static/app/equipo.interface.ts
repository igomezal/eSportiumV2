import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Component} from 'angular2/core';
import {Jugador} from './jugador.interface';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import 'rxjs/Rx';

@Component({
  selector:'equipointerface'
})

export class Equipo {
  constructor (
    public id: number,
    public nombre: string,
    public logo: string,
    public jugadores: Jugador[]
  ){}
}

@Injectable()
export class EquipoService{

  constructor(private http: Http){}

  getEquipos(){
    let url = "https://localhost:8443/equipos/";
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  getEquipo(id: number){
    let url = "https://localhost:8443/equipos/" + id;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  anadirEquipo(nombre: string, logo: string){
    let url = "https://localhost:8443/equipos/";
    let item = {nombre, logo};
    let body = JSON.stringify(item);
    let headers = new Headers({
    'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });
    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  editar(id:number, nombre: string, logo: string){
    let item = {id : null,nombre,logo}
    let url = "https://localhost:8443/equipos/" + id;
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

  eliminar(id: number){
    let url = "https://localhost:8443/equipos/" + id;
    return this.http.delete(url)
      .map(response => undefined)
      .catch(error => this.manejarError(error)
    );
  }

  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }
}
