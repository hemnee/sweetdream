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

/*탭*/
$(document).ready(function () {


    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show(); //
    $(".tab_content:first").show();


    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

});

/*공지사항*/
$(function () {
    $(".notice> ul> li").click(function () {

        $(this).children(".text_info").slideToggle();
    });
    $(".notice> ul> li").click(function () {
        $(this).toggleClass("turn");


    });
});

/*이벤트*/
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
});//기본구조끝부분