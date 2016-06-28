System.register(['angular2/core', '../equipo.interface', 'angular2/router', '../usuario.interface', '../login.service', "../multipart-upload/multipart-item", "../multipart-upload/multipart-uploader", '../Image.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, equipo_interface_1, router_1, usuario_interface_1, login_service_1, multipart_item_1, multipart_uploader_1, Image_service_1;
    var addEquipoComponent;
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
            },
            function (Image_service_1_1) {
                Image_service_1 = Image_service_1_1;
            }],
        execute: function() {
            addEquipoComponent = (function () {
                function addEquipoComponent(_UsuarioService, _EquipoService, _Router, _LoginService, _ImageService) {
                    this._UsuarioService = _UsuarioService;
                    this._EquipoService = _EquipoService;
                    this._Router = _Router;
                    this._LoginService = _LoginService;
                    this._ImageService = _ImageService;
                    //Subir imágenes
                    this.description = this._LoginService.user.name;
                    this.images = [];
                }
                addEquipoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._EquipoService.getEquipos().subscribe(function (equipos) { return _this.equipos = equipos; }, function (error) { return console.log(error); });
                };
                //Imagenes
                addEquipoComponent.prototype.selectFile = function ($event) {
                    this.file = $event.target.files[0];
                    console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
                };
                addEquipoComponent.prototype.upload = function () {
                    console.debug("Uploading file...");
                    if (this.file == null || this.description == null) {
                        console.error("You have to select a file and set a description.");
                        return;
                    }
                    var formData = new FormData();
                    formData.append("description", this.description);
                    formData.append("file", this.file);
                    var multipartItem = new multipart_item_1.MultipartItem(new multipart_uploader_1.MultipartUploader({ url: '/equipos/image/upload/' + (this.equipos.length + 1) }));
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
                    return this.images;
                };
                //Fin imágenes
                addEquipoComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                addEquipoComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                addEquipoComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                addEquipoComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                addEquipoComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                addEquipoComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                addEquipoComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                addEquipoComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                addEquipoComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                addEquipoComponent.prototype.anadir = function (nombre, logo) {
                    var _this = this;
                    this._EquipoService.anadirEquipo(nombre, logo).subscribe(function (response) {
                        console.log(response);
                        _this.upload();
                    });
                    this.gotoGestionEquipos();
                };
                addEquipoComponent = __decorate([
                    core_1.Component({
                        selector: 'anadirEquipos',
                        templateUrl: 'app/admin/add_equipo.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, equipo_interface_1.EquipoService, router_1.Router, login_service_1.LoginService, Image_service_1.ImageService])
                ], addEquipoComponent);
                return addEquipoComponent;
            })();
            exports_1("addEquipoComponent", addEquipoComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/add_equipo.component.js.map