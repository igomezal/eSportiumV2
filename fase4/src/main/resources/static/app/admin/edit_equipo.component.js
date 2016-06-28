System.register(['angular2/core', '../equipo.interface', 'angular2/router', '../usuario.interface', '../login.service', "../multipart-upload/multipart-item", "../multipart-upload/multipart-uploader"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, equipo_interface_1, router_1, usuario_interface_1, login_service_1, multipart_item_1, multipart_uploader_1;
    var editEquipoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (equipo_interface_1_1) {
                equipo_interface_1 = equipo_interface_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (multipart_item_1_1) {
                multipart_item_1 = multipart_item_1_1;
            },
            function (multipart_uploader_1_1) {
                multipart_uploader_1 = multipart_uploader_1_1;
            }],
        execute: function() {
            editEquipoComponent = (function () {
                function editEquipoComponent(_UsuarioService, _EquipoService, _routeParams, _Router, _LoginService) {
                    this._UsuarioService = _UsuarioService;
                    this._EquipoService = _EquipoService;
                    this._routeParams = _routeParams;
                    this._Router = _Router;
                    this._LoginService = _LoginService;
                    //Subir imágenes
                    this.description = this._LoginService.user.name;
                    this.images = [];
                }
                editEquipoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._EquipoService.getEquipo(id).subscribe(function (equipo) { return _this.equipo = equipo; }, function (error) { return console.log(Error); });
                };
                //Imagenes
                editEquipoComponent.prototype.selectFile = function ($event) {
                    this.file = $event.target.files[0];
                    console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
                };
                editEquipoComponent.prototype.upload = function () {
                    console.debug("Uploading file...");
                    if (this.file == null || this.description == null) {
                        console.error("You have to select a file and set a description.");
                        return;
                    }
                    var formData = new FormData();
                    formData.append("description", this.description);
                    formData.append("file", this.file);
                    var multipartItem = new multipart_item_1.MultipartItem(new multipart_uploader_1.MultipartUploader({ url: '/equipos/image/upload/' + (this.equipo.id) }));
                    multipartItem.formData = formData;
                    multipartItem.callback = function (data, status, headers) {
                        if (status == 200) {
                            console.debug("File has been uploaded");
                        }
                        else {
                            console.error("Error uploading file");
                        }
                    };
                    multipartItem.upload();
                    //return this.images;
                };
                //Fin imágenes
                editEquipoComponent.prototype.editar = function (nombre) {
<<<<<<< HEAD
                    var _this = this;
                    var logo = "temp";
=======
                    var logo = "temp";
                    this.upload();
>>>>>>> origin/master
                    if (nombre == "") {
                        alert("Datos incorrectos");
                    }
                    else {
                        this._EquipoService.editar(this.equipo.id, nombre, logo).subscribe(function (respuesta) {
                            alert("Equipo editado correctamente");
                        });
                    }
                };
                editEquipoComponent.prototype.eliminar = function (id) {
                    var _this = this;
                    this._EquipoService.eliminar(id).subscribe(function (response) { alert('Se ha eliminado el equipo seleccionado.'); _this.gotoGestionEquipos(); }, function (error) { return console.log(error); });
                };
                editEquipoComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                editEquipoComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                editEquipoComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                editEquipoComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                editEquipoComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                editEquipoComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                editEquipoComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                editEquipoComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                editEquipoComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                editEquipoComponent = __decorate([
                    core_1.Component({
                        selector: 'editEquipo',
                        templateUrl: 'app/admin/edit_equipo.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, equipo_interface_1.EquipoService, router_1.RouteParams, router_1.Router, login_service_1.LoginService])
                ], editEquipoComponent);
                return editEquipoComponent;
            })();
            exports_1("editEquipoComponent", editEquipoComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/edit_equipo.component.js.map