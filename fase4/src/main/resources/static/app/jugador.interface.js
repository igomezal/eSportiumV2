System.register(['angular2/core', 'rxjs/Observable', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1;
    var Jugador, JugadorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Jugador = (function () {
                function Jugador(id, nombre, posicion, media, equipo) {
                    this.id = id;
                    this.nombre = nombre;
                    this.posicion = posicion;
                    this.media = media;
                    this.equipo = equipo;
                }
                return Jugador;
            }());
            exports_1("Jugador", Jugador);
            JugadorService = (function () {
                function JugadorService(http) {
                    this.http = http;
                }
                JugadorService.prototype.getJugadores = function () {
                    var _this = this;
                    var url = "https://localhost:8443/jugadores/";
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                JugadorService.prototype.getJugador = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/jugadores/" + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                JugadorService.prototype.anadirJugador = function (nombre, posicion, kda, equipo) {
                    var _this = this;
                    var url = "https://localhost:8443/jugadores/";
                    var item = { "nombre": nombre, "posicion": posicion, "media": kda, "equipo": { "id": equipo }
                    };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                JugadorService.prototype.editar = function (id, nombre, posicion, kda, equipo) {
                    var _this = this;
                    var item = { "id": id, "nombre": nombre, "posicion": posicion, "media": kda, "equipo": { "id": equipo } };
                    var url = "https://localhost:8443/jugadores/" + id;
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                JugadorService.prototype.eliminar = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/jugadores/" + id;
                    return this.http.delete(url)
                        .map(function (response) { return undefined; })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                JugadorService.prototype.manejarError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text);
                };
                JugadorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JugadorService);
                return JugadorService;
            }());
            exports_1("JugadorService", JugadorService);
        }
    }
});
//# sourceMappingURL=jugador.interface.js.map