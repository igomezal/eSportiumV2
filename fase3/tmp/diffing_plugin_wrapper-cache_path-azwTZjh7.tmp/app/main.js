System.register(['angular2/core', 'angular2/router', './route-config', './partido.service', './jugador.interface', './header.component', './juego.interface'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, route_config_1, partido_service_1, jugador_interface_1, header_component_1, juego_interface_1;
    var MainApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (partido_service_1_1) {
                partido_service_1 = partido_service_1_1;
            },
            function (jugador_interface_1_1) {
                jugador_interface_1 = jugador_interface_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (juego_interface_1_1) {
                juego_interface_1 = juego_interface_1_1;
            }],
        execute: function() {
            MainApp = (function () {
                function MainApp(_Partidoservice, _JuegoService) {
                    this._Partidoservice = _Partidoservice;
                    this._JuegoService = _JuegoService;
                    this.defaultMeaning = 42;
                }
                MainApp.prototype.ngOnInit = function () {
                    var _this = this;
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.partidos = partidos; }, function (error) { return console.log(error); });
                    this._JuegoService.getJuegos().subscribe(function (juegos) { return _this.juegos = juegos; }, function (error) { return console.log(error); });
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.arrayDirtemp = partidos; }, function (error) { return console.log(error); });
                    this._Partidoservice.getPartidos().subscribe(function (partidos) { return _this.arrayFintemp = partidos; }, function (error) { return console.log(error); });
                };
                MainApp.prototype.setPruebasDir = function (s) {
                    this.arrayDirtemp = [];
                    for (var i = 0; i < this.partidos.length; i++) {
                        if (this.partidos[i].juego == s) {
                            if (this.partidos[i].estado == 'directo') {
                                this.arrayDirtemp.push(this.partidos[i]);
                            }
                        }
                    }
                };
                MainApp.prototype.setPruebasFin = function (s) {
                    this.arrayFintemp = [];
                    for (var i = 0; i < this.partidos.length; i++) {
                        if (this.partidos[i].juego == s) {
                            if (this.partidos[i].estado == 'finalizado') {
                                this.arrayFintemp.push(this.partidos[i]);
                            }
                        }
                    }
                };
                MainApp.prototype.isVacio = function (a) {
                    if (a.length == 0) {
                        return true;
                    }
                    return false;
                };
                MainApp.prototype.ngAfterContentInit = function () {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.src = "http://code.jquery.com/jquery-2.2.1.min.js";
                    document.head.appendChild(s);
                    var t = document.createElement("script");
                    t.type = "text/javascript";
                    t.src = "js/bootstrap.min.js";
                    document.head.appendChild(t);
                    var e = document.createElement("script");
                    e.type = "text/javascript";
                    e.src = "js/jS.js";
                    document.head.appendChild(e);
                    var f = document.createElement("script");
                    f.type = "text/javascript";
                    f.src = "js/easings.js";
                    document.head.appendChild(f);
                    var g = document.createElement("script");
                    g.type = "text/javascript";
                    g.src = "js/jquery.bootstrap-touchspin.js";
                    document.head.appendChild(g);
                    var h = document.createElement("script");
                    h.type = "text/javascript";
                    h.src = "js/main.js";
                    document.head.appendChild(h);
                };
                MainApp.prototype.meaningOfLife = function (meaning) {
                    return "The meaning of life is " + (meaning || this.defaultMeaning);
                };
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        providers: [router_1.ROUTER_PROVIDERS, partido_service_1.PartidoService, jugador_interface_1.JugadorService, juego_interface_1.JuegoService],
                        templateUrl: 'app/index.html',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent],
                        /*styleUrls:['./css/bootstrap-tabs-x.css','./css/bootstrap-tabs-x.min.css', //Si quito estos comentarios en chrome deja de funcionar
                          './css/bootstrap-theme.css',
                          './css/bootstrap-theme.css.map',
                          './css/bootstrap-theme.min.css',
                          './css/bootstrap-theme.min.css.map',
                          './css/bootstrap.css',
                          './css/bootstrap.css.map',
                          './css/bootstrap.min.css',
                          './css/bootstrap.min.css.map',
                          './css/flexslider.css',
                          './css/ionicons.min.css',
                          './css/jquery.bootstrap-touchspin.css',
                          './css/style.css',
                          './css/ten.css'],*/
                        pipes: []
                    }),
                    router_1.RouteConfig([].concat(route_config_1.CliRouteConfig)), 
                    __metadata('design:paramtypes', [partido_service_1.PartidoService, juego_interface_1.JuegoService])
                ], MainApp);
                return MainApp;
            })();
            exports_1("MainApp", MainApp);
        }
    }
});
//# sourceMappingURL=../../../app/main.js.map