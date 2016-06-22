System.register(['angular2/core', 'angular2/router', './partido.service', './juego.interface'], function(exports_1, context_1) {
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
    var core_1, router_1, partido_service_1, juego_interface_1;
    var finalizadosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (partido_service_1_1) {
                partido_service_1 = partido_service_1_1;
            },
            function (juego_interface_1_1) {
                juego_interface_1 = juego_interface_1_1;
            }],
        execute: function() {
            finalizadosComponent = (function () {
                function finalizadosComponent(_Partidoservice, _JuegoService, _router) {
                    this._Partidoservice = _Partidoservice;
                    this._JuegoService = _JuegoService;
                    this._router = _router;
                }
                finalizadosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.partidos = partidos; }, function (error) { return console.log(error); });
                    this._JuegoService.getJuegos().subscribe(function (juegos) { return _this.juegos = juegos; });
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.arrayDirtemp = partidos; }, function (error) { return console.log(error); });
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.arrayFintemp = partidos; }, function (error) { return console.log(error); });
                };
                finalizadosComponent.prototype.setPruebasDir = function (s) {
                    this.arrayDirtemp = [];
                    for (var i = 0; i < this.partidos.length; i++) {
                        if (this.partidos[i].juego.siglas == s) {
                            if (this.partidos[i].estado == 'Finalizado') {
                                this.arrayDirtemp.push(this.partidos[i]);
                            }
                        }
                    }
                };
                finalizadosComponent.prototype.isVacio = function (a) {
                    if (a.length == 0) {
                        return true;
                    }
                    return false;
                };
                finalizadosComponent.prototype.goToPartido = function (partido) {
                    var link = ['Partido', { id: partido.id }];
                    this._router.navigate(link);
                };
                finalizadosComponent.prototype.ngAfterContentInit = function () {
                    var q1 = document.createElement("script");
                    q1.type = "text/javascript";
                    q1.src = "js/responsive-tabs.js";
                    document.head.appendChild(q1);
                    var o1 = document.createElement("script");
                    o1.type = "text/javascript";
                    o1.src = "js/script-responsive.js";
                    document.head.appendChild(o1);
                };
                finalizadosComponent = __decorate([
                    core_1.Component({
                        selector: 'finalizados',
                        templateUrl: 'app/finalizados.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [partido_service_1.PartidoService, juego_interface_1.JuegoService, router_1.Router])
                ], finalizadosComponent);
                return finalizadosComponent;
            }());
            exports_1("finalizadosComponent", finalizadosComponent);
        }
    }
});
//# sourceMappingURL=finalizados.component.js.map