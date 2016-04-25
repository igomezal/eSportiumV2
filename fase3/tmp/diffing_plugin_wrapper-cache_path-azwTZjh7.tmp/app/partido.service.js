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
                    jug1, jug2, juego, estado, diferencia, ganando) {
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
                }
                Partido = __decorate([
                    core_2.Component({
                        selector: 'main-app',
                        providers: [jugador_interface_1.JugadorService]
                    }), 
                    __metadata('design:paramtypes', [Number, String, String, String, String, Array, Array, String, String, String, String])
                ], Partido);
                return Partido;
            })();
            exports_1("Partido", Partido);
            PartidoService = (function () {
                function PartidoService(service) {
                    this.service = service;
                    this.partidos = [
                        new Partido(1, 'eq11', 'c9Logo', 'eq21', 'fnaticLogo', this.jugs, this.jugs, 'lol', 'directo', '800', 'eq2'),
                        new Partido(2, 'eq12', 'fnaticLogo', 'eq22', 'UOLLogo', this.jugs, this.jugs, 'cs', 'directo', '500', 'eq2'),
                        new Partido(3, 'eq13', 'UOLLogo', 'eq23', 'nipLogo', this.jugs, this.jugs, 'lol', 'finalizado', '1000', 'eq1'),
                        new Partido(4, 'eq14', 'nipLogo', 'eq24', 'c9Logo', this.jugs, this.jugs, 'cod', 'directo', '1:3', 'eq1'),
                        new Partido(5, 'eq15', 'c9Logo', 'eq25', 'fnaticLogo', this.jugs, this.jugs, 'lol', 'directo', '1800', 'eq2'),
                    ];
                }
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