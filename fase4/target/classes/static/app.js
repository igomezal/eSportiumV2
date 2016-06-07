System.register(['angular2/platform/browser', './app/main', 'angular2/router'], function(exports_1) {
    var browser_1, main_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(main_1.MainApp, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=../../app.js.map