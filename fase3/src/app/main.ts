import {Component, AfterContentInit, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {Partido, PartidoService} from './partido.service';
import {JugadorService} from './jugador.interface';
import {CabeceraComponent} from './cabecera.component';
import {Juego,JuegoService} from './juego.interface';
import {indexComponent} from './index.component';
import {Perfil} from './profile.component';
/* pruebaUsuario */import {Usuario,UsuarioService} from './usuario.interface';
import {PieComponent} from './pie.component';
import {PartidoComponent} from './partido.component';
import {RegistroComponent} from './registro.component';

@Component({
  selector: 'main-app',
  providers: [ROUTER_PROVIDERS,PartidoService,JugadorService,JuegoService,/* pruebaUsuario */UsuarioService],
  templateUrl: 'app/main.html', //Esto antes era index.html  de fuera de app
  directives: [CabeceraComponent,PieComponent,ROUTER_DIRECTIVES],
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
  {path: '/', name: 'Inicio', component: indexComponent, useAsDefault: true},
  {path: '/usuario', name: 'Perfil', component: Perfil},
  {path:'/finalizados', name: 'Finalizados', component:indexComponent},
  {path:'/sobre',name:'Sobre',component:indexComponent},
  {path:'/faq',name:'FAQ',component:indexComponent},
  {path:'/contacto', name:'Contacto', component:indexComponent},
  {path:'/partido/:id', name:'Partido', component:PartidoComponent},
  {path:'/registro', name:'Registro', component:RegistroComponent} 
])

export class MainApp implements OnInit {

  //
  /* pruebaUsuario */usuario: Usuario;
  //Todo lo añadadido de usuario es para probar esta clase, cuando se cree en routing se quita

  //

 constructor (/* pruebaUsuario */private _Usuarioservice: UsuarioService){}

 ngOnInit(){
   /* pruebaUsuario */
   this._Usuarioservice.getUsuario().subscribe(
     usuario => this.usuario = usuario,
     error => console.log(error)
   )
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

}
