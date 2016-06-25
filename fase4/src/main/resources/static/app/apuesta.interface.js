System.register(['angular2/core', 'rxjs/Observable', './partido.service', './equipo.interface', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, core_2, partido_service_1, equipo_interface_1, http_1;
    var Apuesta, ApuestaService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (partido_service_1_1) {
                partido_service_1 = partido_service_1_1;
            },
            function (equipo_interface_1_1) {
                equipo_interface_1 = equipo_interface_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Apuesta = (function () {
                function Apuesta(id, partido, equipo, karma) {
                    this.id = id;
                    this.partido = partido;
                    this.equipo = equipo;
                    this.karma = karma;
                }
                Apuesta = __decorate([
                    core_2.Component({
                        selector: 'apuestainterface'
                    }), 
                    __metadata('design:paramtypes', [Number, partido_service_1.Partido, equipo_interface_1.Equipo, String])
                ], Apuesta);
                return Apuesta;
            })();
            exports_1("Apuesta", Apuesta);
            ApuestaService = (function () {
                function ApuestaService(http) {
                    this.http = http;
                    this.apuestas = [];
                }
                ApuestaService.prototype.getApuestas = function () {
                    var _this = this;
                    var url = "https://localhost:8443/apuestas/";
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaService.prototype.getApuesta = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/apuestas/" + id;
                    return this.http.get(url).map(function (response) { return response.json(); }).catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaService.prototype.anadirApuesta = function (partido, equipo, karma) {
                    var _this = this;
                    var url = "https://localhost:8443/apuestas/";
                    var item = { id: null, partido: partido, equipo: equipo, karma: karma };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaService.prototype.editar = function (id, partido, equipo) {
                    var _this = this;
                    var item = { partido: partido, equipo: equipo };
                    var url = "https://localhost:8443/apuestas/" + id;
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaService.prototype.eliminar = function (id, nombre, siglas) {
                    var _this = this;
                    var url = "https://localhost:8443/apuestas/" + id;
                    return this.http.delete(url)
                        .map(function (response) { return undefined; })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                ApuestaService.prototype.manejarError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text);
                };
                ApuestaService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApuestaService);
                return ApuestaService;
            })();
            exports_1("ApuestaService", ApuestaService);
        }
    }
});
//# sourceMappingURL=../../../app/apuesta.interface.js.map