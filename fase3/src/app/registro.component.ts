import {Component} from 'angular2/core';
import {UsuarioService} from './usuario.interface';
import {Usuario} from './usuario.interface';

@Component({
    selector: 'registro',
    templateUrl: 'app/registro.component.html'
})

export class RegistroComponent{

    private exito:boolean = false;
    private error:boolean = false;

    constructor(private _usuarioService:UsuarioService){

    }

    add(nombre:string,correo:string,genero:string, clave:string, clave2:string){
        if(clave === clave2){
            this._usuarioService.addUsuario(nombre,correo,genero,clave);
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
