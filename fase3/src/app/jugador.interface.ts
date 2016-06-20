import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Equipo} from './equipo.interface';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import 'rxjs/Rx';


export class Jugador{

  constructor(
    public id: number,
    public nombre:string,
    public posicion: string,
    public media: number,
    public equipo:Equipo
  ) {}

}

@Injectable()
export class JugadorService {

  constructor(private http: Http){}

  getJugadores() {
    let url = "https://localhost:8443/jugadores/";
    return this.http.get(url)
    .map(response => response.json())
    .catch(error => this.manejarError(error));
  }

  getJugador(id:number){
    let url = "https://localhost:8443/jugadores/" + id;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error)
    );
  }

  anadirJugador(nombre:string, posicion:string, kda:number, equipo:number){
    let url = "https://localhost:8443/jugadores/";
    let item = { "nombre":nombre, "posicion":posicion, "media":kda, "equipo":{"id": equipo}
  };
  let body = JSON.stringify(item);
  let headers = new Headers({
    'Content-Type': 'application/json'
  });
  let options = new RequestOptions({ headers });
  return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error)
    );
  }

  editar(id:number,nombre:string, posicion:string, kda:number, equipo:number){
    let item = { "id":id, "nombre":nombre, "posicion":posicion, "media":kda, "equipo": { "id": equipo } };
    let url = "https://localhost:8443/jugadores/" + id;
    let body = JSON.stringify(item);
    let headers = new Headers({
    'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error)
    );
  }

  eliminar(id:number){
    let url = "https://localhost:8443/jugadores/" + id;
    return this.http.delete(url)
      .map(response => undefined)
      .catch(error => this.manejarError(error)
    );
  }

  private manejarError(error: any) {
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }
}
