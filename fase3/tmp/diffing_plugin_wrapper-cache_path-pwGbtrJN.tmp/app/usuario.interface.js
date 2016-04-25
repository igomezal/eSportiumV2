System.register(['angular2/core', './utils'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, utils_1;
    var Usuario, UsuarioService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            Usuario = (function () {
                function Usuario(id, name, fecha, genero, apuestas, //esto se obtendra de los ids de los partdos de la BDD
                    finalizados, //esto se obtendra de los ids de los partdos de la BDD
                    karma, foto, clave, correo) {
                    this.id = id;
                    this.name = name;
                    this.fecha = fecha;
                    this.genero = genero;
                    this.apuestas = apuestas;
                    this.finalizados = finalizados;
                    this.karma = karma;
                    this.foto = foto;
                    this.clave = clave;
                    this.correo = correo;
                }
                return Usuario;
            })();
            exports_1("Usuario", Usuario);
            UsuarioService = (function () {
                function UsuarioService() {
                    this.apuestas = [1, 2, 3];
                    this.finalizados = [1, 2, 3];
                    this.usuario = [new Usuario(0, 'Don Benito Camela', new Date('December 25, 1995 23:15:30'), 'Masculino', this.apuestas, this.finalizados, 600, 'icon-profile.png', '1234', 'falso@falso.es')];
                }
                UsuarioService.prototype.getUsuario = function () {
                    return utils_1.withObserver(this.usuario[0]);
                };
                UsuarioService.prototype.addUsuario = function (nombre, correo, genero, clave) {
                    var id = this.usuario.length;
                    var today = Date.now();
                    var user = new Usuario(id, nombre, today, genero, [], [], 6000, 'icon-profile.png', clave, correo);
                    this.usuario.push(user);
                };
                UsuarioService.prototype.getUsuarios = function () {
                    return utils_1.withObserver(this.usuario);
                };
                UsuarioService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UsuarioService);
                return UsuarioService;
            })();
            exports_1("UsuarioService", UsuarioService);
        }
    }
});
//# sourceMappingURL=../../../app/usuario.interface.js.map