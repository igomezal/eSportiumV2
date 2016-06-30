System.register(['angular2/core', 'angular2/router', '../usuario.interface'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, usuario_interface_1;
    var gestionUsuariosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            }],
        execute: function() {
            gestionUsuariosComponent = (function () {
                function gestionUsuariosComponent(_UsuarioService, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._Router = _Router;
                }
                gestionUsuariosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._UsuarioService.getUsuarios().subscribe(function (usuarios) { return _this.usuarios = usuarios; }, function (error) { return console.log(error); });
                };
                gestionUsuariosComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                gestionUsuariosComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                gestionUsuariosComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                gestionUsuariosComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                gestionUsuariosComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                gestionUsuariosComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                gestionUsuariosComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                gestionUsuariosComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                gestionUsuariosComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                gestionUsuariosComponent.prototype.gotoEditUsuario = function (usuario) {
                    var link = ['EditUsuario', { id: usuario.id }];
                    this._Router.navigate(link);
                };
                gestionUsuariosComponent.prototype.borrarUsuario = function (usuario) {
                    this._UsuarioService.eliminarUsuario(usuario.id).subscribe(function (response) { return undefined; }, function (error) { return alert("Error al borrar"); });
                };
                gestionUsuariosComponent.prototype.hacerAdmin = function (usuario) {
                    var r = confirm("¿Quieres hacer Administrador a este usuario?");
                    if (r == true) {
                        console.log(usuario);
                        this._UsuarioService.doAdmin(usuario).subscribe(function (response) { return alert("Privilegios actualizados"); }, function (error) {
                            console.log(error);
                            alert("Este usuario no existe o ya es Administrador");
                        });
                    }
                };
                gestionUsuariosComponent = __decorate([
                    core_1.Component({
                        selector: 'gestionUsuarios',
                        templateUrl: 'app/admin/gestion_usuarios.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, router_1.Router])
                ], gestionUsuariosComponent);
                return gestionUsuariosComponent;
            }());
            exports_1("gestionUsuariosComponent", gestionUsuariosComponent);
        }
    }
});
//# sourceMappingURL=gestion_usuarios.component.js.map