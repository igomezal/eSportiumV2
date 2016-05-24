System.register(['angular2/core', './utils'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
                    karma, foto, clave, correo, admin) {
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
                    this.admin = admin;
                }
                return Usuario;
            }());
            exports_1("Usuario", Usuario);
            UsuarioService = (function () {
                function UsuarioService() {
                    this.apuestas = [{ "id": 1, "karma": 200 }, { "id": 2, "karma": 200 }, { "id": 3, "karma": 200 }];
                    this.finalizados = [{ "id": 1, "karma": 200 }, { "id": 2, "karma": 200 }, { "id": 3, "karma": 200 }];
                    this.usuario = [new Usuario(0, 'yeah', new Date('December 25, 1995 23:15:30'), 'Masculino', this.apuestas, this.finalizados, 600, 'icon-profile.png', '1234', 'falso@falso.es', false),
                        new Usuario(1, 'administrator', new Date('December 25, 1995 23:15:30'), 'Masculino', this.apuestas, this.finalizados, 600, 'icon-profile.png', 'administrator', 'falso@falso.es', true)];
                    this.admin = false;
                }
                UsuarioService.prototype.getUsuario = function () {
                    return utils_1.withObserver(this.usuario[0]);
                };
                UsuarioService.prototype.addUsuario = function (nombre, correo, genero, clave) {
                    var id = this.usuario.length;
                    var today = Date.now();
                    var user = new Usuario(id, nombre, today, genero, [], [], 6000, 'icon-profile.png', clave, correo, false);
                    this.usuario.push(user);
                    return utils_1.withObserver(user);
                };
                UsuarioService.prototype.getUsuarios = function () {
                    return utils_1.withObserver(this.usuario);
                };
                UsuarioService.prototype.getSesion = function () {
                    console.log(this.sesion);
                    return utils_1.withObserver(this.sesion);
                };
                UsuarioService.prototype.login = function (nombre, clave) {
                    var user;
                    for (var i = 0; i < this.usuario.length; i++) {
                        if (this.usuario[i].name === nombre) {
                            user = this.usuario[i];
                        }
                    }
                    if (user == undefined) {
                        alert("Error, usuario o contraseña incorrectos");
                    }
                    else {
                        if (user.clave === clave) {
                            this.sesion = user;
                            this.admin = user.admin;
                        }
                        else {
                            console.log("Usuario/Contraseña incorrecta");
                        }
                        return utils_1.withObserver(this.sesion);
                    }
                };
                UsuarioService.prototype.getAdmin = function () {
                    return utils_1.withObserver(this.admin);
                };
                UsuarioService.prototype.setAdmin = function (admin) {
                    this.admin = admin;
                    return utils_1.withObserver(this.admin);
                };
                UsuarioService.prototype.setSesion = function (sesion) {
                    this.sesion = sesion;
                    return utils_1.withObserver(this.sesion);
                };
                UsuarioService.prototype.apostar = function (partido, apuesta) {
                    this.sesion.apuestas.push({ "id": partido.id, "karma": apuesta });
                    this.sesion.karma -= apuesta;
                    this.almacenarSesion(this.sesion);
                    return utils_1.withObserver(this.sesion);
                };
                UsuarioService.prototype.editarDatos = function (constraseña, foto, correo, genero) {
                    this.sesion.clave = constraseña;
                    this.sesion.foto = foto;
                    this.sesion.correo = correo;
                    this.sesion.genero = genero;
                    this.almacenarSesion(this.sesion);
                    return utils_1.withObserver(this.sesion);
                };
                UsuarioService.prototype.almacenarSesion = function (sesion) {
                    for (var i = 0; i < this.usuario.length; i++) {
                        if (this.usuario[i].name === this.sesion.name) {
                            this.usuario[i] = sesion;
                        }
                    }
                };
                UsuarioService.prototype.getUsuarioporId = function (id) {
                    return utils_1.withObserver(this.usuario[id]);
                };
                UsuarioService.prototype.eliminarUsuario = function (id) {
                    var u;
                    u = this.usuario[id];
                    var r = confirm("¿Quieres borrar a este usuario?");
                    if (r == true) {
                        this.usuario.splice(id, 1);
                        return utils_1.withObserver(u);
                    }
                    else {
                        alert("Casi la lías");
                    }
                };
                UsuarioService.prototype.getKarma = function (usuario) {
                    return usuario.karma;
                };
                UsuarioService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UsuarioService);
                return UsuarioService;
            }());
            exports_1("UsuarioService", UsuarioService);
        }
    }
});
//# sourceMappingURL=usuario.interface.js.map