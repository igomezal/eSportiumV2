import {Component,Injectable,AfterContentInit} from 'angular2/core';
import {Usuario,UsuarioService} from './usuario.interface';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {LoginService} from './login.service';
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";
import {ImageService, Image} from './Image.service';

@Component({
  selector: 'editarperfil',
  templateUrl: 'app/editarperfil.component.html'
})

export class editarPerfil {

  //Subir imágenes
  private description: string = this._LoginService.user.name;
	private file: File;

	private images: String[] = [];

  sesion:Usuario;
  private exito:boolean = false;
  private error:boolean = false;
  constructor (private _usuarioService: UsuarioService, private _router:Router, private _LoginService: LoginService, private _ImageService: ImageService){}

  ngOnInit(){
    /*this._usuarioService.getSesion().subscribe(
      usuario =>this.sesion = usuario,
      error => console.log(error)
    );*/
    /*this._ImageService.loadImages().subscribe(
      images => this.images = images,
      error => console.log(error)
    );*/
  }

  //Imagenes
  selectFile($event) {
		this.file = $event.target.files[0];
		console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
	}

	upload() {

		console.debug("Uploading file...");

		if (this.file == null || this.description == null){
			console.error("You have to select a file and set a description.");
			return;
		}

		let formData = new FormData();

		formData.append("description", this.description);
		formData.append("file",  this.file);

		let multipartItem = new MultipartItem(new MultipartUploader({url: '/usuarios/image/upload/'+this._LoginService.user.id}));

		multipartItem.formData = formData;

		multipartItem.callback = (data, status, headers) => {

			if (status == 200){
				console.debug("File has been uploaded");
				/*this._ImageService.loadImages().subscribe(
          imgs => this.images = imgs,
          error => console.log(error)
        );*/
			} else {
				console.error("Error uploading file");
			}
		};

		multipartItem.upload();

    return this.images;
	}
  //Fin imágenes

  editar(user: Usuario, nombre: string, Clave1:string, Clave2: string, foto:string,correo:string,genero:string){
    let contra = Clave1;
    this.upload();
    if (Clave1 == "" && Clave2 == ""){
      //Sin cambiar la contraseña
      contra = null;
    }
    if( Clave1 != Clave2) {
      alert("Las contraseñas no coinciden");
    }else{

      this._usuarioService.editarDatos(user, nombre, contra, foto, correo, genero).subscribe(
        response => {alert("Usuario editado correctamente");
          this._LoginService.refresh().subscribe(
            response => {console.log("loginService actualizado / User");}
          )}
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
