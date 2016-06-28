import {Component} from 'angular2/core';
import {Equipo, EquipoService} from '../equipo.interface';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {UsuarioService} from '../usuario.interface';
import {LoginService} from '../login.service';
import {MultipartItem} from "../multipart-upload/multipart-item";
import {MultipartUploader} from "../multipart-upload/multipart-uploader";
import {ImageService, Image} from '../Image.service';

@Component({
  selector: 'editEquipo',
  templateUrl: 'app/admin/edit_equipo.html'
})

export class editEquipoComponent {

  constructor(private _UsuarioService: UsuarioService, private _EquipoService: EquipoService, private _routeParams: RouteParams,
     private _Router: Router, private _LoginService: LoginService) { }

  private equipo:Equipo;
  //Subir imágenes
  private description: string = this._LoginService.user.name;
  private file: File;

  private images: String[] = [];

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._EquipoService.getEquipo(id).subscribe(
      equipo => this.equipo = equipo,
      error => console.log(Error)
    );
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

    let multipartItem = new MultipartItem(new MultipartUploader({url: '/equipos/image/upload/'+(this.equipo.id)}));

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

    //return this.images;
  }
  //Fin imágenes

  editar(nombre: string) {
    let logo ="temp";
    this.upload();
    if (nombre == "") {
      alert("Datos incorrectos");
    } else {
      this._EquipoService.editar(this.equipo.id, nombre, logo).subscribe(
        respuesta => {alert("Equipo editado correctamente");
        }
      );
    }
  }

  eliminar(id: number) {
      this._EquipoService.eliminar(id).subscribe(
      response => { alert('Se ha eliminado el equipo seleccionado.'); this.gotoGestionEquipos()},
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

  cerrarSesion() {
    this._UsuarioService.setSesion(undefined);
    this._UsuarioService.setAdmin(false);
    this.gotoMain();
  }

}
