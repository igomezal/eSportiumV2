import {Component, AfterContentInit } from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Partido, PartidoService} from './partido.service';
import {JugadorService} from './jugador.interface';
import {Juego,JuegoService} from './juego.interface';

@Component({
  selector: 'finalizados',
  templateUrl: 'app/finalizados.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class finalizadosComponent {

  juegos: Juego[];

  arrayDirtemp: Partido[];
  arrayFintemp: Partido[];

  partidos: Partido[];

  constructor (private _Partidoservice: PartidoService, private _JuegoService: JuegoService, private _router:Router){}

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
       if(this.partidos[i].estado == 'Finalizado'){
         this.arrayDirtemp.push(this.partidos[i]);
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

  goToPartido(partido: Partido){
    let link = ['Partido',{id:partido.id}];
    this._router.navigate(link);
  }

 ngAfterContentInit() {
   var q1 = document.createElement("script");
       q1.type = "text/javascript";
       q1.src = "js/responsive-tabs.js";
       document.head.appendChild(q1);

       var o1 = document.createElement("script");
       o1.type = "text/javascript";
       o1.src = "js/script-responsive.js";
       document.head.appendChild(o1);
   }
}