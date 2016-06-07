System.register(['angular2/core', 'angular2/router', './partido.service', './jugador.interface', './cabecera.component', './juego.interface', './equipo.interface', './index.component', './profile.component', './usuario.interface', './pie.component', './partido.component', './registro.component', './aboutus.component', './faq.component', './contacto.component', './finalizados.component', './editarpefil.component', './admin/home.component', './admin/add_juegos.component', './admin/add_partidos.component', './admin/ajustes.component', './admin/edit_juego.component', './admin/edit_partido.component', './admin/gestion_juegos.component', './admin/gestion_partidos.component', './admin/gestion_usuarios.component', './admin/edit_usuario.component', './admin/gestion_equipos.component', './admin/edit_equipo.component', 'angular2/http', './login.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, partido_service_1, jugador_interface_1, cabecera_component_1, juego_interface_1, equipo_interface_1, index_component_1, profile_component_1, usuario_interface_1, pie_component_1, partido_component_1, registro_component_1, aboutus_component_1, faq_component_1, contacto_component_1, finalizados_component_1, editarpefil_component_1, home_component_1, add_juegos_component_1, add_partidos_component_1, ajustes_component_1, edit_juego_component_1, edit_partido_component_1, gestion_juegos_component_1, gestion_partidos_component_1, gestion_usuarios_component_1, edit_usuario_component_1, gestion_equipos_component_1, edit_equipo_component_1, http_1, login_service_1;
    var MainApp;
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
            function (jugador_interface_1_1) {
                jugador_interface_1 = jugador_interface_1_1;
            },
            function (cabecera_component_1_1) {
                cabecera_component_1 = cabecera_component_1_1;
            },
            function (juego_interface_1_1) {
                juego_interface_1 = juego_interface_1_1;
            },
            function (equipo_interface_1_1) {
                equipo_interface_1 = equipo_interface_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (usuario_interface_1_1) {
                usuario_interface_1 = usuario_interface_1_1;
            },
            function (pie_component_1_1) {
                pie_component_1 = pie_component_1_1;
            },
            function (partido_component_1_1) {
                partido_component_1 = partido_component_1_1;
            },
            function (registro_component_1_1) {
                registro_component_1 = registro_component_1_1;
            },
            function (aboutus_component_1_1) {
                aboutus_component_1 = aboutus_component_1_1;
            },
            function (faq_component_1_1) {
                faq_component_1 = faq_component_1_1;
            },
            function (contacto_component_1_1) {
                contacto_component_1 = contacto_component_1_1;
            },
            function (finalizados_component_1_1) {
                finalizados_component_1 = finalizados_component_1_1;
            },
            function (editarpefil_component_1_1) {
                editarpefil_component_1 = editarpefil_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (add_juegos_component_1_1) {
                add_juegos_component_1 = add_juegos_component_1_1;
            },
            function (add_partidos_component_1_1) {
                add_partidos_component_1 = add_partidos_component_1_1;
            },
            function (ajustes_component_1_1) {
                ajustes_component_1 = ajustes_component_1_1;
            },
            function (edit_juego_component_1_1) {
                edit_juego_component_1 = edit_juego_component_1_1;
            },
            function (edit_partido_component_1_1) {
                edit_partido_component_1 = edit_partido_component_1_1;
            },
            function (gestion_juegos_component_1_1) {
                gestion_juegos_component_1 = gestion_juegos_component_1_1;
            },
            function (gestion_partidos_component_1_1) {
                gestion_partidos_component_1 = gestion_partidos_component_1_1;
            },
            function (gestion_usuarios_component_1_1) {
                gestion_usuarios_component_1 = gestion_usuarios_component_1_1;
            },
            function (edit_usuario_component_1_1) {
                edit_usuario_component_1 = edit_usuario_component_1_1;
            },
            function (gestion_equipos_component_1_1) {
                gestion_equipos_component_1 = gestion_equipos_component_1_1;
            },
            function (edit_equipo_component_1_1) {
                edit_equipo_component_1 = edit_equipo_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            MainApp = (function () {
                //Todo lo añadadido de usuario es para probar esta clase, cuando se cree en routing se quita
                //
                function MainApp(/* pruebaUsuario */ _Usuarioservice) {
                    this._Usuarioservice = _Usuarioservice;
                }
                MainApp.prototype.ngOnInit = function () {
                    var _this = this;
                    /* pruebaUsuario */
                    this._Usuarioservice.getUsuario().subscribe(function (usuario) { return _this.usuario = usuario; }, function (error) { return console.log(error); });
                };
                MainApp.prototype.ngAfterContentInit = function () {
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
                };
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        providers: [router_1.ROUTER_PROVIDERS, partido_service_1.PartidoService, jugador_interface_1.JugadorService, juego_interface_1.JuegoService, usuario_interface_1.UsuarioService, http_1.HTTP_PROVIDERS, login_service_1.LoginService, equipo_interface_1.EquipoService],
                        templateUrl: 'app/main.html',
                        directives: [cabecera_component_1.CabeceraComponent, pie_component_1.PieComponent, router_1.ROUTER_DIRECTIVES],
                        pipes: []
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Inicio', component: index_component_1.indexComponent, useAsDefault: true },
                        { path: '/usuario', name: 'Perfil', component: profile_component_1.Perfil },
                        { path: '/finalizados', name: 'Finalizados', component: finalizados_component_1.finalizadosComponent },
                        { path: '/sobre', name: 'Sobre', component: aboutus_component_1.AboutUsComponent },
                        { path: '/faq', name: 'FAQ', component: faq_component_1.FaqComponent },
                        { path: '/contacto', name: 'Contacto', component: contacto_component_1.ContactoComponent },
                        { path: '/partido/:id', name: 'Partido', component: partido_component_1.PartidoComponent },
                        { path: '/registro', name: 'Registro', component: registro_component_1.RegistroComponent },
                        { path: '/admin', name: 'Admin', component: home_component_1.homeComponent },
                        { path: '/editar', name: 'Editar', component: editarpefil_component_1.editarPerfil },
                        { path: '/addJuego', name: 'AddJuego', component: add_juegos_component_1.addJuegoComponent },
                        { path: '/addPartido', name: 'AddPartido', component: add_partidos_component_1.addPartidoComponent },
                        { path: '/ajustes', name: 'Ajustes', component: ajustes_component_1.ajustesComponent },
                        { path: '/editJuego/:id', name: 'EditarJuego', component: edit_juego_component_1.editJuegoComponent },
                        { path: '/editPartido/:id', name: 'EditarPartido', component: edit_partido_component_1.editPartidoComponent },
                        { path: '/juegos', name: 'GestionJuegos', component: gestion_juegos_component_1.gestionJuegosComponent },
                        { path: '/partidos', name: 'GestionPartidos', component: gestion_partidos_component_1.gestionPartidosComponent },
                        { path: '/usuarios', name: 'GestionUsuarios', component: gestion_usuarios_component_1.gestionUsuariosComponent },
                        { path: '/editUsuario/:id', name: 'EditUsuario', component: edit_usuario_component_1.editUsuarioComponent },
                        { path: '/admin/equipos', name: 'GestionEquipos', component: gestion_equipos_component_1.gestionEquiposComponent },
                        { path: '/admin/editEquipo/:id', name: 'EditarEquipo', component: edit_equipo_component_1.editEquipoComponent }
                    ]), 
                    __metadata('design:paramtypes', [usuario_interface_1.UsuarioService])
                ], MainApp);
                return MainApp;
            })();
            exports_1("MainApp", MainApp);
        }
    }
});
//# sourceMappingURL=../../../app/main.js.map