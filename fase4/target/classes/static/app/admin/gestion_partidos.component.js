System.register(['angular2/core', 'angular2/router', '../partido.service', '../usuario.interface', '../apuestaUser.interface'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, partido_service_1, usuario_interface_1, apuestaUser_interface_1;
    var gestionPartidosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (partido_service_1_1) {
                partido_service_1 = partido_service_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            },
            function (apuestaUser_interface_1_1) {
                apuestaUser_interface_1 = apuestaUser_interface_1_1;
            }],
        execute: function() {
            gestionPartidosComponent = (function () {
                function gestionPartidosComponent(_UsuarioService, _Partidoservice, _Router, _ApuestaUserService) {
                    this._UsuarioService = _UsuarioService;
                    this._Partidoservice = _Partidoservice;
                    this._Router = _Router;
                    this._ApuestaUserService = _ApuestaUserService;
                    this.ganadorN = "";
                    this.karma = 0;
                }
                gestionPartidosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.partidos = partidos; }, function (error) { return console.log(error); });
                };
                gestionPartidosComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                gestionPartidosComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                gestionPartidosComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                gestionPartidosComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                gestionPartidosComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                gestionPartidosComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                gestionPartidosComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                gestionPartidosComponent.prototype.gotoEditPartido = function (partido) {
                    var link = ['EditarPartido', { id: partido.id }];
                    this._Router.navigate(link);
                };
                gestionPartidosComponent.prototype.gotoAddPartido = function () {
                    this._Router.navigate(['AddPartido']);
                };
                gestionPartidosComponent.prototype.finalizarPartido = function (partido) {
                    var _this = this;
                    var id_ganador;
                    if (this.ganadorN == "eq1") {
                        id_ganador = partido.equipo1.id;
                        console.log("Ganador: " + partido.equipo1.nombre + " id: " + id_ganador);
                    }
                    if (this.ganadorN == "eq2") {
                        id_ganador = partido.equipo2.id;
                        console.log("Ganador: " + partido.equipo2.nombre + " id: " + id_ganador);
                    }
                    this._Partidoservice.terminarPartido(partido, this.ganadorN).subscribe(function (response) { return _this.refresh(); });
                    (function (error) { return _this.refresh(); });
                    this._Partidoservice.obetenerPuestas(partido).subscribe(function (response) {
                        _this.refresh();
                        for (var i in response.apuestas) {
                            if (response.apuestas[i].equipo.id == id_ganador) {
                                //if de si el equipo es o no por el que has apostado
                                _this._ApuestaUserService.obtenerUserApuestas(response.apuestas[i].id).subscribe(function (response) {
                                    console.log(response[0].apuesta.karma);
                                    _this._UsuarioService.cobrarKarma(response[0].user, response[0].apuesta.karma).subscribe(function (response) {
                                        console.log("eeee");
                                        console.log("El user " + response.name + " ha ganado, sumando un total de " + response.karma + " de karma");
                                        console.log("bbbbbb");
                                    });
                                });
                            }
                        }
                    });
                    this.refresh();
                };
                gestionPartidosComponent.prototype.aDirecto = function (partido) {
                    var _this = this;
                    this._Partidoservice.pasarADirecto(partido).subscribe(function (response) { return _this.refresh(); });
                    this.refresh();
                };
                gestionPartidosComponent.prototype.borrarPartido = function (partido) {
                    var _this = this;
                    this._Partidoservice.eliminarPartido(partido.id).subscribe(function (response) { return _this.refresh(); }, function (error) { return console.log(error); });
                };
                gestionPartidosComponent.prototype.ganadorAdd = function (ganadorN) {
                    this.ganadorN = ganadorN;
                    console.log(ganadorN);
                };
                gestionPartidosComponent.prototype.refresh = function () {
                    var _this = this;
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.partidos = partidos; }, function (error) { return console.log(error); });
                };
                gestionPartidosComponent = __decorate([
                    core_1.Component({
                        selector: 'gestionPartidos',
                        templateUrl: 'app/admin/gestion_partidos.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, partido_service_1.PartidoService, router_1.Router, apuestaUser_interface_1.ApuestaUserService])
                ], gestionPartidosComponent);
                return gestionPartidosComponent;
            })();
            exports_1("gestionPartidosComponent", gestionPartidosComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/gestion_partidos.component.js.map