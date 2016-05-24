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
    var homeComponent;
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
            homeComponent = (function () {
                function homeComponent(_UsuarioService, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._Router = _Router;
                }
                homeComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                homeComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                homeComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                homeComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                homeComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                homeComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                homeComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                homeComponent = __decorate([
                    core_1.Component({
                        selector: 'adminhome',
                        templateUrl: 'app/admin/home.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, router_1.Router])
                ], homeComponent);
                return homeComponent;
            }());
            exports_1("homeComponent", homeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map