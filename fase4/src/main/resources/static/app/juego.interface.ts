import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Component} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import 'rxjs/Rx';

// import {JUEGOS} from './mock-bdd.component/

@Component({
  selector:'juegointerface'
})

export class Juego {
  constructor (
    public id: number,
    public nombre: string,
    public siglas: string
  ){}
}

@Injectable()
export class JuegoService{

constructor(private http: Http){}

  private juegos =[];

  getJuegos(){
    let url = "https://localhost:8443/juegos/";
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  getJuego(id: number){
    let url = "https://localhost:8443/juegos/" + id;
    return this.http.get(url).map(response => response.json()).catch(error => this.manejarError(error));
  }

  anadirJuego(nombre: string, siglas: string){
    let url = "https://localhost:8443/juegos/"
    let item = { id: null, nombre, siglas, partidos:[] };
    let body = JSON.stringify(item);
    let headers = new Headers({
    'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });
    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  editar(id:number, nombre: string, siglas: string){
    let item:Juego = {id,nombre,siglas}
    let url = "https://localhost:8443/juegos/" + id;
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
    let url = "https://localhost:8443/juegos/" + id;
    return this.http.delete(url)
      .map(response => undefined)
      .catch(error => this.manejarError(error))
  }

  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }
}
