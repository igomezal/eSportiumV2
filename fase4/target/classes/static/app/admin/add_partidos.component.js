System.register(['angular2/core', '../partido.service', '../juego.interface', 'angular2/router', '../usuario.interface'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, partido_service_1, juego_interface_1, router_1, usuario_interface_1;
    var addPartidoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (partido_service_1_1) {
                partido_service_1 = partido_service_1_1;
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
            addPartidoComponent = (function () {
                function addPartidoComponent(_UsuarioService, _PartidoService, _JuegoService, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._PartidoService = _PartidoService;
                    this._JuegoService = _JuegoService;
                    this._Router = _Router;
                }
                addPartidoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._JuegoService.getJuegos().subscribe(function (juegos) { return _this.juegos = juegos; }, function (error) { return console.log(error); });
                };
                addPartidoComponent.prototype.anadirP = function (juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, condicion, estado) {
                    if (juego == "" || eq1 == "" || logo1 == "" || porcen1 == "" || eq2 == "" || logo2 == "" || porcen2 == "" || url == "" || condicion == "" || estado == "") {
                        alert("Datos incorrectos");
                    }
                    else {
                        this._PartidoService.anadirPartido(juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, condicion, estado);
                        alert("Partido creado correctamente");
                    }
                };
                addPartidoComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                addPartidoComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                addPartidoComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                addPartidoComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                addPartidoComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                addPartidoComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                addPartidoComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                addPartidoComponent = __decorate([
                    core_1.Component({
                        selector: 'addPartido',
                        templateUrl: 'app/admin/add_partidos.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, partido_service_1.PartidoService, juego_interface_1.JuegoService, router_1.Router])
                ], addPartidoComponent);
                return addPartidoComponent;
            })();
            exports_1("addPartidoComponent", addPartidoComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/add_partidos.component.js.map