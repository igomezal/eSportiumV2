System.register(['angular2/core', '../jugador.interface', 'angular2/router', '../usuario.interface'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jugador_interface_1, router_1, usuario_interface_1;
    var gestionJugadoresComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jugador_interface_1_1) {
                jugador_interface_1 = jugador_interface_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            }],
        execute: function() {
            gestionJugadoresComponent = (function () {
                function gestionJugadoresComponent(_UsuarioService, _JugadorService, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._JugadorService = _JugadorService;
                    this._Router = _Router;
                    this.jugadores = [];
                }
                gestionJugadoresComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._JugadorService.getJugadores().subscribe(function (jugador) { return _this.jugadores = jugador; }, function (error) { return console.log(error); });
                };
                gestionJugadoresComponent.prototype.refresh = function () {
                    var _this = this;
                    this._JugadorService.getJugadores().subscribe(function (jugador) { return _this.jugadores = jugador; }, function (error) { return console.log(error); });
                };
                gestionJugadoresComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                gestionJugadoresComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                gestionJugadoresComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                gestionJugadoresComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                gestionJugadoresComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                gestionJugadoresComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                gestionJugadoresComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                gestionJugadoresComponent.prototype.gotoEditJugador = function (jugador) {
                    var link = ['EditarJugador', { id: jugador.id }];
                    this._Router.navigate(link);
                };
                gestionJugadoresComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                gestionJugadoresComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                gestionJugadoresComponent.prototype.gotoaddJugador = function () {
                    this._Router.navigate(['AddJugador']);
                };
                gestionJugadoresComponent.prototype.borrarJugador = function (jugador) {
                    var _this = this;
                    this._JugadorService.eliminar(jugador.id).subscribe(function (respuesta) { return _this.refresh(); }, function (error) { return console.log(error); });
                };
                gestionJugadoresComponent = __decorate([
                    core_1.Component({
                        selector: 'gestionJugadores',
                        templateUrl: 'app/admin/gestion_jugadores.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, jugador_interface_1.JugadorService, router_1.Router])
                ], gestionJugadoresComponent);
                return gestionJugadoresComponent;
            })();
            exports_1("gestionJugadoresComponent", gestionJugadoresComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/gestion_jugadores.component.js.map