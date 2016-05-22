System.register(['angular2/core', './usuario.interface', './partido.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, usuario_interface_1, partido_service_1, router_1;
    var Perfil;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            },
            function (partido_service_1_1) {
                partido_service_1 = partido_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Perfil = (function () {
                function Perfil(_usuarioService, _partidoService, _router) {
                    this._usuarioService = _usuarioService;
                    this._partidoService = _partidoService;
                    this._router = _router;
                }
                Perfil.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usuarioService.getSesion().subscribe(function (usuario) { return _this.sesion = usuario; }, function (error) { return console.log(error); });
                    this.getPartido();
                };
                Perfil.prototype.getApuesta = function (id) {
                    for (var i = 0; i < this.sesion.apuestas.length; i++) {
                        if (this.sesion.apuestas[i].id === id) {
                            return this.sesion.apuestas[i].karma;
                        }
                    }
                };
                Perfil.prototype.getPartido = function () {
                    var _this = this;
                    this.partidoAc = [];
                    for (var i = 0; i < this.sesion.apuestas.length; i++) {
                        this._partidoService.getPartido(this.sesion.apuestas[i].id).subscribe(function (partido) { return _this.partidoAc.push(partido); }, function (error) { return console.log(error); });
                    }
                    this.partidoFin = [];
                    for (var i = 0; i < this.sesion.finalizados.length; i++) {
                        this._partidoService.getPartido(this.sesion.finalizados[i].id).subscribe(function (partido) { return _this.partidoFin.push(partido); }, function (error) { return console.log(error); });
                    }
                };
                Perfil.prototype.goToPartido = function (partido) {
                    var link = ['Partido', { id: partido.id }];
                    this._router.navigate(link);
                };
                Perfil.prototype.goToEditar = function (partido) {
                    var link = ['Editar'];
                    this._router.navigate(link);
                };
                Perfil = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: 'app/profile.component.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService, partido_service_1.PartidoService, router_1.Router])
                ], Perfil);
                return Perfil;
            })();
            exports_1("Perfil", Perfil);
        }
    }
});
//# sourceMappingURL=../../../app/profile.component.js.map