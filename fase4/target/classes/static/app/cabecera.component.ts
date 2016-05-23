import {Component, AfterContentInit ,OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Usuario,UsuarioService} from './usuario.interface';


@Component({
  selector: 'cabecera',
  templateUrl: 'app/cabecera.component.html' //Por qué tengo que poner app/header.. ??? header.ts y header.html están a la misma altura
})

export class CabeceraComponent implements OnInit{

  sesion:Usuario;
  admin:boolean;



  constructor(private _router:Router,private _usuarioService: UsuarioService){

  }

  ngOnInit(){
    this._usuarioService.getSesion().subscribe(
      usuario => this.sesion = usuario,
      error => console.log(error)
    );

    this._usuarioService.getAdmin().subscribe(
      admin => this.admin = admin,
      error => console.log(error)
    );
  }

  goToInicio(){
    this._router.navigate(['Inicio']);
  }

  goToFinalizados(){
    this._router.navigate(['Finalizados']);
  }

  goToRegistro(){
    this._router.navigate(['Registro']);
  }

  goToUsuario(){
    this._router.navigate(['Perfil']);
  }

  goToAdmin(){
    this._router.navigate(['Admin']);
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
  salir(){
    this._usuarioService.setSesion(undefined);
    this._usuarioService.setAdmin(false);
    this.goToInicio();
  }

  ngAfterContentInit() {
       var h = document.createElement("script");
       h.type = "text/javascript";
       h.src = "js/main.js";
       document.head.appendChild(h);
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

   getKarmaFromSession(usuario: Usuario){
     var karm = this._usuarioService.getKarma(usuario);
     return karm;
   }

}
