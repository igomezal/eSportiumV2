System.register(['angular2/core', '../equipo.interface', '../jugador.interface', 'angular2/router', '../usuario.interface'], function(exports_1, context_1) {
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
    var core_1, equipo_interface_1, jugador_interface_1, router_1, usuario_interface_1;
    var addJugadorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (equipo_interface_1_1) {
                equipo_interface_1 = equipo_interface_1_1;
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
            addJugadorComponent = (function () {
                function addJugadorComponent(_UsuarioService, _EquipoService, _JugadorService, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._EquipoService = _EquipoService;
                    this._JugadorService = _JugadorService;
                    this._Router = _Router;
                    this.equipos = [];
                    this.equipoN = 0;
                }
                addJugadorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._EquipoService.getEquipos().subscribe(function (equipos) { return _this.equipos = equipos; }, function (error) { return console.log(error); });
                };
                addJugadorComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                addJugadorComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                addJugadorComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                addJugadorComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                addJugadorComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                addJugadorComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                addJugadorComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                addJugadorComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                addJugadorComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                addJugadorComponent.prototype.anadir = function (nombre, posicion, media) {
                    var _this = this;
                    console.log(nombre, posicion, media, this.equipoN);
                    if ((typeof (this.equipoN) === "undefined") || (this.equipoN === 0) || (nombre === "") || (posicion === "")) {
                        alert("Completa los campos correctamente");
                    }
                    else {
                        this._JugadorService.anadirJugador(nombre, posicion, media, this.equipoN).subscribe(function (response) { alert("Añadido jugador " + nombre); _this.gotoGestionJugadores(); });
                    }
                };
                addJugadorComponent.prototype.seleccion = function (equipoN) {
                    this.equipoN = equipoN;
                    console.log(equipoN);
                };
                addJugadorComponent.prototype.ngAfterContentInit = function () {
                    var e1 = document.createElement("script");
                    e1.type = "text/javascript";
                    e1.src = "js/select2.min.js";
                    document.head.appendChild(e1);
                    var e1 = document.createElement("script");
                    e1.type = "text/javascript";
                    e1.src = "js/jS.js";
                    document.head.appendChild(e1);
                };
                addJugadorComponent = __decorate([
                    core_1.Component({
                        selector: 'anadirJugador',
                        templateUrl: 'app/admin/add_jugador.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, equipo_interface_1.EquipoService, jugador_interface_1.JugadorService, router_1.Router])
                ], addJugadorComponent);
                return addJugadorComponent;
            }());
            exports_1("addJugadorComponent", addJugadorComponent);
        }
    }
});
//# sourceMappingURL=add_jugador.component.js.map