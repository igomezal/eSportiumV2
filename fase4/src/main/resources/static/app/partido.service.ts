import {Injectable} from 'angular2/core';
import {Jugador, JugadorService} from './jugador.interface';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Component} from 'angular2/core';
import {Equipo} from './equipo.interface';
import {Juego} from './juego.interface';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import 'rxjs/Rx';

@Component({
  selector: 'main-app',
  providers: [JugadorService]
})


export class Partido {

  constructor(
    public id:number,
    public equipo1:Equipo,
    public equipo2:Equipo,
    /*public logo1:string,//Imagen???? Habría que crear o una estructura y llamar a todas las imágenes casi igual
    public logo2: string, //Imagen???
    public jug1: Jugador[],
    public jug2: Jugador[],*/
    public juego: Juego,
    public estado: string,
    public diferencia: string,
    public ganando: string,
    public url: string,
    public rondas: string
  ) {}

}

@Injectable()
export class PartidoService {

  jugs: Jugador[] = [];

  constructor (private service: JugadorService, private http: Http){}

  ngOnInit(){
    this.service.getJugadores().subscribe(
      jugs => this.jugs = jugs,
      error => console.log(error)
    );
  }

  private partidos = [];

  /*private partidos = [
    new Partido(0,'eq11','c9Logo','eq21','fnaticLogo',this.jugs,this.jugs,'lol','Directo','800','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(1,'eq12','fnaticLogo','eq22','UOLLogo',this.jugs,this.jugs,'cs','Directo','500','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO3'),
    new Partido(2,'eq13','UOLLogo','eq23','nipLogo',this.jugs,this.jugs,'lol','Finalizado','1000','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(3,'eq14','nipLogo','eq24','c9Logo',this.jugs,this.jugs,'cod','Directo','1:3','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(4,'eq15','c9Logo','eq25','fnaticLogo',this.jugs,this.jugs,'lol','Directo','1800','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO3'),
    new Partido(5,'eq16','c9Logo','eq26','fnaticLogo',this.jugs,this.jugs,'cs','Proximamente','300','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO3')

  ];*/

  getPartidos(){
    let url = "https://localhost:8443/partidos/";
    return this.http.get(url)
    .map(response => response.json())
    .catch(error => this.manejarError(error));
  }

  getPartidosJuego(juego : string){
    return Promise.resolve(this.partidos).then(partidosjuego => partidosjuego.filter(partidojuego => partidojuego.juego === juego));
  }

  getPartido(id:number){
    let url ="https://localhost:8443/partidos/"+id;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  //anadirPartido(juego:string, eq1: Equipo, logo1:string, porcen1:string, eq2: Equipo, logo2:string, porcen2:string, url: string, rondas: string, estado: string){ //Faltaría lo de jugadores de cada equipo
  anadirPartido(juego: number, eq1: number, porcen1:string, eq2: number,porcen2:string, url: string, rondas: string, estado: string){ //Faltaría lo de jugadores de cada equipo
    let ganan;
    if( porcen1 > porcen2){
      ganan = 'eq1';
    }else{
      ganan = 'eq2';
    }
    let url1 ="https://localhost:8443/partidos/";
    let item = {id: null, juego:{id:juego}, equipo1:{id:eq1}, equipo2: {id:eq2}, url, rondas, estado};
    let body = JSON.stringify(item);
    let headers = new Headers({
    'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });
    return this.http.post(url1, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
    }

  editarPartido(id: number, juego:Juego, eq1: Equipo, logo1:string, porcen1:string, eq2: Equipo, logo2:string, porcen2:string, url: string, rondas: string, estado: string){
    let url1 = "https://localhost:8443/partidos/"+id;
    let ganan;
    if( porcen1 > porcen2){
      ganan = 'eq1';
    }else{
      ganan = 'eq2';
    }
    let item = {id: id, estado: estado, ganando: ganan, diferencia: "100", url: url, rondas: rondas, juego: juego, equipo1: eq1, equipo2:eq2}
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    let options = new RequestOptions({ headers });

    return this.http.put(url1, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error)
    );
  }

  eliminarPartido(id : number){
    var r = confirm("¿Quierres borrar el partido?");
    if (r == true){
      let url ="https://localhost:8443/partidos/"+id;
      return this.http.delete(url)
        .map(response => alert("Partido eliminado"))
        .catch(error => this.manejarError(error));
    }else{
      alert("Casi la lias");
    }

  }

  terminarPartido(part:Partido, equipo: string){
    let url = "https://localhost:8443/partidos/"+part.id;
    let item = {id: part.id, estado: "Finalizado", ganando: equipo, diferencia:part.diferencia, url: part.url, rondas: part.rondas, juego: part.juego, equipo1: part.equipo1, equipo2:part.equipo2}
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    let options = new RequestOptions({ headers });

    return this.http.put(url, body, options)
      .map(response => response.json())
      .catch(error => this.manejarError(error)
    );

    //COBRAR APUESTAS  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  }

  pasarADirecto(part:Partido){
    let url = "https://localhost:8443/partidos/"+part.id;
    let item = {id: part.id, estado: "Directo", ganando: part.ganando, diferencia:part.diferencia, url: part.url, rondas: part.rondas, juego: part.juego, equipo1: part.equipo1, equipo2:part.equipo2}
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

  obetenerPuestas(part: Partido){
    let url ="https://localhost:8443/partidos/apuestas/"+part.id;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error));
  }

  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }

}
