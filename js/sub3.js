/*헤더*/
$(document).ready(function () {
    var jbOffset = $('#header').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 200) {
            $('#header').addClass("on");

        }
        else {
            $('#header').removeClass("on");



        }
        if ($(document).scrollTop() > 200) {
            $('.gnb').addClass("on2");

        }
        else {
            $('.gnb').removeClass("on2");



        }
    });
});