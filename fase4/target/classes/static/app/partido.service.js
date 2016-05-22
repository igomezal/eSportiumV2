System.register(['angular2/core', './jugador.interface', './utils'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jugador_interface_1, utils_1, core_2;
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
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            Partido = (function () {
                function Partido(id, eq1, logo1, //Imagen???? Habría que crear o una estructura y llamar a todas las imágenes casi igual
                    eq2, logo2, //Imagen???
                    jug1, jug2, juego, estado, diferencia, ganando, url, rondas) {
                    this.id = id;
                    this.eq1 = eq1;
                    this.logo1 = logo1;
                    this.eq2 = eq2;
                    this.logo2 = logo2;
                    this.jug1 = jug1;
                    this.jug2 = jug2;
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
                    __metadata('design:paramtypes', [Number, String, String, String, String, Array, Array, String, String, String, String, String, String])
                ], Partido);
                return Partido;
            })();
            exports_1("Partido", Partido);
            PartidoService = (function () {
                function PartidoService(service) {
                    this.service = service;
                    this.jugs = [
                        new jugador_interface_1.Jugador('Jug1', 'mid', 1.5),
                        new jugador_interface_1.Jugador('Jug2', 'top', 2.5),
                        new jugador_interface_1.Jugador('Jug3', 'noidea', 3.5),
                        new jugador_interface_1.Jugador('Jug4', 'feed', 0.0)
                    ];
                    this.partidos = [
                        new Partido(0, 'eq11', 'c9Logo', 'eq21', 'fnaticLogo', this.jugs, this.jugs, 'lol', 'Directo', '800', 'eq2', 'https://www.youtube.com/embed/3EwuH3-xmds', 'BO5'),
                        new Partido(1, 'eq12', 'fnaticLogo', 'eq22', 'UOLLogo', this.jugs, this.jugs, 'cs', 'Directo', '500', 'eq2', 'https://www.youtube.com/embed/3EwuH3-xmds', 'BO3'),
                        new Partido(2, 'eq13', 'UOLLogo', 'eq23', 'nipLogo', this.jugs, this.jugs, 'lol', 'Finalizado', '1000', 'eq1', 'https://www.youtube.com/embed/3EwuH3-xmds', 'BO5'),
                        new Partido(3, 'eq14', 'nipLogo', 'eq24', 'c9Logo', this.jugs, this.jugs, 'cod', 'Directo', '1:3', 'eq1', 'https://www.youtube.com/embed/3EwuH3-xmds', 'BO5'),
                        new Partido(4, 'eq15', 'c9Logo', 'eq25', 'fnaticLogo', this.jugs, this.jugs, 'lol', 'Directo', '1800', 'eq2', 'https://www.youtube.com/embed/3EwuH3-xmds', 'BO3'),
                        new Partido(5, 'eq16', 'c9Logo', 'eq26', 'fnaticLogo', this.jugs, this.jugs, 'cs', 'Proximamente', '300', 'eq1', 'https://www.youtube.com/embed/3EwuH3-xmds', 'BO3')
                    ];
                }
                ;
                PartidoService.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.getJugadores().subscribe(function (jugs) { return _this.jugs = jugs; }, function (error) { return console.log(error); });
                };
                PartidoService.prototype.getPartidos = function () {
                    return utils_1.withObserver(this.partidos);
                };
                PartidoService.prototype.getPartidosJuego = function (juego) {
                    return Promise.resolve(this.partidos).then(function (partidosjuego) { return partidosjuego.filter(function (partidojuego) { return partidojuego.juego === juego; }); });
                };
                PartidoService.prototype.getPartido = function (id) {
                    return utils_1.withObserver(this.partidos[id]);
                };
                PartidoService.prototype.anadirPartido = function (juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, rondas, estado) {
                    var i = this.partidos.length;
                    var ganan;
                    if (porcen1 > porcen2) {
                        ganan = 'eq1';
                    }
                    else {
                        ganan = 'eq2';
                    }
                    var p = new Partido(i, eq1, logo1, eq2, logo2, this.jugs, this.jugs, juego, estado, '500', ganan, 'https://www.youtube.com/embed/3EwuH3-xmds', rondas);
                    this.partidos.push(p);
                    console.log(this.partidos);
                    return utils_1.withObserver(this.partidos);
                };
                PartidoService.prototype.editarPartido = function (id, juego, eq1, logo1, porcen1, eq2, logo2, porcen2, url, rondas, estado) {
                    this.partidos[id].eq1 = eq1;
                    this.partidos[id].logo1 = logo1;
                    this.partidos[id].diferencia = porcen1;
                    this.partidos[id].eq2 = eq2;
                    this.partidos[id].logo2 = logo2;
                    this.partidos[id].url = url;
                    this.partidos[id].estado = estado;
                    this.partidos[id].rondas = rondas;
                    this.partidos[id].juego = juego;
                    var ganan;
                    if (porcen1 > porcen2) {
                        ganan = 'eq1';
                    }
                    else {
                        ganan = 'eq2';
                    }
                    alert("Partido editado");
                    return utils_1.withObserver(new Partido(id, eq1, logo1, eq2, logo2, this.jugs, this.jugs, juego, estado, '500', ganan, 'https://www.youtube.com/embed/3EwuH3-xmds', rondas));
                };
                PartidoService.prototype.eliminarPartido = function (id) {
                    var p;
                    p = this.partidos[id];
                    var r = confirm("¿Quierres borrar el partido?");
                    if (r == true) {
                        this.partidos.splice(id, 1);
                        alert("Partido eliminado");
                        return utils_1.withObserver(p);
                    }
                    else {
                        alert("Casi la lias");
                    }
                };
                PartidoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [jugador_interface_1.JugadorService])
                ], PartidoService);
                return PartidoService;
            })();
            exports_1("PartidoService", PartidoService);
        }
    }
});
//# sourceMappingURL=../../../app/partido.service.js.map