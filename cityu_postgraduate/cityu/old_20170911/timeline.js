

jQuery('<div id="leftPin" class="pin"></div>').insertAfter(jQuery('li.timeline-item.odd .field-content.at-step'));
jQuery('<div id="rightPin" class="pin"></div>').insertAfter(jQuery('li.timeline-item.even .field-content.at-step'));

jQuery(".timeline-marker").mouseenter(
    function() { 
        

        if (jQuery(this).siblings(".views-field-field-at-info").css("display") === "none"){
            
            jQuery(this).siblings(".views-field-field-at-step").find('.pin').animate({width: '95%'}, 'fast');             
            jQuery(this).css("background-color", "#883277");
            jQuery(this).siblings(".views-field-field-at-step").find('.at-step').css('color', '#883277');
            
            jQuery(".timeline-marker").not(jQuery(this)).css("background-color", "#caa0bf");
            jQuery('.pin').not(jQuery(this).siblings(".views-field-field-at-step").find('.pin')).animate({width: '25%'}, 'fast');    
            jQuery('.at-step').not(jQuery(this).siblings(".views-field-field-at-step").find('.at-step')).css('color', '#808285');   
            jQuery(this).siblings(".views-field-field-at-info").fadeIn('slow');
   
        }
        jQuery(".views-field-field-at-info").not(jQuery(this).siblings()).css("display", "none");
    }           
);



jQuery(".timeline-item-wrapper .views-field.views-field-field-at-step").mouseenter(
    function() { 
        

        if (jQuery(this).siblings(".views-field-field-at-info").css("display") === "none"){
            
            jQuery(this).siblings(".views-field-field-at-step").find('.pin').animate({width: '95%'}, 'fast');             
            jQuery(this).siblings(".timeline-marker").css("background-color", "#883277");
            jQuery(this).siblings(".views-field-field-at-step").find('.at-step').css('color', '#883277');
            
            jQuery(".timeline-marker").not(jQuery(this).siblings()).css("background-color", "#caa0bf");
            jQuery('.pin').not(jQuery(this).siblings(".views-field-field-at-step").find('.pin')).animate({width: '25%'}, 'fast');    
            jQuery('.at-step').not(jQuery(this).siblings(".views-field-field-at-step").find('.at-step')).css('color', '#808285');   
            jQuery(this).siblings(".views-field-field-at-info").fadeIn('slow');
   
        }
        jQuery(".views-field-field-at-info").not(jQuery(this).siblings()).css("display", "none");
    }           
);





jQuery('#block-views-block-research-atimeline-block-2 .views-field-field-at-step .field-content, #block-views-block-doctorate-atimeline-block-2 .views-field-field-at-step .field-content, #block-views-block-taught-atimeline-block-2 .views-field-field-at-step .field-content').click(function(){
        
        jQuery('.form-group .view-content .views-row .views-field .field-content').not(jQuery(this)).removeClass('activeTimelineIndex');
        jQuery(this).addClass('activeTimelineIndex');
        
        var index = jQuery(".views-row").index(jQuery(this).parents(".views-row")) + 1;
        var target = jQuery(".timeline-list li:nth-child(" + index + ") .field-content.at-step");
        jQuery('html,body').animate({scrollTop: target.offset().top - 200},'slow');

        jQuery(".timeline-list li:nth-child(" + index + ")").children().children(".timeline-marker").trigger("mouseenter");
        
});




jQuery('a[href="#deadline"]').click(function(){
        var target = jQuery("#block-body-2 > div > h1:contains('Important Date')");
        jQuery('html,body').animate({scrollTop: target.offset().top - 100},'fast');


        
    });
    
    
var sidebar;

/*sticky side bar*/

if(jQuery('#block-views-block-research-atimeline-block-2').length){
    sidebar = jQuery("#block-views-block-research-atimeline-block-2");
}
else if(jQuery('#block-views-block-doctorate-atimeline-block-2').length){
    sidebar = jQuery("#block-views-block-doctorate-atimeline-block-2");
}else if(jQuery('#block-views-block-taught-atimeline-block-2').length){
    sidebar = jQuery("#block-views-block-taught-atimeline-block-2");
}


var offset = sidebar.offset();





    jQuery(window).scroll(function() {
        if (jQuery('.timeline-item-wrapper .views-field-field-at-info').css('position') === 'absolute'){
            if (jQuery(window).scrollTop() > offset.top) {
                sidebar.stop().animate({
                    marginTop: jQuery(window).scrollTop() - offset.top + 200
                });
            } else {
                sidebar.stop().animate({
                    marginTop: 0
                 });
            }
        }
    });
    


