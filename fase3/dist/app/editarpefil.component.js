System.register(['angular2/core', './usuario.interface', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, usuario_interface_1, router_1;
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
            }],
        execute: function() {
            editarPerfil = (function () {
                function editarPerfil(_usuarioService, _router) {
                    this._usuarioService = _usuarioService;
                    this._router = _router;
                    this.exito = false;
                    this.error = false;
                }
                editarPerfil.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usuarioService.getSesion().subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
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
                        this._usuarioService.editarDatos(clavev, fotov, correov, generov);
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
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, router_1.Router])
                ], editarPerfil);
                return editarPerfil;
            })();
            exports_1("editarPerfil", editarPerfil);
        }
    }
});
//# sourceMappingURL=../../../app/editarpefil.component.js.map