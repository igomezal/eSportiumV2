System.register(['angular2/core', 'angular2/router', './partido.service', './usuario.interface', './cabecera.component', './equipo.interface', './login.service', './apuestaUser.interface', './apuesta.interface'], function(exports_1, context_1) {
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
    var core_1, router_1, partido_service_1, usuario_interface_1, cabecera_component_1, equipo_interface_1, login_service_1, apuestaUser_interface_1, apuesta_interface_1;
    var PartidoComponent;
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
            function (cabecera_component_1_1) {
                cabecera_component_1 = cabecera_component_1_1;
            },
            function (equipo_interface_1_1) {
                equipo_interface_1 = equipo_interface_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (apuestaUser_interface_1_1) {
                apuestaUser_interface_1 = apuestaUser_interface_1_1;
            },
            function (apuesta_interface_1_1) {
                apuesta_interface_1 = apuesta_interface_1_1;
            }],
        execute: function() {
            PartidoComponent = (function () {
                function PartidoComponent(_router, _usuarioService, _partidoService, _routeParams, loginService, _equipoService, _ApuestaUserService, _ApuestaService) {
                    this._router = _router;
                    this._usuarioService = _usuarioService;
                    this._partidoService = _partidoService;
                    this._routeParams = _routeParams;
                    this.loginService = loginService;
                    this._equipoService = _equipoService;
                    this._ApuestaUserService = _ApuestaUserService;
                    this._ApuestaService = _ApuestaService;
                }
                PartidoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._partidoService.getPartido(id).subscribe(function (partido) {
                        _this.partido = partido;
                        _this.getEquipo1(_this.partido.equipo1.id);
                        _this.getEquipo2(_this.partido.equipo2.id);
                    }, function (error) { return console.log(error); });
                    this._usuarioService.getSesion().subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
                    this._usuarioService.getAdmin().subscribe(function (admin) { return _this.admin = admin; }, function (error) { return console.log(error); });
                };
                PartidoComponent.prototype.login = function (nombre, clave) {
                    var _this = this;
                    this._usuarioService.login(nombre, clave).subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
                    this._usuarioService.getAdmin().subscribe(function (admin) { return _this.admin = admin; }, function (error) { return console.log(error); });
                    console.log(this.sesion);
                };
                PartidoComponent.prototype.goToRegistro = function () {
                    this._router.navigate(['Registro']);
                };
                PartidoComponent.prototype.getEquipo1 = function (id) {
                    var _this = this;
                    console.log("Get Equipo1");
                    this._equipoService.getEquipo(id).subscribe(function (equipo) { return _this.equipo1 = equipo; }, function (error) { return console.log(error); });
                };
                PartidoComponent.prototype.getEquipo2 = function (id) {
                    var _this = this;
                    this._equipoService.getEquipo(id).subscribe(function (equipo) { return _this.equipo2 = equipo; }, function (error) { return console.log(error); });
                };
                PartidoComponent.prototype.actualizar = function () {
                    var _this = this;
                    this._usuarioService.getSesion().subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
                    this._usuarioService.getAdmin().subscribe(function (admin) { return _this.admin = admin; }, function (error) { return console.log(error); });
                };
                /*apostar(apuesta:number){
                    if(this.sesion.karma>=apuesta){
                        this._usuarioService.apostar(this.partido,apuesta);
                    }else{
                        alert("Karma insuficiente");
                    }
                }*/
                PartidoComponent.prototype.logInSpring = function (event, user, pass) {
                    event.preventDefault();
                    this.loginService.logIn(user, pass).subscribe(function (user) { return console.log(user); }, function (error) { return alert("Invalid user or password"); });
                };
                PartidoComponent.prototype.logOutSpring = function () {
                    this.loginService.logOut().subscribe(function (response) { }, function (error) { return console.log("Error when trying to log out: " + error); });
                };
                PartidoComponent.prototype.anadirAp = function (partido, equipo, karma) {
                    var _this = this;
                    console.log(partido, equipo, karma);
                    if (karma == "" || karma == "0" || this.loginService.user.karma < parseInt(karma)) {
                        alert("Es necesario apostar una cantidad de karma entre 0 y " + this.loginService.user.karma);
                    }
                    else {
                        this._ApuestaService.anadirApuesta(partido, equipo, karma).subscribe(function (response) {
                            alert("Apostado " + karma + " karma al equipo " + equipo.nombre);
                            _this._ApuestaUserService.anadirApuestaUser(response, _this.loginService.user).subscribe(function (response) {
                                console.log("usuario con apuesta añadido");
                                _this._usuarioService.quitarKarma(_this.loginService.user, parseInt(karma)).subscribe(function (response) { console.log("Karma quitado"); });
                            });
                        });
                    }
                };
                PartidoComponent = __decorate([
                    core_1.Component({
                        selector: 'partido-concreto',
                        templateUrl: 'app/partido.component.html',
                        directives: [cabecera_component_1.CabeceraComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, usuario_interface_1.UsuarioService, partido_service_1.PartidoService, router_1.RouteParams, login_service_1.LoginService, equipo_interface_1.EquipoService, apuestaUser_interface_1.ApuestaUserService, apuesta_interface_1.ApuestaService])
                ], PartidoComponent);
                return PartidoComponent;
            }());
            exports_1("PartidoComponent", PartidoComponent);
        }
    }
});
//# sourceMappingURL=partido.component.js.map