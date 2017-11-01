

jQuery('<div id="leftPin" class="pin"></div>').insertAfter($('li.timeline-item.odd .field-content.at-step'));
jQuery('<div id="rightPin" class="pin"></div>').insertAfter($('li.timeline-item.even .field-content.at-step'));

$(".timeline-marker").mouseenter(
    function() { 
        

        if ($(this).siblings(".views-field-field-at-info").css("display") === "none"){
            
            $(this).siblings(".views-field-field-at-step").find('.pin').animate({width: '95%'}, 'fast');             
            $(this).css("background-color", "#883277");
            $(this).siblings(".views-field-field-at-step").find('.at-step').css('color', '#883277');
            
            $(".timeline-marker").not($(this)).css("background-color", "#caa0bf");
            $('.pin').not($(this).siblings(".views-field-field-at-step").find('.pin')).animate({width: '25%'}, 'fast');    
            $('.at-step').not($(this).siblings(".views-field-field-at-step").find('.at-step')).css('color', '#808285');   
            $(this).siblings(".views-field-field-at-info").fadeIn('slow');
   
        }
        $(".views-field-field-at-info").not($(this).siblings()).css("display", "none");
    }           
);





$('.views-field-field-at-step .field-content').click(function(){
        var index = $(".views-row").index($(this).parents(".views-row")) + 1;
        var target = $(".timeline-list li:nth-child(" + index + ") .field-content.at-step");
        $('html,body').animate({scrollTop: target.offset().top - 200},'slow');

        $(".timeline-list li:nth-child(" + index + ")").children().children(".timeline-marker").trigger("mouseenter");
        
});




$('.taxonomy_timeline_deadline').click(function(){
        var target = $("#block-body-2 > div h2");
        $('html,body').animate({scrollTop: target.offset().top - 100},'fast');


        
    });
    
    
    
    

