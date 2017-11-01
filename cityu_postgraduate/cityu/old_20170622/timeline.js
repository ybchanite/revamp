/*
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});
*/





/*
$('.cd-timeline-img').hover(
    function() { 
        $(".cd-timeline-content").css("opacity", "0");
        $(this).next(".cd-timeline-content").css("opacity", "1"); 
        
    }
);

$( ".cd-timeline-content").mouseleave(
    function() {
        $(this).css("opacity", "0"); 
});

*/

/*
$('.cd-timeline-img').mouseenter(
    function() { 
        if ($(this).next(".cd-timeline-content").css("visibility") === "hidden"){
            $(".cd-timeline-content").css("visibility", "hidden");
            $(this).next(".cd-timeline-content").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'slow');
        }
        
    }
);

$( ".cd-timeline-content").mouseleave(
    function() {
        $(this).next(".cd-timeline-content").css({opacity: 1, visibility: "hidden"}).animate({opacity: 0}, 'slow'); 
});

*/

$(".timeline-marker").mouseenter(
    function() { 
        /*
        $(".views-field-field-at-info").css("display", "none");
        $(this).siblings(".views-field-field-at-info").css("display", "block");
        */

        if ($(this).siblings(".views-field-field-at-info").css("display") === "none"){
            
            $(this).siblings(".views-field-field-at-step").find('.field-content.at-step').animate({width: 80%}, 'slow'); 
            
            $(this).siblings(".views-field-field-at-info").fadeIn('slow');
            
        }
        $(".views-field-field-at-info").not($(this).siblings()).css("display", "none");
    }
            
            
            
);

/*

$( ".views-field-field-at-info").mouseleave(
    function() {
        $(this).siblings(".views-field-field-at-info").css("display", "none");
});

*/

