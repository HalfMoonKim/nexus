window.onload = function () {
    const bullets = $('.sw-visual-pg .swiper-pagination-bullet');

    // modal close
    $('.modal').click(function () {
        $(this).fadeOut();
    });

    // Scroll
    $(window).scroll(function () {
        let scY = $(window).scrollTop();
        if (scY >= 80) {
            $('.header').addClass('header-focus');
        } else {
            $('.header').removeClass('header-focus');
        }
    });

    // Mobile GNB
    const mb_menu = $('.mb-menu');
    const mb_gnb = $('.mb-gnb');
    mb_menu.click(function () {
        mb_gnb.toggleClass('mb-gnb-open');
    });

    const mb_gnb_close = $('.mb-gnb-close');
    mb_gnb_close.click(function (e) {
        e.preventDefault();
        mb_gnb.removeClass('mb-gnb-open');
    });

    // Resizing
    $(window).resize(function () {
        let winW = $(window).width();
        if (winW > 1024) {
            mb_gnb.removeClass('mb-gnb-open');
        }
    });

    // Visual 
    let visual_box_img = $('.visual-box img');
    let bulletsIndex = 0;
    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        effect: 'fade',
        crossEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1500,
        pagination: {
            el: '.sw-visual-pg',
            clickable: true,
        },
        on: {
            slideChange: function () {
                visual_box_img.eq(this.previousIndex).stop().animate({
                    opacity: 0
                }, 500);
                visual_box_img.eq(this.activeIndex).css({
                    opacity: 0,
                    left: '10.0208vw'
                });
                visual_box_img.eq(this.activeIndex).stop().animate({
                    opacity: 1,
                    left: '13.0208vw'
                }, 600);
                changePg(this.realIndex);
            },
            init: function () {
                visual_box_img = $('.visual-box img');
                visual_box_img.eq(this.activeIndex).css({
                    opacity: 0,
                    left: '10.0208vw'
                });
                visual_box_img.eq(this.activeIndex).stop().animate({
                    opacity: 1,
                    left: '13.0208vw'
                }, 600);
            },
        },
    });

    // Visual Pagination
    $.each(bullets, function (index, item) {
        $(this).click(function () {
            changePg(index);
        });
    });

    function changePg(_num) {
        if (_num == bulletsIndex) {
            return;
        }

        $('.sw-visual-pg .swiper-pagination-bullet').removeClass('sw-visual-pg-active');
        $('.sw-visual-pg .swiper-pagination-bullet').eq(bulletsIndex).addClass('sw-visual-pg-active');
        bulletsIndex = _num;
    }

    // Scroll Motion
    $('.story-box-top').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '100%'
    });

    $('.story-1').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-2').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-3').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-4').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-5').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-6').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-7').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-8').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-9').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-ani');
        } else {}
    }, {
        offset: '70%'
    });
};