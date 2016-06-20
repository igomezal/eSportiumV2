import {Component} from 'angular2/core';
import {Equipo, EquipoService} from '../equipo.interface';
import {Jugador, JugadorService} from '../jugador.interface';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';

@Component({
  selector: 'anadirJugador',
  templateUrl: 'app/admin/add_jugador.html',
  directives: [ROUTER_DIRECTIVES]
})

export class addJugadorComponent {

  constructor(private _UsuarioService: UsuarioService, private _EquipoService: EquipoService, private _JugadorService:JugadorService, private _Router: Router) { }

  private equipos: Equipo[] = [];
  private equipoN = 0;

  ngOnInit() {
    this._EquipoService.getEquipos().subscribe(
      equipos => this.equipos = equipos,
      error => console.log(error)
    );
  }

  gotoHome() {
    this._Router.navigate(['Admin']);
  }

  gotoGestionEquipos() {
    this._Router.navigate(['GestionEquipos']);
  }

  gotoGestionJugadores() {
    this._Router.navigate(['GestionJugadores']);
  }

  gotoGestionJuegos() {
    this._Router.navigate(['GestionJuegos']);
  }

  gotoGestionPartidos() {
    this._Router.navigate(['GestionPartidos']);
  }

  gotoGestionUsuarios() {
    this._Router.navigate(['GestionUsuarios']);
  }

  gotoAjustes() {
    this._Router.navigate(['Ajustes']);
  }

  gotoMain() {
    this._Router.navigate(['Inicio']);
  }

  cerrarSesion() {
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

  anadir(nombre: string, posicion: string, media: number) {
    console.log(nombre, posicion, media, this.equipoN);
    if ((typeof (this.equipoN) === "undefined") || (this.equipoN === 0) || (nombre === "") || (posicion === "")) {
      alert("Completa los campos correctamente")
    }else{
      this._JugadorService.anadirJugador(nombre, posicion, media, this.equipoN).subscribe(
        response => { alert("Añadido jugador " + nombre); this.gotoGestionJugadores(); }
      );
    }
  }

  seleccion(equipoN){
    this.equipoN = equipoN;
    console.log(equipoN);
  }

  ngAfterContentInit() {
    var e1 = document.createElement("script");
    e1.type = "text/javascript";
    e1.src = "js/select2.min.js";
    document.head.appendChild(e1);

    var e1 = document.createElement("script");
    e1.type = "text/javascript";
    e1.src = "js/jS.js";
    document.head.appendChild(e1);
  }
}