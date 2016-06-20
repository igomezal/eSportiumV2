System.register(['angular2/core', '../equipo.interface', 'angular2/router', '../usuario.interface'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, equipo_interface_1, router_1, usuario_interface_1;
    var editEquipoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (equipo_interface_1_1) {
                equipo_interface_1 = equipo_interface_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            }],
        execute: function() {
            editEquipoComponent = (function () {
                function editEquipoComponent(_UsuarioService, _EquipoService, _routeParams, _Router) {
                    this._UsuarioService = _UsuarioService;
                    this._EquipoService = _EquipoService;
                    this._routeParams = _routeParams;
                    this._Router = _Router;
                }
                editEquipoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._EquipoService.getEquipo(id).subscribe(function (equipo) { return _this.equipo = equipo; }, function (error) { return console.log(Error); });
                };
                editEquipoComponent.prototype.editar = function (nombre, logo) {
                    if (nombre == "" || logo == "") {
                        alert("Datos incorrectos");
                    }
                    else {
                        this._EquipoService.editar(this.equipo.id, nombre, logo).subscribe(function (respuesta) { return alert("Equipo editado correctamente"); });
                        this.gotoGestionEquipos();
                        ;
                        this.gotoGestionEquipos();
                    }
                };
                editEquipoComponent.prototype.eliminar = function (id) {
                    var _this = this;
                    this._EquipoService.eliminar(id).subscribe(function (response) { alert('Se ha eliminado el equipo seleccionado.'); _this.gotoGestionEquipos(); }, function (error) { return console.log(error); });
                };
                editEquipoComponent.prototype.goToJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                editEquipoComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                editEquipoComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                editEquipoComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                editEquipoComponent.prototype.gotoGestionEquipos = function () {
                    this._Router.navigate(['GestionEquipos']);
                };
                editEquipoComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['GestionUsuarios']);
                };
                editEquipoComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                editEquipoComponent.prototype.gotoMain = function () {
                    this._Router.navigate(['Inicio']);
                };
                editEquipoComponent.prototype.cerrarSesion = function () {
                    this._UsuarioService.setSesion(undefined);
                    this._UsuarioService.setAdmin(false);
                    this.gotoMain();
                };
                editEquipoComponent = __decorate([
                    core_1.Component({
                        selector: 'editEquipo',
                        templateUrl: 'app/admin/edit_equipo.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, equipo_interface_1.EquipoService, router_1.RouteParams, router_1.Router])
                ], editEquipoComponent);
                return editEquipoComponent;
            })();
            exports_1("editEquipoComponent", editEquipoComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/edit_equipo.component.js.map