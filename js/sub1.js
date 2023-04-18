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
/*click*/
$('.click').click(function () {
    $('.box1').css('opacity', '0');
    $('.brand_info').css('opacity', '1');
});
$(function () {
    $(".click").onHover(function () {
        $(".click").css("opacity", "0");
        $(".click_btn").css("display", "block");
    }, function () {
        $(".click").css("opacity", "1");
        $(".click_btn").css("display", "none");
    });
});


$('.click').mouseenter(function () {
    $('.click').css({
        'opacity': '0'
    }),
        $('.click_btn').css({
            'display': 'block', 'scale': '1.1'
        })
})
$('.click').mouseleave(function () {
    $('.click').css({
        'opacity': '1'
    }),
        $('.click_btn').css({
            'display': 'none'
        })
})

/*graph*/

$(document).ready(function () {
    var jbOffset = $('.day_st1 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1000) {
            $('.day_st1 span').addClass("g_ani1");

        }
        else {
            $('.day_st1 span').removeClass("g_ani1");

        }
    });
});
$(document).ready(function () {
    var jbOffset = $('.day_st2 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1000) {
            $('.day_st2 span').addClass("g_ani2");

        }
        else {
            $('.day_st2 span').removeClass("g_ani2");

        }
    });
});
$(document).ready(function () {
    var jbOffset = $('.day_st3 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1000) {//
            $('.day_st3 span').addClass("g_ani3");

        }
        else {
            $('.day_st3 span').removeClass("g_ani3");

        }
    });
});


$(document).ready(function () {
    var jbOffset = $('.bunny_st1 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1600) {//
            $('.bunny_st1 span').addClass("g_ani4");

        }
        else {
            $('.bunny_st1 span').removeClass("g_ani4");

        }
    });
});
$(document).ready(function () {
    var jbOffset = $('.bunny_st2 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1600) {//
            $('.bunny_st2 span').addClass("g_ani5");

        }
        else {
            $('.bunny_st2 span').removeClass("g_ani5");

        }
    });
});
$(document).ready(function () {
    var jbOffset = $('.bunny_st3 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1600) {//
            $('.bunny_st3 span').addClass("g_ani6");

        }
        else {
            $('.bunny_st3 span').removeClass("g_ani6");

        }
    });
});

$(document).ready(function () {
    var jbOffset = $('.night_st1 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 2100) {//
            $('.night_st1 span').addClass("g_ani7");

        }
        else {
            $('.night_st1 span').removeClass("g_ani7");

        }
    });
});
$(document).ready(function () {
    var jbOffset = $('.night_st2 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 2100) {//
            $('.night_st2 span').addClass("g_ani8");

        }
        else {
            $('.night_st2 span').removeClass("g_ani8");

        }
    });
});
$(document).ready(function () {
    var jbOffset = $('.night_st3 span').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 2100) {//
            $('.night_st3 span').addClass("g_ani9");

        }
        else {
            $('.night_st3 span').removeClass("g_ani9");

        }
    });
});