System.register(['angular2/core', 'angular2/router', './usuario.interface', './login.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, usuario_interface_1, login_service_1;
    var CabeceraComponent;
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
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            CabeceraComponent = (function () {
                function CabeceraComponent(_router, _usuarioService, loginService) {
                    this._router = _router;
                    this._usuarioService = _usuarioService;
                    this.loginService = loginService;
                }
                CabeceraComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usuarioService.getSesion().subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
                    this._usuarioService.getAdmin().subscribe(function (admin) { return _this.admin = admin; }, function (error) { return console.log(error); });
                };
                CabeceraComponent.prototype.goToInicio = function () {
                    this._router.navigate(['Inicio']);
                };
                CabeceraComponent.prototype.goToFinalizados = function () {
                    this._router.navigate(['Finalizados']);
                };
                CabeceraComponent.prototype.goToRegistro = function () {
                    this._router.navigate(['Registro']);
                };
                CabeceraComponent.prototype.goToUsuario = function () {
                    this._router.navigate(['Perfil']);
                };
                CabeceraComponent.prototype.goToAdmin = function () {
                    this._router.navigate(['Admin']);
                };
                CabeceraComponent.prototype.login = function (nombre, clave) {
                    var _this = this;
                    this._usuarioService.login(nombre, clave).subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
                    this._usuarioService.getAdmin().subscribe(function (admin) { return _this.admin = admin; }, function (error) { return console.log(error); });
                    console.log(this.sesion);
                };
                CabeceraComponent.prototype.salir = function () {
                    this._usuarioService.setSesion(undefined);
                    this._usuarioService.setAdmin(false);
                    this.goToInicio();
                };
                CabeceraComponent.prototype.ngAfterContentInit = function () {
                    var h = document.createElement("script");
                    h.type = "text/javascript";
                    h.src = "js/main.js";
                    document.head.appendChild(h);
                };
                CabeceraComponent.prototype.actualizar = function () {
                    var _this = this;
                    this._usuarioService.getSesion().subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
                    this._usuarioService.getAdmin().subscribe(function (admin) { return _this.admin = admin; }, function (error) { return console.log(error); });
                };
                CabeceraComponent.prototype.getKarmaFromSession = function (usuario) {
                    var karm = this._usuarioService.getKarma(usuario);
                    return karm;
                };
                CabeceraComponent.prototype.logInSpring = function (event, user, pass) {
                    event.preventDefault();
                    this.loginService.logIn(user, pass).subscribe(function (user) { return console.log(user); }, function (error) { return alert("Invalid user or password"); });
                };
                CabeceraComponent.prototype.logOutSpring = function () {
                    this.loginService.logOut().subscribe(function (response) { }, function (error) { return console.log("Error when trying to log out: " + error); });
                };
                CabeceraComponent = __decorate([
                    core_1.Component({
                        selector: 'cabecera',
                        templateUrl: 'app/cabecera.component.html' //Por qué tengo que poner app/header.. ??? header.ts y header.html están a la misma altura
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, usuario_interface_1.UsuarioService, login_service_1.LoginService])
                ], CabeceraComponent);
                return CabeceraComponent;
            })();
            exports_1("CabeceraComponent", CabeceraComponent);
        }
    }
});
//# sourceMappingURL=../../../app/cabecera.component.js.map