System.register(['angular2/core', 'angular2/router', '../usuario.interface', '../apuesta.interface', '../apuestaUser.interface', '../login.service'], function(exports_1, context_1) {
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
    var core_1, router_1, usuario_interface_1, apuesta_interface_1, apuestaUser_interface_1, login_service_1;
    var addApuestaComponent;
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
            },
            function (apuesta_interface_1_1) {
                apuesta_interface_1 = apuesta_interface_1_1;
            },
            function (apuestaUser_interface_1_1) {
                apuestaUser_interface_1 = apuestaUser_interface_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            addApuestaComponent = (function () {
                function addApuestaComponent(_UsuarioService, _Router, _ApuestaService, _ApuestaUserService, _LoginService) {
                    this._UsuarioService = _UsuarioService;
                    this._Router = _Router;
                    this._ApuestaService = _ApuestaService;
                    this._ApuestaUserService = _ApuestaUserService;
                    this._LoginService = _LoginService;
                }
                addApuestaComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                addApuestaComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                addApuestaComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                addApuestaComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                addApuestaComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                addApuestaComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                addApuestaComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                addApuestaComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                addApuestaComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                addApuestaComponent.prototype.anadirAp = function (partido, equipo, karma) {
                    console.log(partido, equipo, karma);
                    if (karma == "" || karma == "0") {
                        alert("Es necesario apostar una cantidad minima de karma");
                    }
                    else {
                        this._ApuestaService.anadirApuesta(partido, equipo, karma).subscribe(function (response) { alert("Apostado " + karma + " karma al equipo " + equipo.nombre); });
                        this._ApuestaUserService.anadirApuestaUser({ id: null, partido: partido, equipo: equipo, karma: karma }, this._LoginService.user);
                    }
                };
                addApuestaComponent.prototype.ngAfterContentInit = function () {
                    var e1 = document.createElement("script");
                    e1.type = "text/javascript";
                    e1.src = "js/select2.min.js";
                    document.head.appendChild(e1);
                    var e1 = document.createElement("script");
                    e1.type = "text/javascript";
                    e1.src = "js/jS.js";
                    document.head.appendChild(e1);
                };
                addApuestaComponent = __decorate([
                    core_1.Component({
                        selector: 'anadirApuesta',
                        //templateUrl: 'app/admin/add_jugador.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, router_1.Router, apuesta_interface_1.ApuestaService, apuestaUser_interface_1.ApuestaUserService, login_service_1.LoginService])
                ], addApuestaComponent);
                return addApuestaComponent;
            }());
            exports_1("addApuestaComponent", addApuestaComponent);
        }
    }
});
//# sourceMappingURL=add_apuesta.component.js.map