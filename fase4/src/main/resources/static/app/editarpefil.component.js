System.register(['angular2/core', './usuario.interface', 'angular2/router', './login.service', "./multipart-upload/multipart-item", "./multipart-upload/multipart-uploader", './Image.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, usuario_interface_1, router_1, login_service_1, multipart_item_1, multipart_uploader_1, Image_service_1;
    var editarPerfil;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            editarPerfil = (function () {
                function editarPerfil(_usuarioService, _router, _LoginService, _ImageService) {
                    this._usuarioService = _usuarioService;
                    this._router = _router;
                    this._LoginService = _LoginService;
                    this._ImageService = _ImageService;
                    //Subir imágenes
                    this.description = this._LoginService.user.name;
                    this.images = [];
                    this.exito = false;
                    this.error = false;
                }
                editarPerfil.prototype.ngOnInit = function () {
                    /*this._usuarioService.getSesion().subscribe(
                      usuario =>this.sesion = usuario,
                      error => console.log(error)
                    );*/
                    /*this._ImageService.loadImages().subscribe(
                      images => this.images = images,
                      error => console.log(error)
                    );*/
                };
                //Imagenes
                editarPerfil.prototype.selectFile = function ($event) {
                    this.file = $event.target.files[0];
                    console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
                };
                editarPerfil.prototype.upload = function () {
                    console.debug("Uploading file...");
                    if (this.file == null || this.description == null) {
                        console.error("You have to select a file and set a description.");
                        return;
                    }
                    var formData = new FormData();
                    formData.append("description", this.description);
                    formData.append("file", this.file);
                    var multipartItem = new multipart_item_1.MultipartItem(new multipart_uploader_1.MultipartUploader({ url: '/usuarios/image/upload/' + this._LoginService.user.id }));
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
                editarPerfil.prototype.editar = function (user, nombre, Clave1, Clave2, foto, correo, genero) {
                    var contra = Clave1;
                    this.upload();
                    if (Clave1 == "" && Clave2 == "") {
                        //Sin cambiar la contraseña
                        contra = null;
                    }
                    if (Clave1 != Clave2) {
                        alert("Las contraseñas no coinciden");
                    }
                    else {
                        this._usuarioService.editarDatos(user, nombre, contra, foto, correo, genero).subscribe(function (response) {
                            alert("Usuario editado correctamente");
                        });
                    }
                };
                editarPerfil.prototype.actualizar = function (foto, correo, genero, clave1, clave2) {
                    if (clave1 === clave2) {
                        var fotov;
                        var correov;
                        var generov;
                        var clavev;
                        if (foto === "") {
                            fotov = this.sesion.foto;
                        }
                        else {
                            fotov = foto;
                        }
                        if (correo === "") {
                            correov = this.sesion.correo;
                        }
                        else {
                            correov = correo;
                        }
                        if (genero === "") {
                            generov = this.sesion.genero;
                        }
                        else {
                            generov = genero;
                        }
                        if (clave1 == "") {
                            clavev = this.sesion.clave;
                        }
                        else {
                            clavev = clave1;
                        }
                        this._usuarioService.editarDatos(this._LoginService.user, "cosas", clavev, fotov, correov, generov);
                        this.exito = true;
                        this.error = false;
                    }
                    else {
                        this.error = true;
                        this.exito = false;
                    }
                };
                editarPerfil.prototype.ngAfterContentInit = function () {
                    var e1 = document.createElement("script");
                    e1.type = "text/javascript";
                    e1.src = "js/jS.js";
                    document.head.appendChild(e1);
                };
                editarPerfil = __decorate([
                    core_1.Component({
                        selector: 'editarperfil',
                        templateUrl: 'app/editarperfil.component.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, router_1.Router, login_service_1.LoginService, Image_service_1.ImageService])
                ], editarPerfil);
                return editarPerfil;
            })();
            exports_1("editarPerfil", editarPerfil);
        }
    }
});
//# sourceMappingURL=../../../app/editarpefil.component.js.map