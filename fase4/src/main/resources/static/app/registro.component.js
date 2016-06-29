System.register(['angular2/core', './usuario.interface'], function(exports_1, context_1) {
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
    var core_1, usuario_interface_1;
    var RegistroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            }],
        execute: function() {
            RegistroComponent = (function () {
                function RegistroComponent(_usuarioService) {
                    this._usuarioService = _usuarioService;
                    this.exito = false;
                    this.error = false;
                }
                RegistroComponent.prototype.add = function (nombre, correo, genero, clave, clave2) {
                    if (clave === clave2) {
                        this._usuarioService.addUsuario(nombre, correo, genero, clave).subscribe(function (respuesta) { return alert("Usuario creado correctamente"); });
                        this.exito = true;
                        this.error = false;
                    }
                    else {
                        this.error = true;
                        this.exito = false;
                    }
                };
                RegistroComponent.prototype.ngAfterContentInit = function () {
                    var e1 = document.createElement("script");
                    e1.type = "text/javascript";
                    e1.src = "js/jS.js";
                    document.head.appendChild(e1);
                };
                RegistroComponent = __decorate([
                    core_1.Component({
                        selector: 'registro',
                        templateUrl: 'app/registro.component.html'
                    }), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService])
                ], RegistroComponent);
                return RegistroComponent;
            }());
            exports_1("RegistroComponent", RegistroComponent);
        }
    }
});
//# sourceMappingURL=registro.component.js.map