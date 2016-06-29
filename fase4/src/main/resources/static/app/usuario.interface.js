System.register(['angular2/core', 'rxjs/Observable', './utils', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Observable_1, utils_1, http_1;
    var Usuario, UsuarioService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Usuario = (function () {
                function Usuario(id, name, fecha, genero, apuestas, //esto se obtendra de los ids de los partdos de la BDD
                    finalizados, //esto se obtendra de los ids de los partdos de la BDD
                    karma, foto, clave, correo, admin, roles) {
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
                    this.roles = roles;
                }
                return Usuario;
            }());
            exports_1("Usuario", Usuario);
            UsuarioService = (function () {
                function UsuarioService(http) {
                    this.http = http;
                    this.apuestas = [{ "id": 1, "karma": 200 }, { "id": 2, "karma": 200 }, { "id": 3, "karma": 200 }];
                    this.finalizados = [{ "id": 1, "karma": 200 }, { "id": 2, "karma": 200 }, { "id": 3, "karma": 200 }];
                    /*private usuario:Usuario[] = [new Usuario (0,'yeah',new Date('December 25, 1995 23:15:30'),'Masculino', this.apuestas,this.finalizados,600,'icon-profile.png','1234','falso@falso.es',false),
                    new Usuario (1,'administrator',new Date('December 25, 1995 23:15:30'),'Masculino', this.apuestas,this.finalizados,600,'icon-profile.png','administrator','falso@falso.es',true)];
                    */ this.admin = false;
                }
                UsuarioService.prototype.getUsuarios = function () {
                    var _this = this;
                    var url = "https://localhost:8443/usuarios/";
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                UsuarioService.prototype.getUsuario = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/usuarios/" + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                UsuarioService.prototype.addUsuario = function (name, correo, genero, password) {
                    var _this = this;
                    var url = "https://localhost:8443/usuarios/";
                    var item = { id: null, name: name, correo: correo, genero: genero, estaeslacont: password, karma: 5000, roles: ["ROLE_USER"] };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
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
                    var _this = this;
                    var url = "https://localhost:8443/apuestas/";
                    var item = { id: null, partido: partido, karma: apuesta }; // Como pongo el equipo????
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                    //Ahora se hace la petición a la tabla de Relación ApuestaUser
                    var url2 = "https://localhost:8443/apuestaUser/";
                    var item2 = { id: null, partido: partido, }; // Cómo paso el usuario?? importo el loginService y loginService.user
                };
                UsuarioService.prototype.quitarKarma = function (user, karma) {
                    var _this = this;
                    var url = "https://localhost:8443/usuarios/" + user.id;
                    var item = { id: user.id, name: user.name, karma: (user.karma - karma), fecha: user.fecha, foto: user.foto, genero: user.genero, correo: user.correo };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                UsuarioService.prototype.cobrarKarma = function (user, karma) {
                    var _this = this;
                    var url = "https://localhost:8443/usuarios/actKarma/" + user.id;
                    var item = { id: user.id, name: user.name, karma: (user.karma + (2 * karma)), fecha: user.fecha, foto: user.foto, genero: user.genero, correo: user.correo };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                UsuarioService.prototype.editarDatos = function (user, nombre, contraseña, foto, correo, genero) {
                    var _this = this;
                    var url = "https://localhost:8443/usuarios/" + user.id;
                    var contra;
                    if (contraseña == "") {
                        contra = null;
                    }
                    else {
                        contra = contraseña;
                    }
                    var item = { id: user.id, name: nombre, karma: user.karma, fecha: user.fecha, foto: foto, genero: genero, correo: correo, estaeslacont: contra };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                UsuarioService.prototype.doAdmin = function (user) {
                    var _this = this;
                    var url = "https://localhost:8443/usuarios/doAdmin/" + user.id;
                    var item = { id: null };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json; })
                        .catch(function (error) { return _this.manejarError(error); });
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
                    var _this = this;
                    var url = "https://localhost:8443/usuarios/" + id;
                    var r = confirm("¿Quieres borrar a este usuario?");
                    if (r == true) {
                        return this.http.delete(url)
                            .map(function (response) { return undefined; })
                            .catch(function (error) { return _this.manejarError(error); });
                    }
                    else {
                        alert("Casi la lías");
                    }
                };
                UsuarioService.prototype.getKarma = function (usuario) {
                    return usuario.karma;
                };
                UsuarioService.prototype.manejarError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text);
                };
                UsuarioService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsuarioService);
                return UsuarioService;
            }());
            exports_1("UsuarioService", UsuarioService);
        }
    }
});
//# sourceMappingURL=usuario.interface.js.map