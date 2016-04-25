import {Component,Injectable,AfterContentInit} from 'angular2/core';
import {Usuario,UsuarioService} from './usuario.interface';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';

@Component({
  selector: 'editarperfil',
  templateUrl: 'app/editarperfil.component.html'
})

export class editarPerfil {

  sesion:Usuario;
  private exito:boolean = false;
  private error:boolean = false;
  constructor (private _usuarioService: UsuarioService, private _router:Router){}

  ngOnInit(){
    this._usuarioService.getSesion().subscribe(
      usuario =>this.sesion = usuario,
      error => console.log(error)
    );
  }

  actualizar(foto:string,correo:string,genero:string,clave1:string, clave2:string){
      if(clave1 === clave2){
          var fotov:string;
          var correov:string;
          var generov:string;
          if (foto === ""){
            fotov = this.sesion.foto;
          }else{
            fotov = foto;
          }
          if (correo === ""){
            correov = this.sesion.correo;
          }else{
            correov = correo;
          }
          if (genero === ""){
            generov = this.sesion.genero;
          }else{
            generov = genero;
          }
          this._usuarioService.editarDatos(clave1,fotov,correov,generov);
          this.exito = true;
          this.error = false;
      }else{
          this.error = true;
          this.exito = false;
      }
  }
  ngAfterContentInit() {
    var e1 = document.createElement("script");
    e1.type = "text/javascript";
    e1.src = "js/jS.js";
    document.head.appendChild(e1);
}

}
