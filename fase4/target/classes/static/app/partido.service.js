System.register(['angular2/core', './jugador.interface', 'rxjs/Observable', './equipo.interface', './juego.interface', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, jugador_interface_1, Observable_1, core_2, equipo_interface_1, juego_interface_1, http_1;
    var Partido, PartidoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (jugador_interface_1_1) {
                jugador_interface_1 = jugador_interface_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (equipo_interface_1_1) {
                equipo_interface_1 = equipo_interface_1_1;
            },
            function (juego_interface_1_1) {
                juego_interface_1 = juego_interface_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Partido = (function () {
                function Partido(id, equipo1, equipo2, 
                    /*public logo1:string,//Imagen???? Habría que crear o una estructura y llamar a todas las imágenes casi igual
                    public logo2: string, //Imagen???
                    public jug1: Jugador[],
                    public jug2: Jugador[],*/
                    juego, estado, diferencia, ganando, url, rondas) {
                    this.id = id;
                    this.equipo1 = equipo1;
                    this.equipo2 = equipo2;
                    this.juego = juego;
                    this.estado = estado;
                    this.diferencia = diferencia;
                    this.ganando = ganando;
                    this.url = url;
                    this.rondas = rondas;
                }
                Partido = __decorate([
                    core_2.Component({
                        selector: 'main-app',
                        providers: [jugador_interface_1.JugadorService]
                    }), 
                    __metadata('design:paramtypes', [Number, equipo_interface_1.Equipo, equipo_interface_1.Equipo, juego_interface_1.Juego, String, String, String, String, String])
                ], Partido);
                return Partido;
            }());
            exports_1("Partido", Partido);
            PartidoService = (function () {
                function PartidoService(service, http) {
                    this.service = service;
                    this.http = http;
                    this.jugs = [];
                    this.partidos = [];
                }
                PartidoService.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.getJugadores().subscribe(function (jugs) { return _this.jugs = jugs; }, function (error) { return console.log(error); });
                };
                /*private partidos = [
                  new Partido(0,'eq11','c9Logo','eq21','fnaticLogo',this.jugs,this.jugs,'lol','Directo','800','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
                  new Partido(1,'eq12','fnaticLogo','eq22','UOLLogo',this.jugs,this.jugs,'cs','Directo','500','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO3'),
                  new Partido(2,'eq13','UOLLogo','eq23','nipLogo',this.jugs,this.jugs,'lol','Finalizado','1000','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
                  new Partido(3,'eq14','nipLogo','eq24','c9Logo',this.jugs,this.jugs,'cod','Directo','1:3','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO5'),
                  new Partido(4,'eq15','c9Logo','eq25','fnaticLogo',this.jugs,this.jugs,'lol','Directo','1800','eq2','https://www.youtube.com/embed/3EwuH3-xmds','BO3'),
                  new Partido(5,'eq16','c9Logo','eq26','fnaticLogo',this.jugs,this.jugs,'cs','Proximamente','300','eq1','https://www.youtube.com/embed/3EwuH3-xmds','BO3')
              
                ];*/
                PartidoService.prototype.getPartidos = function () {
                    var _this = this;
                    var url = "https://localhost:8443/partidos/";
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                PartidoService.prototype.getPartidosJuego = function (juego) {
                    return Promise.resolve(this.partidos).then(function (partidosjuego) { return partidosjuego.filter(function (partidojuego) { return partidojuego.juego === juego; }); });
                };
                PartidoService.prototype.getPartido = function (id) {
                    var _this = this;
                    var url = "https://localhost:8443/partidos/" + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                //anadirPartido(juego:string, eq1: Equipo, logo1:string, porcen1:string, eq2: Equipo, logo2:string, porcen2:string, url: string, rondas: string, estado: string){ //Faltaría lo de jugadores de cada equipo
                PartidoService.prototype.anadirPartido = function (juego, eq1, porcen1, eq2, porcen2, url, rondas, estado) {
                    var _this = this;
                    var ganan;
                    if (porcen1 > porcen2) {
                        ganan = 'eq1';
                    }
                    else {
                        ganan = 'eq2';
                    }
                    var url1 = "https://localhost:8443/partidos/";
                    var item = { id: null, juego: { id: juego }, equipo1: { id: eq1 }, equipo2: { id: eq2 }, url: url, rondas: rondas, estado: estado };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url1, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                PartidoService.prototype.editarPartido = function (id, juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, rondas, estado) {
                    var _this = this;
                    var url1 = "https://localhost:8443/partidos/" + id;
                    var ganan;
                    if (porcen1 > porcen2) {
                        ganan = 'eq1';
                    }
                    else {
                        ganan = 'eq2';
                    }
                    var item = { id: id, estado: estado, ganando: ganan, diferencia: "100", url: url, rondas: rondas, juego: juego, equipo1: eq1, equipo2: eq2 };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url1, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                PartidoService.prototype.eliminarPartido = function (id) {
                    var _this = this;
                    var r = confirm("¿Quierres borrar el partido?");
                    if (r == true) {
                        var url = "https://localhost:8443/partidos/" + id;
                        return this.http.delete(url)
                            .map(function (response) { return alert("Partido eliminado"); })
                            .catch(function (error) { return _this.manejarError(error); });
                    }
                    else {
                        alert("Casi la lias");
                    }
                };
                PartidoService.prototype.terminarPartido = function (part) {
                    var _this = this;
                    var url = "https://localhost:8443/partidos/" + part.id;
                    var item = { id: part.id, estado: "Finalizado", ganando: part.ganando, diferencia: part.diferencia, url: part.url, rondas: part.rondas, juego: part.juego, equipo1: part.equipo1, equipo2: part.equipo2 };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                    //COBRAR APUESTAS  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                };
                PartidoService.prototype.pasarADirecto = function (part) {
                    var _this = this;
                    var url = "https://localhost:8443/partidos/" + part.id;
                    var item = { id: part.id, estado: "Directo", ganando: part.ganando, diferencia: part.diferencia, url: part.url, rondas: part.rondas, juego: part.juego, equipo1: part.equipo1, equipo2: part.equipo2 };
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return _this.manejarError(error); });
                };
                PartidoService.prototype.manejarError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text);
                };
                PartidoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [jugador_interface_1.JugadorService, http_1.Http])
                ], PartidoService);
                return PartidoService;
            }());
            exports_1("PartidoService", PartidoService);
        }
    }
});
//# sourceMappingURL=partido.service.js.map