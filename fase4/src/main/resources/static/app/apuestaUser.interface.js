System.register(['angular2/core', 'rxjs/Observable', './apuesta.interface', './usuario.interface', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Observable_1, core_2, apuesta_interface_1, usuario_interface_1, http_1;
    var ApuestaUser, ApuestaUserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (apuesta_interface_1_1) {
                apuesta_interface_1 = apuesta_interface_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ApuestaUser = (function () {
                function ApuestaUser(id, apuesta, usuario) {
                    this.id = id;
                    this.apuesta = apuesta;
                    this.usuario = usuario;
                }
                ApuestaUser = __decorate([
                    core_2.Component({
                        selector: 'apuestaUserinterface'
                    }), 
                    __metadata('design:paramtypes', [Number, apuesta_interface_1.Apuesta, usuario_interface_1.Usuario])
                ], ApuestaUser);
                return ApuestaUser;
            }());
            exports_1("ApuestaUser", ApuestaUser);
            ApuestaUserService = (function () {
                function ApuestaUserService(http) {
                    this.http = http;
                    this.apuestasUser = [];
                }
                ApuestaUserService.prototype.getApuestasUser = function () {
                    var _this = this;
                    var url = "https://localhost:8443/apuestaUser/";
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaUserService.prototype.getApuestaUser = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/apuestaUser/" + id;
                    return this.http.get(url).map(function (response) { return response.json(); }).catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaUserService.prototype.anadirApuestaUser = function (apuesta, usuario) {
                    var _this = this;
                    var url = "https://localhost:8443/apuestaUser/";
                    var item = { id: null, apuesta: apuesta, user: usuario };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaUserService.prototype.editar = function (id, apuesta, usuario) {
                    var _this = this;
                    var item = { apuesta: apuesta, usuario: usuario };
                    var url = "https://localhost:8443/apuestaUser/" + id;
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaUserService.prototype.obtenerApuestasUser = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/apuestaUser/user/" + id;
                    return this.http.get(url).map(function (response) { return response.json(); }).catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaUserService.prototype.eliminar = function (id, apuesta, usuario) {
                    var _this = this;
                    var url = "https://localhost:8443/apuestaUser/" + id;
                    return this.http.delete(url)
                        .map(function (response) { return undefined; })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaUserService.prototype.manejarError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text);
                };
                ApuestaUserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApuestaUserService);
                return ApuestaUserService;
            }());
            exports_1("ApuestaUserService", ApuestaUserService);
        }
    }
});
//# sourceMappingURL=apuestaUser.interface.js.map