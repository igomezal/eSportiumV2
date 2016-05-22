import {Component,Injectable,AfterContentInit} from 'angular2/core';
import {Usuario,UsuarioService} from './usuario.interface';
import {PartidoService,Partido} from './partido.service';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';

@Component({
  selector: 'profile',
  templateUrl: 'app/profile.component.html'
})

export class Perfil {

  sesion:Usuario;
  partidoAc:Partido[];
  partidoFin:Partido[];
  constructor (private _usuarioService: UsuarioService, private _partidoService: PartidoService, private _router:Router){}

  ngOnInit(){
    this._usuarioService.getSesion().subscribe(
      usuario =>this.sesion = usuario,
      error => console.log(error)
    );
    this.getPartido();
  }

  getApuesta(id:number){
    for(var i = 0; i<this.sesion.apuestas.length; i++){
      if(this.sesion.apuestas[i].id === id){
        return this.sesion.apuestas[i].karma;
      }
    }
  }

  getPartido(){
    this.partidoAc = [];
    for(var i = 0; i<this.sesion.apuestas.length; i++){
      this._partidoService.getPartido(this.sesion.apuestas[i].id).subscribe(
        partido => this.partidoAc.push(partido),
        error => console.log(error)
      );
    }

    this.partidoFin = [];
    for(var i = 0; i<this.sesion.finalizados.length; i++){
      this._partidoService.getPartido(this.sesion.finalizados[i].id).subscribe(
        partido => this.partidoFin.push(partido),
        error => console.log(error)
      );
    }
  }

  goToPartido(partido: Partido){
    let link = ['Partido',{id:partido.id}];
    this._router.navigate(link);
  }
  goToEditar(partido: Partido){
    let link = ['Editar'];
    this._router.navigate(link);
  }
}
