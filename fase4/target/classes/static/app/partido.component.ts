import {Component,OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';

import {PartidoService} from './partido.service';
import {Partido} from './partido.service';
import {Usuario, UsuarioService} from './usuario.interface';
import {CabeceraComponent} from './cabecera.component';
import {Equipo, EquipoService} from './equipo.interface';
import {LoginService} from './login.service';
import {ApuestaUserService} from './apuestaUser.interface';
import {ApuestaService} from './apuesta.interface';

@Component({
    selector: 'partido-concreto',
    templateUrl : 'app/partido.component.html',
    directives: [CabeceraComponent]
})

export class PartidoComponent implements OnInit {
    partido:Partido;
    equipo1: Equipo;
    equipo2: Equipo;

    sesion:Usuario;
    admin:boolean;

    constructor(private _router: Router,private _usuarioService:UsuarioService,
       private _partidoService: PartidoService, private _routeParams: RouteParams,
      private loginService: LoginService, private _equipoService: EquipoService,
      private _ApuestaUserService: ApuestaUserService, private _ApuestaService: ApuestaService) {

    }

    ngOnInit(){
        let id = +this._routeParams.get('id');
        this._partidoService.getPartido(id).subscribe(
            partido => {this.partido = partido;
              this.getEquipo1(this.partido.equipo1.id);
              this.getEquipo2(this.partido.equipo2.id)},
            error => console.log(error)
        );

        this._usuarioService.getSesion().subscribe(
            usuario => this.sesion = usuario,
            error => console.log(error)
        );

        this._usuarioService.getAdmin().subscribe(
        admin => this.admin = admin,
        error => console.log(error)
        );
    }

    login(nombre:string, clave:string){
        this._usuarioService.login(nombre,clave).subscribe(
            usuario => this.sesion = usuario,
            error => console.log(error)
        );

        this._usuarioService.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.log(error)
        );
        console.log(this.sesion);
    }

    goToRegistro() {
        this._router.navigate(['Registro']);
    }

    getEquipo1(id: number){
      console.log("Get Equipo1");
      this._equipoService.getEquipo(id).subscribe(
        equipo => this.equipo1 = equipo,
        error => console.log(error)
      );
    }

    getEquipo2(id: number){
      this._equipoService.getEquipo(id).subscribe(
        equipo => this.equipo2 = equipo,
        error => console.log(error)
      );
    }

    actualizar(){
        this._usuarioService.getSesion().subscribe(
            usuario => this.sesion = usuario,
            error => console.log(error)
        );

        this._usuarioService.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.log(error)
        );
    }

    /*apostar(apuesta:number){
        if(this.sesion.karma>=apuesta){
            this._usuarioService.apostar(this.partido,apuesta);
        }else{
            alert("Karma insuficiente");
        }
    }*/

    logInSpring(event: any, user: string, pass: string){

 	  event.preventDefault();

 	  this.loginService.logIn(user, pass).subscribe(
 	      user => console.log(user),
 	      error => alert("Invalid user or password")
       );
   }

   logOutSpring(){
 	this.loginService.logOut().subscribe(
 		response => {},
 		error => console.log("Error when trying to log out: "+error)
 	);
   }

   anadirAp(partido: Partido, equipo: Equipo, karma: string) {
     console.log(partido,equipo,karma);
     if (karma == "" || karma == "0" || this.loginService.user.karma < parseInt(karma)) {
       alert("Es necesario apostar una cantidad de karma entre 0 y "+ this.loginService.user.karma )
     }else{
       this._ApuestaService.anadirApuesta(partido,equipo,karma).subscribe(
         response => {
           alert("Apostado "+ karma +" karma al equipo "+equipo.nombre);
           this._ApuestaUserService.anadirApuestaUser(response,this.loginService.user).subscribe(
             response => { console.log("usuario con apuesta añadido");
             this._usuarioService.quitarKarma(this.loginService.user, parseInt(karma)).subscribe(
               response => { console.log("Karma quitado");
                this.loginService.refresh().subscribe(
                  response => {console.log("loginService actualizado / -Karma");}
                )}
             );}
         );}
       );
     }
   }

}
