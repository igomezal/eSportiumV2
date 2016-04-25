System.register(['angular2/testing', '../app/main'], function(exports_1) {
    var testing_1, main_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [main_1.MainApp]; });
            testing_1.describe('App: Main', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([main_1.MainApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([main_1.MainApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/main.spec.js.map