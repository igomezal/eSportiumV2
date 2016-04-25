System.register(['angular2/core', 'angular2/router', './partido.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, partido_service_1;
    var PartidoComponent;
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
            }],
        execute: function() {
            PartidoComponent = (function () {
                function PartidoComponent(_partidoService, _routeParams) {
                    this._partidoService = _partidoService;
                    this._routeParams = _routeParams;
                }
                PartidoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._partidoService.getPartido(id).subscribe(function (partido) { return _this.partido = partido; }, function (error) { return console.log(error); });
                    console.log(this.partido.jug1);
                };
                PartidoComponent = __decorate([
                    core_1.Component({
                        selector: 'partido-concreto',
                        templateUrl: 'app/partido.component.html'
                    }), 
                    __metadata('design:paramtypes', [partido_service_1.PartidoService, router_1.RouteParams])
                ], PartidoComponent);
                return PartidoComponent;
            })();
            exports_1("PartidoComponent", PartidoComponent);
        }
    }
});
//# sourceMappingURL=../../../app/partido.component.js.map