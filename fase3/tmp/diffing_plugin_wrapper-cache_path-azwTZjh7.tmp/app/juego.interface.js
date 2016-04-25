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
    var core_1, utils_1, core_2;
    var Juego, JuegoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            Juego = (function () {
                function Juego(nombre, id) {
                    this.nombre = nombre;
                    this.id = id;
                }
                Juego = __decorate([
                    core_2.Component({
                        selector: 'juegointerface'
                    }), 
                    __metadata('design:paramtypes', [String, String])
                ], Juego);
                return Juego;
            })();
            exports_1("Juego", Juego);
            JuegoService = (function () {
                function JuegoService() {
                    this.juegos = [
                        new Juego('League of Legends', 'lol'),
                        new Juego('Counter Strike: GO', 'cs'),
                        new Juego('Call of Duty: BO3', 'cod'),
                    ];
                }
                JuegoService.prototype.getJuegos = function () {
                    return utils_1.withObserver(this.juegos);
                };
                JuegoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], JuegoService);
                return JuegoService;
            })();
            exports_1("JuegoService", JuegoService);
        }
    }
});
//# sourceMappingURL=../../../app/juego.interface.js.map