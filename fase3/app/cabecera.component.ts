import {Component, AfterContentInit ,OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Usuario,UsuarioService} from './usuario.interface';
import {LoginService} from './login.service';


@Component({
  selector: 'cabecera',
  templateUrl: 'app/cabecera.component.html' //Por qué tengo que poner app/header.. ??? header.ts y header.html están a la misma altura
})

export class CabeceraComponent implements OnInit{

  sesion:Usuario;
  admin:boolean;



  constructor(private _router:Router,private _usuarioService: UsuarioService, private loginService: LoginService){

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
    if(this.loginService.isLogged == true){
      this._usuarioService.refLogged(this.loginService.user.id).subscribe(
        user => this.loginService.setUser(user)
      );
    }
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
     this.loginService.refresh().subscribe(
       response => undefined
     );
   }

   getKarmaFromSession(usuario: Usuario){
     var karm = this._usuarioService.getKarma(usuario);
     return karm;
   }

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
  this.goToInicio();
  }

}
