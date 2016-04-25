System.register(['angular2/platform/browser', './app/main'], function(exports_1) {
    var browser_1, main_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(main_1.MainApp, []);
        }
    }
});
//# sourceMappingURL=../../app.js.map