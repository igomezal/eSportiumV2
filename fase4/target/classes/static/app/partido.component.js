System.register(['angular2/core', 'angular2/router', './partido.service', './usuario.interface', './cabecera.component', './login.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, partido_service_1, usuario_interface_1, cabecera_component_1, login_service_1;
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
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            PartidoComponent = (function () {
                function PartidoComponent(_router, _usuarioService, _partidoService, _routeParams, loginService) {
                    this._router = _router;
                    this._usuarioService = _usuarioService;
                    this._partidoService = _partidoService;
                    this._routeParams = _routeParams;
                    this.loginService = loginService;
                }
                PartidoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._partidoService.getPartido(id).subscribe(function (partido) { return _this.partido = partido; }, function (error) { return console.log(error); });
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
                PartidoComponent.prototype.actualizar = function () {
                    var _this = this;
                    this._usuarioService.getSesion().subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
                    this._usuarioService.getAdmin().subscribe(function (admin) { return _this.admin = admin; }, function (error) { return console.log(error); });
                };
                PartidoComponent.prototype.apostar = function (apuesta) {
                    if (this.sesion.karma >= apuesta) {
                        this._usuarioService.apostar(this.partido, apuesta);
                    }
                    else {
                        alert("Karma insuficiente");
                    }
                };
                PartidoComponent.prototype.logInSpring = function (event, user, pass) {
                    event.preventDefault();
                    this.loginService.logIn(user, pass).subscribe(function (user) { return console.log(user); }, function (error) { return alert("Invalid user or password"); });
                };
                PartidoComponent.prototype.logOutSpring = function () {
                    this.loginService.logOut().subscribe(function (response) { }, function (error) { return console.log("Error when trying to log out: " + error); });
                };
                PartidoComponent = __decorate([
                    core_1.Component({
                        selector: 'partido-concreto',
                        templateUrl: 'app/partido.component.html',
                        directives: [cabecera_component_1.CabeceraComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, usuario_interface_1.UsuarioService, partido_service_1.PartidoService, router_1.RouteParams, login_service_1.LoginService])
                ], PartidoComponent);
                return PartidoComponent;
            })();
            exports_1("PartidoComponent", PartidoComponent);
        }
    }
});
//# sourceMappingURL=../../../app/partido.component.js.map