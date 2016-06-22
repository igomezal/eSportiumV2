System.register(['angular2/core', '../equipo.interface', 'angular2/router', '../usuario.interface'], function(exports_1, context_1) {
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
    var core_1, equipo_interface_1, router_1, usuario_interface_1;
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
            }],
        execute: function() {
            addEquipoComponent = (function () {
                function addEquipoComponent(_UsuarioService, _EquipoService, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._EquipoService = _EquipoService;
                    this._Router = _Router;
                }
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
                    this._EquipoService.anadirEquipo(nombre, logo).subscribe(function (response) { alert("Añadido equipo " + nombre); _this.gotoGestionEquipos(); });
                };
                addEquipoComponent = __decorate([
                    core_1.Component({
                        selector: 'anadirEquipos',
                        templateUrl: 'app/admin/add_equipo.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, equipo_interface_1.EquipoService, router_1.Router])
                ], addEquipoComponent);
                return addEquipoComponent;
            }());
            exports_1("addEquipoComponent", addEquipoComponent);
        }
    }
});
//# sourceMappingURL=add_equipo.component.js.map