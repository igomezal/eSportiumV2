import {Component,Injectable,AfterContentInit} from 'angular2/core';
import {Usuario,UsuarioService} from './usuario.interface';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {LoginService} from './login.service';

@Component({
  selector: 'editarperfil',
  templateUrl: 'app/editarperfil.component.html'
})

export class editarPerfil {

  sesion:Usuario;
  private exito:boolean = false;
  private error:boolean = false;
  constructor (private _usuarioService: UsuarioService, private _router:Router, private _LoginService: LoginService){}

  ngOnInit(){
    this._usuarioService.getSesion().subscribe(
      usuario =>this.sesion = usuario,
      error => console.log(error)
    );
  }

  editar(user: Usuario, nombre: string, Clave1:string, Clave2: string, foto:string,correo:string,genero:string){
    let contra = Clave1;
    if (Clave1 == "" && Clave2 == ""){
      //Sin cambiar la contraseña
      contra = null;
    }
    if( Clave1 != Clave2) {
      alert("Las contraseñas no coinciden");
    }else{
      this._usuarioService.editarDatos(user, nombre, contra, foto, correo, genero).subscribe(
        response => alert("Usuario editado correctamente")
      )
    }
  }

  actualizar(foto:string,correo:string,genero:string,clave1:string, clave2:string){
      if(clave1 === clave2){
          var fotov:string;
          var correov:string;
          var generov:string;
          var clavev:string;
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
          if(clave1==""){
            clavev = this.sesion.clave;
          }else{
            clavev = clave1;
          }
          this._usuarioService.editarDatos(this._LoginService.user, "cosas", clavev,fotov,correov,generov);
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
