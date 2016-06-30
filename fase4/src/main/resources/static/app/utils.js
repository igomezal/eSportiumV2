System.register(['rxjs/Observable'], function(exports_1) {
    var Observable_1;
    function withObserver(data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    }
    exports_1("withObserver", withObserver);
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=../../../app/utils.js.map