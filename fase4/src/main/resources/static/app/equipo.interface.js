System.register(['angular2/core', 'rxjs/Observable', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, core_2, http_1;
    var Equipo, EquipoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Equipo = (function () {
                function Equipo(id, nombre, logo) {
                    this.id = id;
                    this.nombre = nombre;
                    this.logo = logo;
                }
                Equipo = __decorate([
                    core_2.Component({
                        selector: 'equipointerface'
                    }), 
                    __metadata('design:paramtypes', [Number, String, String])
                ], Equipo);
                return Equipo;
            })();
            exports_1("Equipo", Equipo);
            EquipoService = (function () {
                function EquipoService(http) {
                    this.http = http;
                    this.equipos = [];
                }
                EquipoService.prototype.getEquipos = function () {
                    var _this = this;
                    var url = "https://localhost:8443/equipos/";
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                EquipoService.prototype.getEquipo = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/equipos/" + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                EquipoService.prototype.anadirEquipo = function (nombre, siglas) {
                    var _this = this;
                    var url = "https://localhost:8443/equipos/";
                    var item = { id: null, nombre: nombre, siglas: siglas };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                EquipoService.prototype.editar = function (id, nombre, logo) {
                    var _this = this;
                    var item = { id: id, nombre: nombre, logo: logo };
                    var url = "https://localhost:8443/equipos/" + id;
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                EquipoService.prototype.eliminar = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/equipos/" + id;
                    return this.http.delete(url)
                        .map(function (response) { return undefined; })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                EquipoService.prototype.manejarError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text);
                };
                EquipoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EquipoService);
                return EquipoService;
            })();
            exports_1("EquipoService", EquipoService);
        }
    }
});
//# sourceMappingURL=../../../app/equipo.interface.js.map