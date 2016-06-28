System.register(['angular2/core', 'angular2/router', '../partido.service', '../juego.interface', '../usuario.interface'], function(exports_1, context_1) {
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
    var core_1, router_1, partido_service_1, router_2, juego_interface_1, usuario_interface_1;
    var editPartidoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (partido_service_1_1) {
                partido_service_1 = partido_service_1_1;
            },
            function (juego_interface_1_1) {
                juego_interface_1 = juego_interface_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            }],
        execute: function() {
            editPartidoComponent = (function () {
                function editPartidoComponent(_UsuarioService, _Router, _Partidoservice, _JuegoService, _routeParams) {
                    this._UsuarioService = _UsuarioService;
                    this._Router = _Router;
                    this._Partidoservice = _Partidoservice;
                    this._JuegoService = _JuegoService;
                    this._routeParams = _routeParams;
                }
                editPartidoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._Partidoservice.getPartido(id).subscribe(function (partido) { return _this.partido = partido; }, function (error) { return console.log(error); });
                    this._JuegoService.getJuegos().subscribe(function (juegos) { return _this.juegos = juegos; }, function (error) { return console.log(error); });
                };
                editPartidoComponent.prototype.editar = function (juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, rondas, estado) {
                    if (juego == null || eq1 == null || logo1 == "" || porcen1 == "" || eq2 == null || logo2 == "" || porcen2 == "" || url == "" || rondas == "" || estado == "") {
                        alert("Datos incorrectos");
                    }
                    else {
                        var id = +this._routeParams.get('id');
                        this._Partidoservice.editarPartido(id, juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, rondas, estado);
                    }
                };
                editPartidoComponent.prototype.eliminar = function () {
                    var id = +this._routeParams.get('id');
                    this._Partidoservice.eliminarPartido(id);
                };
                editPartidoComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                editPartidoComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                editPartidoComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                editPartidoComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                editPartidoComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                editPartidoComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                editPartidoComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                editPartidoComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                editPartidoComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                editPartidoComponent = __decorate([
                    core_1.Component({
                        selector: ' editPartido',
                        templateUrl: 'app/admin/edit_partido.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, router_1.Router, partido_service_1.PartidoService, juego_interface_1.JuegoService, router_2.RouteParams])
                ], editPartidoComponent);
                return editPartidoComponent;
            }());
            exports_1("editPartidoComponent", editPartidoComponent);
        }
    }
});
//# sourceMappingURL=edit_partido.component.js.map