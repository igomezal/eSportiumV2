import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {Partido, PartidoService} from './partido.service';
import {JugadorService} from './jugador.interface';
import {HeaderComponent} from './header.component';
import {Juego,JuegoService} from './juego.interface';
/* pruebaUsuario */import {Usuario,UsuarioService} from './usuario.interface';

@Component({
  selector: 'main-app',
  providers: [ROUTER_PROVIDERS,PartidoService,JugadorService,JuegoService,/* pruebaUsuario */UsuarioService],
  templateUrl: 'app/index.html', //Esto antes era index.html de fuera de app
  directives: [ROUTER_DIRECTIVES, HeaderComponent],
  /*styleUrls:['./css/bootstrap-tabs-x.css','./css/bootstrap-tabs-x.min.css', //Si quito estos comentarios en chrome deja de funcionar
    './css/bootstrap-theme.css',
    './css/bootstrap-theme.css.map',
    './css/bootstrap-theme.min.css',
    './css/bootstrap-theme.min.css.map',
    './css/bootstrap.css',
    './css/bootstrap.css.map',
    './css/bootstrap.min.css',
    './css/bootstrap.min.css.map',
    './css/flexslider.css',
    './css/ionicons.min.css',
    './css/jquery.bootstrap-touchspin.css',
    './css/style.css',
    './css/ten.css'],*/
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class MainApp {

  //
  /* pruebaUsuario */usuario: Usuario;
  //Todo lo añadadido de usuario es para probar esta clase, cuando se cree en routing se quita

  //

  juegos: Juego[];

  arrayDirtemp: Partido[];
  arrayFintemp: Partido[];

  partidos: Partido[];

 constructor (private _Partidoservice: PartidoService, private _JuegoService: JuegoService, /* pruebaUsuario */private _Usuarioservice: UsuarioService){}

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
   /* pruebaUsuario */
   this._Usuarioservice.getUsuario().subscribe(
     usuario => this.usuario = usuario,
     error => console.log(error)
   )
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

 setPruebasFin(s: String){
   this.arrayFintemp = [];
   for(var i =0; i<this.partidos.length; i++){
     if(this.partidos[i].juego == s){
       if(this.partidos[i].estado == 'finalizado'){
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

 ngAfterContentInit() {
       var s = document.createElement("script");
       s.type = "text/javascript";
       s.src = "http://code.jquery.com/jquery-2.2.1.min.js";
       document.head.appendChild(s);

       var t = document.createElement("script");
       t.type = "text/javascript";
       t.src = "js/bootstrap.min.js";
       document.head.appendChild(t);

       var e = document.createElement("script");
       e.type = "text/javascript";
       e.src = "js/jS.js";
       document.head.appendChild(e);

       var f = document.createElement("script");
       f.type = "text/javascript";
       f.src = "js/easings.js";
       document.head.appendChild(f);

       var g = document.createElement("script");
       g.type = "text/javascript"
       g.src = "js/jquery.bootstrap-touchspin.js";
       document.head.appendChild(g);

       var h = document.createElement("script");
       h.type = "text/javascript";
       h.src = "js/main.js";
       document.head.appendChild(h);
   }




  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
