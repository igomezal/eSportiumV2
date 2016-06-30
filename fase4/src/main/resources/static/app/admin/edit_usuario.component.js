System.register(['angular2/core', '../usuario.interface', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, usuario_interface_1, router_1, router_2;
    var editUsuarioComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            editUsuarioComponent = (function () {
                function editUsuarioComponent(_UsuarioService, _Router, _RouteParams) {
                    this._UsuarioService = _UsuarioService;
                    this._Router = _Router;
                    this._RouteParams = _RouteParams;
                }
                editUsuarioComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._RouteParams.get('id');
                    this._UsuarioService.getUsuario(id).subscribe(function (usuario) { return _this.usuario = usuario; }, function (error) { return console.log(error); });
                };
                editUsuarioComponent.prototype.eliminar = function () {
                    var r = confirm("¿Quierres borrar el usuario?");
                    if (r == true) {
                        var id = +this._RouteParams.get('id');
                        this._UsuarioService.eliminarUsuario(id);
                    }
                    else {
                        alert("Casi la lias");
                    }
                };
                editUsuarioComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                editUsuarioComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                editUsuarioComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                editUsuarioComponent.prototype.gotoGestionJugadores = function () {
                    this._Router.navigate(['GestionJugadores']);
                };
                editUsuarioComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                editUsuarioComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                editUsuarioComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                editUsuarioComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                editUsuarioComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                editUsuarioComponent = __decorate([
                    core_1.Component({
                        selector: 'editUsuario',
                        templateUrl: 'app/admin/edit_usuario.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, router_1.Router, router_2.RouteParams])
                ], editUsuarioComponent);
                return editUsuarioComponent;
            })();
            exports_1("editUsuarioComponent", editUsuarioComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/edit_usuario.component.js.map