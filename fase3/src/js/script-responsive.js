$(document).ready(function () {
    fakewaffle.responsiveTabs(['xs']);
    $('.panel-collapse').on('show.bs.collapse', function (e) {
        $(e.target).closest('.panel').siblings().find('.panel-collapse').collapse('hide');
    });
});