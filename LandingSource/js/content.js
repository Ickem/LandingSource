$(window).load(function(){
    $(".image__content").css('right', '100px');
    $(".content").css({left: 100, opacity:.4});
    let listContent = $(".content");
    listContent.mouseenter(function(){
        listContent.css({opacity: .4})
        $(this).css({opacity: 1});
    });

    $(".image__content").animate({right: 0}, {duration: 900} );
    $(".content:first").animate({left: 0, opacity: 1}, {duration: 900} );
    $(".content:nth-child(2)").animate({left: 0}, {duration: 1300} );
    $(".content:last").animate({left: 0}, {duration: 1700} );
});

let scroll = 200;

$(window).scroll(function() {
    if ( $(window).scrollTop() > scroll ) {
        $('a.to-top').fadeIn('slow');
    } else {
        $('a.to-top').fadeOut('slow');
    }
});

$('a.to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});

$('.header__nav a').click(function(){
    let el = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(el).offset().top }, 500);
    return false;
});

