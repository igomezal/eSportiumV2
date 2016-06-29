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
    var indexComponent;
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
            indexComponent = (function () {
                function indexComponent(_Partidoservice, _JuegoService, _router) {
                    this._Partidoservice = _Partidoservice;
                    this._JuegoService = _JuegoService;
                    this._router = _router;
                    this.juegos = [];
                    this.partidos = [];
                }
                indexComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.partidos = partidos; }, function (error) { return console.log(error); });
                    this._JuegoService.getJuegos().subscribe(function (juegos) { return _this.juegos = juegos; });
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.arrayDirtemp = partidos; }, function (error) { return console.log(error); });
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.arrayFintemp = partidos; }, function (error) { return console.log(error); });
                };
                indexComponent.prototype.refresh = function () {
                    var _this = this;
                    this._JuegoService.getJuegos().subscribe(function (items) { return _this.juegos = items; });
                };
                indexComponent.prototype.setPruebasDir = function (s) {
                    this.arrayDirtemp = [];
                    for (var i = 0; i < this.partidos.length; i++) {
                        if (this.partidos[i].juego.siglas == s) {
                            console.log("DEBUGG");
                            if (this.partidos[i].estado == 'Directo') {
                                this.arrayDirtemp.push(this.partidos[i]);
                            }
                        }
                    }
                };
                indexComponent.prototype.setPruebasProx = function (s) {
                    this.arrayFintemp = [];
                    for (var i = 0; i < this.partidos.length; i++) {
                        if (this.partidos[i].juego.siglas == s) {
                            if (this.partidos[i].estado == 'Proximamente') {
                                this.arrayFintemp.push(this.partidos[i]);
                            }
                        }
                    }
                };
                indexComponent.prototype.isVacio = function (a, siglas) {
                    for (var i in a) {
                        if (a[i].juego.siglas == siglas) {
                        }
                    }
                    //console.log("salgo, no se si hay partidos")
                };
                indexComponent.prototype.goToPartido = function (partido) {
                    var link = ['Partido', { id: partido.id }];
                    this._router.navigate(link);
                };
                indexComponent.prototype.ngAfterContentInit = function () {
                    var q = document.createElement("script");
                    q.type = "text/javascript";
                    q.src = "js/responsive-tabs.js";
                    document.head.appendChild(q);
                    var o = document.createElement("script");
                    o.type = "text/javascript";
                    o.src = "js/script-responsive.js";
                    document.head.appendChild(o);
                };
                indexComponent = __decorate([
                    core_1.Component({
                        selector: 'index',
                        templateUrl: 'app/index.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [partido_service_1.PartidoService, juego_interface_1.JuegoService, router_1.Router])
                ], indexComponent);
                return indexComponent;
            }());
            exports_1("indexComponent", indexComponent);
        }
    }
});
//# sourceMappingURL=index.component.js.map