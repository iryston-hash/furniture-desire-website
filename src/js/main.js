$(function() {
    $('.burger').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        lazyLoad: 'progressive',
        easing: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true

        
    });
    mixer = mixitup('.gallery__inner', {
        animation: {
            effectsOut: 'fade rotate(-10deg)',
            easing: 'ease-in-out',
            perspectiveDistance: '2000px',
            animateResizeTargets: true
        },
        load: {
            filter: '.living',
           
        }
    });
    
});



   