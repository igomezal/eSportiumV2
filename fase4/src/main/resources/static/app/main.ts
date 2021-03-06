import {Component, AfterContentInit, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {Partido, PartidoService} from './partido.service';
import {JugadorService} from './jugador.interface';
import {CabeceraComponent} from './cabecera.component';
import {Juego,JuegoService} from './juego.interface';
import {Equipo, EquipoService} from './equipo.interface';
import {indexComponent} from './index.component';
import {Perfil} from './profile.component';
/* pruebaUsuario */import {Usuario,UsuarioService} from './usuario.interface';
import {PieComponent} from './pie.component';
import {PartidoComponent} from './partido.component';
import {RegistroComponent} from './registro.component';
import {AboutUsComponent} from './aboutus.component';
import {FaqComponent} from './faq.component';
import {ContactoComponent} from './contacto.component';
import {finalizadosComponent} from './finalizados.component';
import {editarPerfil} from './editarpefil.component';
import {ApuestaService} from './apuesta.interface';
import {ApuestaUserService} from './apuestaUser.interface';
//admin
import {homeComponent} from './admin/home.component';
import {addJuegoComponent} from './admin/add_juegos.component';
import {addPartidoComponent} from './admin/add_partidos.component';
import {ajustesComponent} from './admin/ajustes.component';
import {editJuegoComponent} from './admin/edit_juego.component';
import {editPartidoComponent} from './admin/edit_partido.component';
import {gestionJuegosComponent} from './admin/gestion_juegos.component';
import {gestionPartidosComponent} from './admin/gestion_partidos.component';
import {gestionUsuariosComponent} from './admin/gestion_usuarios.component';
import {editUsuarioComponent} from './admin/edit_usuario.component';

import {gestionEquiposComponent} from './admin/gestion_equipos.component';
import {editEquipoComponent} from './admin/edit_equipo.component';
import {addEquipoComponent} from './admin/add_equipo.component';

import {gestionJugadoresComponent} from './admin/gestion_jugadores.component';
import {addJugadorComponent} from './admin/add_jugador.component';
import {editJugadorComponent} from './admin/edit_jugador.component';
import {ImageService} from './Image.service';

import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {LoginService} from './login.service';


@Component({
  selector: 'main-app',
  providers: [ROUTER_PROVIDERS,PartidoService,JugadorService,JuegoService,/* pruebaUsuario */UsuarioService, HTTP_PROVIDERS, LoginService, EquipoService,ApuestaService,ApuestaUserService, ImageService],
  templateUrl: 'app/main.html', //Esto antes era index.html  de fuera de app
  directives: [CabeceraComponent,PieComponent,ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/', name: 'Inicio', component: indexComponent, useAsDefault: true},
  {path: '/usuario', name: 'Perfil', component: Perfil},
  {path:'/finalizados', name: 'Finalizados', component:finalizadosComponent},
  {path:'/sobre',name:'Sobre',component:AboutUsComponent},
  {path:'/faq',name:'FAQ',component:FaqComponent},
  {path:'/contacto', name:'Contacto', component:ContactoComponent},
  {path:'/partido/:id', name:'Partido', component:PartidoComponent},
  {path:'/registro', name:'Registro', component:RegistroComponent},
  {path:'/admin',name:'Admin',component:homeComponent},
  {path: '/editar', name:'Editar',component:editarPerfil},
  {path: '/addJuego', name:'AddJuego',component:addJuegoComponent},
  {path: '/addPartido', name:'AddPartido',component:addPartidoComponent},
  {path: '/ajustes', name:'Ajustes',component:ajustesComponent},
  {path: '/editJuego/:id', name:'EditarJuego',component:editJuegoComponent},
  {path: '/editPartido/:id', name:'EditarPartido',component:editPartidoComponent},
  {path: '/juegos', name:'GestionJuegos',component:gestionJuegosComponent},
  {path: '/partidos', name:'GestionPartidos',component:gestionPartidosComponent},
  {path: '/usuarios', name:'GestionUsuarios',component:gestionUsuariosComponent},
  {path: '/editUsuario/:id', name:'EditUsuario',component:editUsuarioComponent},
  {path: '/admin/equipos', name:'GestionEquipos', component:gestionEquiposComponent},
  {path: '/admin/editEquipo/:id', name:'EditarEquipo', component:editEquipoComponent},
  {path: 'admin/addEquipo', name:'AddEquipo', component:addEquipoComponent},
  {path: 'admin/jugadores', name: 'GestionJugadores', component:gestionJugadoresComponent},
  {path: 'admin/addJugador', name: 'AddJugador', component:addJugadorComponent},
  {path: 'admin/editJugador/:id', name: 'EditarJugador', component:editJugadorComponent}

])

export class MainApp implements OnInit {

  //
  /* pruebaUsuario */usuario: Usuario;
  //Todo lo añadadido de usuario es para probar esta clase, cuando se cree en routing se quita

  //

 constructor (/* pruebaUsuario */private _Usuarioservice: UsuarioService){}

 ngOnInit(){
   /* pruebaUsuario */
   this._Usuarioservice.getUsuarios().subscribe(
     usuario => this.usuario = usuario,
     error => console.log(error)
   )
 }

 ngAfterContentInit() {
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
   }

}
