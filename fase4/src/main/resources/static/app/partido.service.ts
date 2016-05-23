import {Injectable} from 'angular2/core';
import {Jugador, JugadorService} from './jugador.interface';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Component} from 'angular2/core';

@Component({
  selector: 'main-app',
  providers: [JugadorService]
})


export class Partido {

  constructor(
    public id:number,
    public eq1:string,
    public logo1:string,//Imagen???? Habría que crear o una estructura y llamar a todas las imágenes casi igual
    public eq2:string,
    public logo2: string, //Imagen???
    public jug1: Jugador[],
    public jug2: Jugador[],
    public juego: string,
    public estado: string,
    public diferencia: string,
    public ganando: string,
    public url: string,
    public rondas: string
  ) {}

}

@Injectable()
export class PartidoService {

  jugs: Jugador[] = [
    new Jugador('Jug1','mid',1.5),
    new Jugador('Jug2','top',2.5),
    new Jugador('Jug3','noidea',3.5),
    new Jugador('Jug4','feed',0.0)
  ];;

  constructor (private service: JugadorService){}

  ngOnInit(){
    this.service.getJugadores().subscribe(
      jugs => this.jugs = jugs,
      error => console.log(error)
    );
  }

  private partidos = [
    new Partido(0,'eq11','c9Logo','eq21','fnaticLogo',this.jugs,this.jugs,'lol','Directo','800','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(1,'eq12','fnaticLogo','eq22','UOLLogo',this.jugs,this.jugs,'cs','Directo','500','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO3'),
    new Partido(2,'eq13','UOLLogo','eq23','nipLogo',this.jugs,this.jugs,'lol','Finalizado','1000','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(3,'eq14','nipLogo','eq24','c9Logo',this.jugs,this.jugs,'cod','Directo','1:3','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(4,'eq15','c9Logo','eq25','fnaticLogo',this.jugs,this.jugs,'lol','Directo','1800','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO3'),
    new Partido(5,'eq16','c9Logo','eq26','fnaticLogo',this.jugs,this.jugs,'cs','Proximamente','300','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO3')

  ];

  getPartidos(){
    return withObserver(this.partidos);
  }

  getPartidosJuego(juego : string){
    return Promise.resolve(this.partidos).then(partidosjuego => partidosjuego.filter(partidojuego => partidojuego.juego === juego));
  }

  getPartido(id:number){
    return withObserver(this.partidos[id]);
  }

  anadirPartido(juego:string, eq1: string, logo1:string, porcen1:string, eq2: string, logo2:string, porcen2:string, url: string, rondas: string, estado: string){ //Faltaría lo de jugadores de cada equipo
    let i = this.partidos.length;
    let ganan;
    if( porcen1 > porcen2){
      ganan = 'eq1';
    }else{
      ganan = 'eq2';
    }
    let p = new Partido(i, eq1, logo1, eq2, logo2, this.jugs, this.jugs, juego, estado, '500', ganan, 'https://www.youtube.com/embed/3EwuH3-xmds', rondas);
    this.partidos.push(p);
    console.log(this.partidos);
    return withObserver(this.partidos);
  }

  editarPartido(id: number, juego:string, eq1: string, logo1:string, porcen1:string, eq2: string, logo2:string, porcen2:string, url: string, rondas: string, estado: string){
    this.partidos[id].eq1 = eq1;
    this.partidos[id].logo1 = logo1;
    this.partidos[id].diferencia = porcen1;
    this.partidos[id].eq2 = eq2;
    this.partidos[id].logo2 = logo2;
    this.partidos[id].url = url;
    this.partidos[id].estado = estado;
    this.partidos[id].rondas = rondas;
    this.partidos[id].juego = juego;
    let ganan;
    if( porcen1 > porcen2){
      ganan = 'eq1';
    }else{
      ganan = 'eq2';
    }
    alert("Partido editado");
    return withObserver(new Partido(id, eq1, logo1, eq2, logo2, this.jugs, this.jugs, juego, estado, '500', ganan , 'https://www.youtube.com/embed/3EwuH3-xmds', rondas))
  }

  eliminarPartido(id : number){
    let p: Partido;
    p = this.partidos[id];
    var r = confirm("¿Quierres borrar el partido?");
    if (r == true){
      this.partidos.splice(id, 1);
      alert("Partido eliminado");
      return withObserver (p);
    }else{
      alert("Casi la lias");
    }

  }

  terminarPartido(part:Partido){
    this.partidos[part.id].estado="Finalizado";
  }

  pasarADirecto(part:Partido){
    this.partidos[part.id].estado="Directo";
  }

}
