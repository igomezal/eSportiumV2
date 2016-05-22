System.register(['angular2/core', '../juego.interface', 'angular2/router', '../usuario.interface'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, juego_interface_1, router_1, router_2, usuario_interface_1;
    var editJuegoComponent;
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
                router_2 = router_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            }],
        execute: function() {
            editJuegoComponent = (function () {
                function editJuegoComponent(_UsuarioService, _JuegoService, _routeParams, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._JuegoService = _JuegoService;
                    this._routeParams = _routeParams;
                    this._Router = _Router;
                }
                editJuegoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._JuegoService.getJuego(id).subscribe(function (juego) { return _this.juego = juego; }, function (error) { return console.log(error); });
                };
                editJuegoComponent.prototype.editar = function (nombre, id) {
                    if (nombre == "" || id == "") {
                        alert("Datos incorrectos");
                    }
                    else {
                        this._JuegoService.editar(this.juego.id, nombre, id);
                        this.goToJuegos();
                    }
                };
                editJuegoComponent.prototype.eliminar = function (nombre, id) {
                    if (nombre == "" || id == "") {
                        alert("Datos incorrectos");
                    }
                    else {
                        this._JuegoService.eliminar(nombre, id);
                        this.goToJuegos();
                    }
                };
                editJuegoComponent.prototype.goToJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                editJuegoComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                editJuegoComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                editJuegoComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                editJuegoComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                editJuegoComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                editJuegoComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                editJuegoComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                editJuegoComponent = __decorate([
                    core_1.Component({
                        selector: 'editJuego',
                        templateUrl: 'app/admin/edit_juego.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, juego_interface_1.JuegoService, router_1.RouteParams, router_2.Router])
                ], editJuegoComponent);
                return editJuegoComponent;
            })();
            exports_1("editJuegoComponent", editJuegoComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/edit_juego.component.js.map