System.register(['angular2/core', '../juego.interface', 'angular2/router', '../usuario.interface'], function(exports_1, context_1) {
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
    var core_1, juego_interface_1, router_1, usuario_interface_1;
    var gestionJuegosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (juego_interface_1_1) {
                juego_interface_1 = juego_interface_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            }],
        execute: function() {
            gestionJuegosComponent = (function () {
                function gestionJuegosComponent(_UsuarioService, _JuegoService, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._JuegoService = _JuegoService;
                    this._Router = _Router;
                }
                gestionJuegosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._JuegoService.getJuegos().subscribe(function (juegos) { return _this.juegos = juegos; }, function (error) { return console.log(error); });
                };
                gestionJuegosComponent.prototype.refresh = function () {
                    var _this = this;
                    this._JuegoService.getJuegos().subscribe(function (juegos) { return _this.juegos = juegos; }, function (error) { return console.log(error); });
                };
                gestionJuegosComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                gestionJuegosComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                gestionJuegosComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                gestionJuegosComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                gestionJuegosComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                gestionJuegosComponent.prototype.gotoEditJuego = function (juego) {
                    var link = ['EditarJuego', { id: juego.id }];
                    this._Router.navigate(link);
                };
                gestionJuegosComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                gestionJuegosComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                gestionJuegosComponent.prototype.gotoaddJuego = function () {
                    this._Router.navigate(['AddJuego']);
                };
                gestionJuegosComponent.prototype.borrarJuego = function (juego) {
                    var _this = this;
                    this._JuegoService.eliminar(juego.id, juego.nombre, juego.siglas).subscribe(function (respuesta) { return _this.refresh(); }, function (error) { return console.log(error); });
                };
                gestionJuegosComponent = __decorate([
                    core_1.Component({
                        selector: 'gestionJuegos',
                        templateUrl: 'app/admin/gestion_juegos.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, juego_interface_1.JuegoService, router_1.Router])
                ], gestionJuegosComponent);
                return gestionJuegosComponent;
            }());
            exports_1("gestionJuegosComponent", gestionJuegosComponent);
        }
    }
});
//# sourceMappingURL=gestion_juegos.component.js.map