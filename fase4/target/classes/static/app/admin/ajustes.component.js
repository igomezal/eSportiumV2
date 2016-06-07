System.register(['angular2/core', 'angular2/router', '../usuario.interface'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, usuario_interface_1;
    var ajustesComponent;
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
            }],
        execute: function() {
            ajustesComponent = (function () {
                function ajustesComponent(_Router, _UsuarioService) {
                    this._Router = _Router;
                    this._UsuarioService = _UsuarioService;
                }
                ajustesComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                ajustesComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                ajustesComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                ajustesComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                ajustesComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                ajustesComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                ajustesComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                ajustesComponent = __decorate([
                    core_1.Component({
                        selector: 'ajustes',
                        templateUrl: 'app/admin/ajustes.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, usuario_interface_1.UsuarioService])
                ], ajustesComponent);
                return ajustesComponent;
            })();
            exports_1("ajustesComponent", ajustesComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/ajustes.component.js.map