jQuery(document).ready(function( $ ) {
    // Mobile menu open/close
    $('#menu-icon').on('click', function(e){
        e.preventDefault();
        $('.mobile-cover-menu').toggleClass('open');
        $('.hamburger-menu').toggleClass('open');
        $(this).toggleClass('open');
        $('body').toggleClass('no-scroll');
    });

    // Fixed desktop main menu
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 36) {
            $('.main-menu').addClass('fixed');
            $('.full-menu').addClass('fixed');
        } else {
            $('.main-menu').removeClass('fixed');
            $('.full-menu').removeClass('fixed');
        }
    });

    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});
jQuery(document).foundation();
/*
These functions make sure WordPress
and Foundation play nice together.
*/

jQuery(document).ready(function() {

    // Remove empty P tags created by WP inside of Accordion and Orbit
    jQuery('.accordion p:empty, .orbit p:empty').remove();

	 // Makes sure last grid item floats left
	jQuery('.archive-grid .columns').last().addClass( 'end' );

	// Adds Flex Video to YouTube and Vimeo Embeds
  jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
    if ( jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5 ) {
      jQuery(this).wrap("<div class='widescreen flex-video'/>");
    } else {
      jQuery(this).wrap("<div class='flex-video'/>");
    }
  });

});
