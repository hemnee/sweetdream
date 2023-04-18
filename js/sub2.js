
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

/*디저트탭메뉴*/
$(document).ready(function () {


    $(".tab_content").hide();
    $("ul.cafe_tab li:first").addClass("active").show();
    $(".tab_content:first").show();

    //On Click Event
    $("ul.cafe_tab li").click(function () {

        $("ul.cafe_tab li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

});

/*굿즈 팝업*/
$(function () {
    $(".pop_wrap1").hide();
    $(".pop_wrap2").hide();
    $(".pop_wrap3").hide();
    $(".pop_wrap4").hide();
    $(".pop_wrap5").hide();
    $(".pop_wrap6").hide();
    $(".pop_wrap7").hide();
    $(".pop_wrap8").hide();

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
    $(".pop_btn5").click(function () {
        $(".pop_wrap5").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_wrap5").fadeOut();
    });

    $(".pop_btn6").click(function () {
        $(".pop_wrap6").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_wrap6").fadeOut();
    });

    $(".pop_btn7").click(function () {
        $(".pop_wrap7").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_wrap7").fadeOut();
    });

    $(".pop_btn8").click(function () {
        $(".pop_wrap8").fadeIn();
    });
    $(".close").click(function () {
        $(".pop_wrap8").fadeOut();
    });
});