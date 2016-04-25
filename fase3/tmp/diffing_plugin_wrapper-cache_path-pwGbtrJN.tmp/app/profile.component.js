System.register(['angular2/core', './usuario.interface', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, usuario_interface_1, router_1;
    var Perfil;
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
            }],
        execute: function() {
            Perfil = (function () {
                function Perfil(_Usuarioservice) {
                    this._Usuarioservice = _Usuarioservice;
                }
                Perfil.prototype.ngOnInit = function () {
                    var _this = this;
                    this._Usuarioservice.getUsuario().subscribe(function (usuario) { return _this.usuario = usuario; }, function (error) { return console.log(error); });
                };
                Perfil = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: 'app/profile.component.html',
                        providers: [usuario_interface_1.UsuarioService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService])
                ], Perfil);
                return Perfil;
            })();
            exports_1("Perfil", Perfil);
        }
    }
});
//# sourceMappingURL=../../../app/profile.component.js.map