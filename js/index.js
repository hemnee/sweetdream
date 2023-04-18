$(document).ready(function () {
    var jbOffset = $('#header').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 950) {
            $('#header').addClass("on");

        }
        else {
            $('#header').removeClass("on");



        }
        if ($(document).scrollTop() > 950) {
            $('.gnb').addClass("on2");

        }
        else {
            $('.gnb').removeClass("on2");



        }
    });
});
$(function () {
    $(".pop_wrap1").hide();
    $(".pop_wrap2").hide();
    $(".pop_wrap3").hide();
    $(".pop_wrap4").hide();

    $(".pop_btn1").click(function () {
        $(".pop_wrap1").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_wrap1").fadeOut();
    });

    $(".pop_btn2").click(function () {
        $(".pop_wrap2").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_wrap2").fadeOut();
    });

    $(".pop_btn3").click(function () {
        $(".pop_wrap3").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_wrap3").fadeOut();
    });

    $(".pop_btn4").click(function () {
        $(".pop_wrap4").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_wrap4").fadeOut();
    });
});
$(function () {
    $(".pop_event1").hide();
    $(".pop_event2").hide();
    $(".pop_event3").hide();

    $(".e1").click(function () {
        $(".pop_event1").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_event1").fadeOut();
    });

    $(".e2").click(function () {
        $(".pop_event2").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_event2").fadeOut();
    });

    $(".e3").click(function () {
        $(".pop_event3").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_event3").fadeOut();
    });
});