const $ = window.jQuery

$(function() {

    const header = $('#header');
    const introH = $("#intro").innerHeight();

    let scrollOffset = 0;

    /* Fixed header */
    if (!header) {
        return;
    }

    $(window).on('scroll', function(){

        scrollOffset = $(this).scrollTop();

        if (scrollOffset > introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    })


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        const link = $(this);
        const blockId = link.data('scroll');
        const blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        link.addClass("active");

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500)
    })


    /* Menu nav toggle */
    $('#nav-toggle').on('click', function(event){
        event.preventDefault();

        $('#nav').toggleClass('active');
        $('#nav-toggle').toggleClass('active');
        $('#header').toggleClass('active');

    })


    /* Collapse */
    $("[data-collapse]").on('click', function(event){
        event.preventDefault();

        const collapse = $(this);
        const blockId = collapse.data('collapse');

        $(blockId).slideToggle();
        collapse.toggleClass("active");
    })


    /* Slider */
    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});