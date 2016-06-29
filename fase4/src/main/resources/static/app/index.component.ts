import {Component, AfterContentInit } from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Partido, PartidoService} from './partido.service';
import {Juego,JuegoService} from './juego.interface';

@Component({
  selector: 'index',
  templateUrl: 'app/index.html',
  directives: [ROUTER_DIRECTIVES]
})

export class indexComponent {

  juegos: Juego[] = [];

  arrayDirtemp: Partido[];
  arrayFintemp: Partido[];

  partidos : Partido[] = [];

  constructor (private _Partidoservice: PartidoService, private _JuegoService: JuegoService, private _router:Router){}

  ngOnInit(){
   this._Partidoservice.getPartidos().subscribe(
     partidos => this.partidos = partidos,
     error => console.log(error)
   );
   this._JuegoService.getJuegos().subscribe(
     juegos => this.juegos = juegos
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

  private refresh(){
    this._JuegoService.getJuegos().subscribe(
      items => this.juegos = items
    );
  }

  setPruebasDir(s: String){
   this.arrayDirtemp = [];
   for(var i =0; i<this.partidos.length; i++){
     if(this.partidos[i].juego.siglas == s){
       console.log("DEBUGG");
       if(this.partidos[i].estado == 'Directo'){
         this.arrayDirtemp.push(this.partidos[i]);
       }
     }
   }
  }

  setPruebasProx(s: String){
   this.arrayFintemp = [];
   for(var i =0; i<this.partidos.length; i++){
     if(this.partidos[i].juego.siglas == s){
       if(this.partidos[i].estado == 'Proximamente'){
         this.arrayFintemp.push(this.partidos[i]);
       }
     }
   }
  }

  isVacio(a: Partido[],siglas: string){
    for (var i in a){
      if(a[i].juego.siglas == siglas){
        //console.log("partido encontrado "+i)
      }
    }
    //console.log("salgo, no se si hay partidos")
  }

  goToPartido(partido: Partido){
    let link = ['Partido',{id:partido.id}];
    this._router.navigate(link);
  }

 ngAfterContentInit() {
   var q = document.createElement("script");
       q.type = "text/javascript";
       q.src = "js/responsive-tabs.js";
       document.head.appendChild(q);

       var o = document.createElement("script");
       o.type = "text/javascript";
       o.src = "js/script-responsive.js";
       document.head.appendChild(o);
   }
}
