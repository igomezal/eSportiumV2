import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Partido, PartidoService} from './partido.service';
import {JugadorService} from './jugador.interface';
import {Juego,JuegoService} from './juego.interface';

@Component({
  selector: 'index',
  templateUrl: 'app/index.html',
  directives: [ROUTER_DIRECTIVES]
})

export class indexComponent {

  juegos: Juego[];

  arrayDirtemp: Partido[];
  arrayFintemp: Partido[];

  partidos: Partido[];

  constructor (private _Partidoservice: PartidoService, private _JuegoService: JuegoService){}

  ngOnInit(){
   this._Partidoservice.getPartidos().subscribe(
     partidos => this.partidos = partidos,
     error => console.log(error)
   );
   this._JuegoService.getJuegos().subscribe(
     juegos => this.juegos = juegos,
     error => console.log(error)
   );
   this._Partidoservice.getPartidos().subscribe(
     partidos => this.arrayDirtemp = partidos,
     error => console.log(error)
   );
   this._Partidoservice.getPartidos().subscribe(
     partidos => this.arrayFintemp = partidos,
     error => console.log(error)
   );
  }

  setPruebasDir(s: String){
   this.arrayDirtemp = [];
   for(var i =0; i<this.partidos.length; i++){
     if(this.partidos[i].juego == s){
       if(this.partidos[i].estado == 'directo'){
         this.arrayDirtemp.push(this.partidos[i]);
       }
     }
   }
  }

  setPruebasProx(s: String){
   this.arrayFintemp = [];
   for(var i =0; i<this.partidos.length; i++){
     if(this.partidos[i].juego == s){
       if(this.partidos[i].estado == 'proximo'){
         this.arrayFintemp.push(this.partidos[i]);
       }
     }
   }
  }

  isVacio(a: Partido[]){
   if(a.length == 0){
     return true;
   }
   return false;
  }

}
