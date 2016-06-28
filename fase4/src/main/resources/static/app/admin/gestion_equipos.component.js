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
    var gestionEquiposComponent;
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
            gestionEquiposComponent = (function () {
                function gestionEquiposComponent(_UsuarioService, _EquipoService, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._EquipoService = _EquipoService;
                    this._Router = _Router;
                    this.equipos = [];
                }
                gestionEquiposComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._EquipoService.getEquipos().subscribe(function (equipos) { return _this.equipos = equipos; }, function (error) { return console.log(error); });
                };
                gestionEquiposComponent.prototype.refresh = function () {
                    var _this = this;
                    this._EquipoService.getEquipos().subscribe(function (equipos) { return _this.equipos = equipos; }, function (error) { return console.log(error); });
                };
                gestionEquiposComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                gestionEquiposComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                gestionEquiposComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                gestionEquiposComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                gestionEquiposComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                gestionEquiposComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                gestionEquiposComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                gestionEquiposComponent.prototype.gotoEditEquipo = function (equipo) {
                    var link = ['EditarEquipo', { id: equipo.id }];
                    this._Router.navigate(link);
                };
                gestionEquiposComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                gestionEquiposComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                gestionEquiposComponent.prototype.gotoaddEquipo = function () {
                    this._Router.navigate(['AddEquipo']);
                };
                gestionEquiposComponent.prototype.borrarEquipo = function (equipo) {
                    var _this = this;
                    this._EquipoService.eliminar(equipo.id).subscribe(function (respuesta) { return _this.refresh(); }, function (error) { return console.log(error); });
                };
                gestionEquiposComponent = __decorate([
                    core_1.Component({
                        selector: 'gestionEquipos',
                        templateUrl: 'app/admin/gestion_equipos.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, equipo_interface_1.EquipoService, router_1.Router])
                ], gestionEquiposComponent);
                return gestionEquiposComponent;
            }());
            exports_1("gestionEquiposComponent", gestionEquiposComponent);
        }
    }
});
//# sourceMappingURL=gestion_equipos.component.js.map