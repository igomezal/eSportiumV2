import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Partido, PartidoService} from '../partido.service';
import {UsuarioService} from '../usuario.interface';
import {ApuestaUserService} from '../apuestaUser.interface';
import {LoginService} from '../login.service';

@Component({
  selector:'gestionPartidos',
  templateUrl: 'app/admin/gestion_partidos.html'
})

export class gestionPartidosComponent {

  constructor(private _UsuarioService: UsuarioService, private _Partidoservice:PartidoService, private _Router: Router,
     private _ApuestaUserService: ApuestaUserService, private _LoginService: LoginService){}

  private partidos: Partido[];
  private ganadorN = "";
  private karma = 0;

  ngOnInit(){
    this._Partidoservice.getPartidos().subscribe(
      partidos => this.partidos = partidos,
      error => console.log(error)
    );
  }

  gotoHome(){
    this._Router.navigate(['Admin']);
  }

  gotoGestionJuegos(){
    this._Router.navigate(['GestionJuegos']);
  }

  gotoGestionEquipos(){
    this._Router.navigate(['GestionEquipos']);
  }

  gotoGestionJugadores() {
    this._Router.navigate(['GestionJugadores']);
  }

  gotoGestionPartidos(){
    this._Router.navigate(['GestionPartidos']);
  }

  gotoGestionUsuarios(){
    this._Router.navigate(['GestionUsuarios']);
  }

  gotoAjustes(){
    this._Router.navigate(['Ajustes']);
  }

  gotoMain(){
    this._Router.navigate(['Inicio']);
  }

  cerrarSesion(){
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

  gotoEditPartido(partido: Partido){
    let link = ['EditarPartido',{id: partido.id}];
    this._Router.navigate(link);
  }

  gotoAddPartido(){
    this._Router.navigate(['AddPartido']);
  }

  finalizarPartido(partido: Partido, equipo: string){
    var id_ganador: number;
    if (equipo == "eq1"){
      id_ganador = partido.equipo1.id;
      console.log("Ganador: "+partido.equipo1.nombre+" id: "+id_ganador);
    }
    if (equipo == "eq2"){
      id_ganador = partido.equipo2.id;
      console.log("Ganador: "+partido.equipo2.nombre+" id: "+id_ganador);
    }
    this._Partidoservice.terminarPartido(partido, equipo).subscribe(
      response => this.refresh())
      error => this.refresh()
    this._Partidoservice.obetenerPuestas(partido).subscribe(
      response => {
        this.refresh()
          for(var i in response.apuestas){
            if(response.apuestas[i].equipo.id == id_ganador){
              //if de si el equipo es o no por el que has apostado
              this._ApuestaUserService.obtenerUserApuestas(response.apuestas[i].id).subscribe(
               response =>{
                this._UsuarioService.cobrarKarma(response[0].user,response[0].apuesta.karma).subscribe(
                  response => {
                    console.log("El user "+response.name+" ha ganado, sumando un total de "+response.karma+" de karma");
                    this._LoginService.refresh().subscribe(
                      response => {console.log("loginService actualizado / +Karma");}
                    )
                  }
                )
              }
            )
          }
        }
      }
    )
    this.refresh()
  }

  aDirecto(partido:Partido){
    this._Partidoservice.pasarADirecto(partido).subscribe(
      response => this.refresh()
    );
    this.refresh()
  }

  borrarPartido(partido: Partido){
    this._Partidoservice.eliminarPartido(partido.id).subscribe(
      response => this.refresh(),
      error => alert("Error al borrar")
    );
  }

  ganadorAdd(ganadorN){
     this.ganadorN = ganadorN;
     console.log(ganadorN);
 }

  private refresh(){
    this._Partidoservice.getPartidos().subscribe(
      partidos => this.partidos = partidos,
      error => console.log(error)
    );
  }

}
