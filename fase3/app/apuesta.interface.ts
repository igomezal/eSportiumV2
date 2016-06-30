import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Component} from 'angular2/core';
import {Partido} from './partido.service';
import {Equipo} from './equipo.interface';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import 'rxjs/Rx';


@Component({
  selector:'apuestainterface'
})

export class Apuesta {
  constructor (
    public id: number,
    public partido: Partido,
    public equipo: Equipo,
    public karma: string
  ){}
}

@Injectable()
export class ApuestaService{

constructor(private http: Http){}

  private apuestas =[];

  getApuestas(){
    let url = "https://localhost:8443/apuestas/";
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  getApuesta(id: number){
    let url = "https://localhost:8443/apuestas/" + id;
    return this.http.get(url).map(response => response.json()).catch(error => this.manejarError(error));
  }

  anadirApuesta(partido: Partido, equipo: Equipo, karma: string){
    let url = "https://localhost:8443/apuestas/"
    let item = { id: null, partido, equipo, karma };
    let body = JSON.stringify(item);
    let headers = new Headers({
    'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });
    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  editar(id:number, partido: Partido, equipo: Equipo){
    let item = {partido,equipo}
    let url = "https://localhost:8443/apuestas/" + id;
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

  eliminar(id: number, nombre: string, siglas: string){
    let url = "https://localhost:8443/apuestas/" + id;
    return this.http.delete(url)
      .map(response => undefined)
      .catch(error => this.manejarError(error))
  }

  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }

}
