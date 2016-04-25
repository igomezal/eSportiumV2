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
    new Partido(0,'eq11','c9Logo','eq21','fnaticLogo',this.jugs,this.jugs,'lol','directo','800','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(1,'eq12','fnaticLogo','eq22','UOLLogo',this.jugs,this.jugs,'cs','directo','500','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO3'),
    new Partido(2,'eq13','UOLLogo','eq23','nipLogo',this.jugs,this.jugs,'lol','finalizado','1000','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(3,'eq14','nipLogo','eq24','c9Logo',this.jugs,this.jugs,'cod','directo','1:3','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
    new Partido(4,'eq15','c9Logo','eq25','fnaticLogo',this.jugs,this.jugs,'lol','directo','1800','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO3'),
    new Partido(5,'eq16','c9Logo','eq26','fnaticLogo',this.jugs,this.jugs,'cs','proximo','300','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO3')

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

}
