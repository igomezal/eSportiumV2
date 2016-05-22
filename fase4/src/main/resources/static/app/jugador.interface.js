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
    var Jugador, JugadorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            Jugador = (function () {
                function Jugador(nombre, posicion, kda) {
                    this.nombre = nombre;
                    this.posicion = posicion;
                    this.kda = kda;
                }
                return Jugador;
            })();
            exports_1("Jugador", Jugador);
            JugadorService = (function () {
                function JugadorService() {
                    this.jugs = [
                        new Jugador('Jug1', 'mid', 1.5),
                        new Jugador('Jug2', 'top', 2.5),
                        new Jugador('Jug3', 'noidea', 3.5),
                        new Jugador('Jug4', 'feed', 0.0)
                    ];
                }
                JugadorService.prototype.getJugadores = function () {
                    return utils_1.withObserver(this.jugs);
                };
                JugadorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], JugadorService);
                return JugadorService;
            })();
            exports_1("JugadorService", JugadorService);
        }
    }
});
//# sourceMappingURL=../../../app/jugador.interface.js.map