$(function () {
    const MVS = new Swiper('.main_visual_slide', {
        direction: 'vertical',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main_visual .page",
            clickable: true,
        },
    })
})


// 모바일 반응형
$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();
        }
    });



    $(window).on('resize', function () {
        let w = $(window).width();

        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style');
        }

    })
})

$(function () {
    $('.main_content .best_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_content .best_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_content .best_tab_content .con').removeClass('on');
        $('.main_content .best_tab_content .con').eq(idx).addClass('on')
    })
});

$(function () {
    const MMS = new Swiper('.main_menu_slide', {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

});

$(function () {
    const MIS = new Swiper('.main_interior_slide', {
        loop: true,

        navigation: {
            nextEl: '.main_interior .inner .itm_area .arrows .next',
            prevEl: '.main_interior .inner .itm_area .arrows .prev',
        },
        pagination: {
            clickable: true,
            el: '.main_interior .inner .itm_area .page',
        },
        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);
                $('.main_interior .inner .desc_area .itm').removeClass('on');
                $('.main_interior .inner .desc_area .itm').eq(this.realIndex).addClass('on');
            }
        }
    })
});

