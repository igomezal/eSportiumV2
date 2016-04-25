System.register(['angular2/core', '../juego.interface', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, juego_interface_1, router_1;
    var addJuegoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (juego_interface_1_1) {
                juego_interface_1 = juego_interface_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            addJuegoComponent = (function () {
                function addJuegoComponent(_JuegoService, _Router) {
                    this._JuegoService = _JuegoService;
                    this._Router = _Router;
                }
                addJuegoComponent.prototype.anadir = function (nombre, id) {
                    if (nombre == "" || id == "") {
                        alert("Datos incorrectos");
                    }
                    else {
                        var j = new juego_interface_1.Juego(nombre, id);
                        this._JuegoService.anadirJuego(j);
                        alert("Juego " + j.nombre + " creado correctamente");
                    }
                };
                addJuegoComponent.prototype.gotoHome = function () {
                    this._Router.navigate(['Admin']);
                };
                addJuegoComponent.prototype.gotoGestionJuegos = function () {
                    this._Router.navigate(['GestionJuegos']);
                };
                addJuegoComponent.prototype.gotoGestionPartidos = function () {
                    this._Router.navigate(['GestionPartidos']);
                };
                addJuegoComponent.prototype.gotoGestionUsuarios = function () {
                    this._Router.navigate(['gotoGestionUsuarios']);
                };
                addJuegoComponent.prototype.gotoAjustes = function () {
                    this._Router.navigate(['Ajustes']);
                };
                addJuegoComponent = __decorate([
                    core_1.Component({
                        selector: 'addjuegos',
                        templateUrl: 'app/admin/add_juegos.html'
                    }), 
                    __metadata('design:paramtypes', [juego_interface_1.JuegoService, router_1.Router])
                ], addJuegoComponent);
                return addJuegoComponent;
            })();
            exports_1("addJuegoComponent", addJuegoComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/admin/add_juegos.component.js.map