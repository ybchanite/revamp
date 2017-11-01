/************/
/*admin page*/
/************/


/*user name is shown directly on the navbar*/

var admin = jQuery('#block-entityviewuser h2.block-title').text();
jQuery('#block-usercityumenu li a[title="User Logout"]').parents('.menu.nav-pills.dropdown-menu').siblings('.dropdown-toggle').text(admin);
jQuery('#block-usercityumenusupport li a[data-drupal-link-system-path="user/logout"]').parents('.menu.nav-pills.dropdown-menu').siblings('.dropdown-toggle').text(admin);



/********/
/*navbar*/
/********/

/*enable the hyperlink of dropdown triggle itself*/
/*ie. click "Research Degree Pogrammes" will jump to the homepage of research degree programmes*/

jQuery('#block-mainnavigation-2 .dropdown a:nth-child(1)').removeAttr('data-toggle');


/*fixed navbar*/

if (jQuery('#block-mainnavigation-2').css('display') === 'block'){
    jQuery(window).scroll(function(){
            
        var navbar = jQuery('body > div.main-header');
        var offset = navbar.offset();
        
        /*when window scroll down to certain height, fixed bar appears*/
        
        if (jQuery(window).scrollTop()  >  offset.top + 150) {
            navbar.removeClass('container');
            navbar.addClass('container-fluid');
            jQuery('body > div.main-header > div').addClass('fixedNavbar');
        }

        /*when window scroll up to certain height, fixed bar disappears*/
        if (jQuery(window).scrollTop()  <  offset.top + 150){
            navbar.addClass('container');
            navbar.removeClass('container-fluid');
            jQuery('body > div.main-header > div').removeClass('fixedNavbar');
        }
    });

}

for (i = 1; i <= 6; i++) { 
    var photo = jQuery('#block-mainmenuphotos .paragraph:nth-child(' + i + ')').find('img');
    jQuery('#block-mainnavigation-2 > ul > li:nth-child(' + i + ') .dropdown-menu').prepend(photo);
    
}




/******/
/*home*/
/******/


/*animation*/


if (jQuery('#block-testfortoi ').length){
    jQuery(window).scroll(function() {
            var windowPos = window.pageYOffset;   
            var wwPos = jQuery('#block-testfortoi .views-col').offset();
            if (windowPos >= (wwPos.top - (wwPos.top/2))) {
                jQuery('#block-testfortoi .views-col').css('animation-name', 'fadeIn');
                
            }



//            var wcPos = jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col').offset();
//            if (windowPos >= (wcPos.top - (wcPos.top/2.5))) {
//                jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col.col-1').fadeTo('fast', 1 ,function(){
//                   jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col.col-2').fadeTo('fast', 1, function(){
//                        jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col.col-3').fadeTo('fast', 1);
//                   });
//                });
//            }
            
            var wcPos = jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col').offset();
            if (windowPos >= (wcPos.top - (wcPos.top/2.5))) {
//                jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col.col-1').fadeTo(200, 1);
//                jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col.col-2').fadeTo(600, 1);
//                jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col.col-3').fadeTo(1000, 1);
                jQuery('#block-views-block-frontpage-whycityu-down-block-1 .views-col').css('animation-name', 'fadeIn');
                

            }
            
            
            var wcbPos = jQuery('.para_frontpage_whycityu_text p a').offset();
            if (windowPos >= (wcbPos.top - (wcbPos.top/2.5))) {
                jQuery('.para_frontpage_whycityu_text p a').css('animation-name', 'fadeInUp');

            }            
            
            
            var pgPos = jQuery('#block-frontpage-3circles-colleges ').offset();
            if (windowPos >= (pgPos.top - (pgPos.top/3))) {
                jQuery('#block-frontpage-3circles-colleges .paragraph--type--bp-columns__3col').css('animation-name', 'bounceIn');

            }
            

    });
}
    
jQuery( ".view-id-frontpage_whycityu_up .col-1 .views-field-field-toi .field-content").addClass('numscroller').attr('data-min', '1').attr('data-max', '4').attr('data-delay', '10').attr('data-increment', '1').delay(1000);
jQuery( ".view-id-frontpage_whycityu_up .col-3 .views-field-field-toi .field-content").addClass('numscroller').attr('data-min', '1').attr('data-max', '49').attr('data-delay', '5').attr('data-increment', '5').delay(1000);


/*hover effect*/

jQuery( "#block-frontpagenewsevents-2 .field--name-field-toi" ).each(function() {

    var title = jQuery(this).text();
    jQuery(jQuery(this).siblings('.field--name-bp-image-field').find('img')).wrap( '<div class="newsContainer"></div>' );
    jQuery('<div class="titleContainer"><div class="titleLink"> ' + title + ' </div></div>').insertAfter(jQuery(this).siblings('.field--name-bp-image-field').find('img'));


    

});


/*counting number effect*/



/*************/
/*about cityu*/
/*************/



/*old design: rearrange the layout when the screen size shrinks

var lowerSwap;
var upperSwap;

if (jQuery('#block-mainnavigation-2').css('display') === 'none') {
    lowerSwap = 0;
    upperSwap = 1;
    jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').insertAfter('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)');
    jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-left', '0');
    jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-right', '0');
    
    jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').insertAfter('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)');
    jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-left', '0');
    jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-right', '0');
    
    jQuery('#block-whycityu-home-subject-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').css('padding-top', '0');
    jQuery('#block-whycityu-home-subject-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-top', '6%');
    
}else{
    lowerSwap = 1;
    upperSwap = 0;
}

jQuery(window).resize(function() {
    if (jQuery('#block-mainnavigation-2').css('display') === 'none') {
        if (lowerSwap === 1){
            jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').insertAfter('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)');
            jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-left', '0');
            jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-right', '0');
            
            jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').insertAfter('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)');
            jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-left', '0');
            jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-right', '0');
            
            jQuery('#block-whycityu-home-subject-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').css('padding-top', '0');
            jQuery('#block-whycityu-home-subject-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-top', '6%');
    
            lowerSwap = 0;
            upperSwap = 1;
        }  
    }else{
        if (upperSwap === 1){
            jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').insertAfter('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)');
            jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-left', '15px');
            jQuery('#block-whycityu-home-intl-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-right', '15px');
            
            jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').insertAfter('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)');
            jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-left', '15px');
            jQuery('#block-whycityu-home-students-from-50countries .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-right', '15px');
            
            jQuery('#block-whycityu-home-subject-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(1)').css('padding-top', '6%');
            jQuery('#block-whycityu-home-subject-rankings .paragraph__column .paragraph--type--bp-columns__2col:nth-child(2)').css('padding-top', '0');
            upperSwap = 0;
            lowerSwap = 1;
        }  
        
        
    }
});

*/


/********/
/*Alumni*/
/********/


/*fixed bg color & block width design*/

var alumniColorCount = 0;
var alumniColors = ["#c79952", "#863275", "#0d617d", "#197b73", "#197b73", "#863275", "#863275", "#c79952", "#c79952", "#863275", "#0d617d", "#197b73", "#c79952", "#863275", "#0d617d", "#197b73", "#197b73" ];

jQuery( "#block-views-block-aboutcityu-student-alumni-block-1 .views-row" ).each(function() {
    jQuery(this).css('background-color',alumniColors[alumniColorCount]);
    alumniColorCount++;

});



var alumniWidthCount = 0;
var alumniWidth = [43, 45, 53, 45, 57, 50, 57, 43, 45];

jQuery( "#block-views-block-aboutcityu-student-alumni-block-1 .views-row:nth-child(odd)" ).each(function() {

    
    var x = alumniWidth[alumniWidthCount];
    var y = 97 - x;
    jQuery(this).css('width',x +'%');
    jQuery(this).next().css('width', y + '%');
    alumniWidthCount++;
    

});



/*pop out modal*/



/*pop out when profile photo is clicked*/
jQuery( "#block-views-block-aboutcityu-student-alumni-block-1 .views-row .views-field-title" ).click(function() {
    jQuery(this).siblings('.views-field-field-story').css('display','block');
    jQuery(this).siblings('.views-field-field-story').find('.people_story_summary').hide();
    jQuery(this).siblings('.views-field-field-story').find('.people_story_hidden').show();
    

});


/*disappears when clicking spaces other than modal*/
jQuery('body').click(function(e) {
    if (jQuery(e.target).hasClass('people_alumni_modal_class')) {
        jQuery('.views-field-field-story').hide();
        
    }

});


/*close icon*/

jQuery('.people_alumni_modal_class .people_alumni_modal_close').click(function() {
    
    
    jQuery('.views-field-field-story').hide();
    
               
});

/*more button (old design

jQuery('.people_alumni_modal_class .people_story_more').click(function() {
    
    jQuery(this).parents('.people_story_summary').hide();
    jQuery(this).parents('.people_story_summary').siblings('.people_story_hidden').show();
    
               
});


*/

/**********************/
/*research degree home*/
/**********************/

/*pop up number effect when scrolling down*/

if (jQuery('#block-mainnavigation-2 .expanded:nth-child(2) .dropdown-menu li a:contains("Home")').hasClass('is-active')){
    jQuery(window).scroll(function() {
            var windowPos = window.pageYOffset;
            var noPos = jQuery('#block-researchhome-figures .views-col .views-field-field-toi').offset();
            if (windowPos >= (noPos.top - (noPos.top/2))) {
                jQuery('#block-researchhome-figures .views-col .views-field-field-toi').animate({
                    opacity: 1,
                    marginTop: 0
                  }, 800 );
            }

    });
}
    



/*photo + text = hyperlink*/

jQuery('#block-researchhome-figures .views-col .views-field-body a').each(function() {
    var link = jQuery(this).attr('href');
    jQuery(this).parents('.views-col').wrap('<a href="'+ link + '"></a>');


});







/*hover effect for the profile*/


jQuery( ".views-field-field-know-more img" ).addClass( "profileImage" );

jQuery( ".views-field-field-know-more .field-content > div" ).addClass( "profileContainer" );

jQuery( ".views-field-field-know-more .field-content > div div:nth-child(1)" ).addClass( "profileBG" );

jQuery( ".views-field-field-know-more .field-content > div div:nth-child(2)" ).addClass( "middleKnowmore" );

jQuery( ".views-field-field-know-more a" ).addClass( "knowMore" );


jQuery( "#block-researchhomeresearchers .profileBG" ).each(function() {

    var link = jQuery(this).siblings('.middleKnowmore').children().attr('href');
    
    jQuery(this).children().wrap( '<a href="' + link + '"></a>');


});



/*random profile*/

var researcher = new Array(18);
for (var i = 0; i < 18; i++) {
  researcher[i] = new Array(4);
}


if (jQuery('#block-mainnavigation-2 .expanded:nth-child(2) .dropdown-menu li a:contains("Home")').hasClass('is-active')){
        //gather all profile html
        for (x = 0; x < 18; x++){
            for (y = 0; y < 4; y++) { 
                researcher[x][y] = jQuery('#block-researchhomeresearchers .views-row:nth-child('+ (x + 1) +') .views-col:nth-child('+ (y + 1) +')').html();                   
                /*jQuery(this).children().eq(y).empty();*/                       
            }
        }
 


    window.setInterval(function(){
        jQuery( "#block-researchhomeresearchers .view-researchhome-4researchers-random" ).each(function() {
            var chosen = [];
            jQuery(this).fadeOut(function(){
                //randomly distribute the profile position
                var randomRow, randomCol;
                for (row = 0; row <= 1; row++){
                    for (col = 0; col < 4; col++) { 
                        do{
                            var randomRow = Math.floor((Math.random() * 18));
                            var randomCol = Math.floor((Math.random() * 4));
                        }while (!(chosen.indexOf(researcher[randomRow][randomCol]) === -1));
                        chosen.push(researcher[randomRow][randomCol]);
                        jQuery('#block-researchhomeresearchers .views-row:nth-child('+ (row + 1) +') .views-col:nth-child('+ (col + 1) +')').html(researcher[randomRow][randomCol]);
                    } 
                }
            });

            jQuery(this).fadeIn();


    });

    }, 10000);
    
    
 };























/****************/
/*research areas*/
/****************/


/*
    
    Since Drupal cannot create a simple select box without installing extended modules,
    a "fake" select box is built by pure javascript & CSS.

*/


/*select box display*/
jQuery('#block-views-block-research-areas-block-1 .views-field-field-coll-coordinator .field-content > p > strong').click(
    function() { 
        if (jQuery(this).parent().siblings('table').css('display') === 'none'){
            jQuery(this).css('background-color','#A7A9AC');
            jQuery(this).parent().siblings('table').show();
        
        }else{
            jQuery(this).css('background-color','#863d75');
            jQuery(this).parent().siblings('table').hide();
            
        }
    } 
);



/*add a select box to those which have multiple departments*/



jQuery( "#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_dept ol" ).each(function() {

    
    var dHeader = jQuery(this).children('li').length;
    var i;
    var item;
    var list =  jQuery(this).parent().siblings('.view_research_areas_ul');
    for (i = 0; i < dHeader + 1; i++) { 
            if (i === 0){
                list.append('<li><span style="color: #939598">Choose a Department</span></li>');
            }else{
                /*extract heading of each department from details description blocks to form the select list*/
           
                item = jQuery(this).find('li:nth-child(' + i + ') h2 > a > .field--name-name').text();
                list.append('<li>' + item + '</li>');
            }
    }

});


jQuery( "#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_ul li:nth-child(1)" ).addClass( "selectedDepartment" );


/*dropdown list disappear when clicking spaces other than the select list*/

jQuery('body').click(function(e) {
    
    
    if (jQuery(e.target).hasClass('selectedDepartment')) {
        jQuery(e.target).siblings('li').toggle();
    }else{
        jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_ul li:not(:nth-child(1))').hide();
    }
               
});


/*change the select box content with department selected*/
jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_ul li:not(:nth-child(1))').click(function(){
                    
    var target = jQuery(this).text();
    jQuery(this).siblings('.selectedDepartment').text(target);
   

});


/*show the corresponding selected department description block*/

jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_ul li:not(:nth-child(1))').click(function(){
        var index = jQuery(this).parent().find('li').index(jQuery(this));    
        var target = jQuery(this).parent().parent().find(".view_research_areas_dept ol li:nth-child(" + index + ")");   
        jQuery(this).parent().parent().find(".view_research_areas_dept ol").css('display','block');
        jQuery(this).parent().parent().find('.view_research_areas_dept ol li').css('display','none');
        target.css('display','block');
        
        
});

/*link disable*/


jQuery('.view_research_areas.col-sm-12 ol li h2 a').removeAttr('href');




/*****/
/*phd*/
/*****/


/*fix the active indicator issue*/
if (jQuery('#block-mainnavigation-2 .dropdown-menu li a:contains("Hong Kong PhD Fellowship Scheme")').hasClass('is-active')){
    

    jQuery('#block-menu2-research-degree ul li a:contains("Hong Kong PhD Fellowship Scheme")').parent().addClass('active');
}


/*
    This index list mechanism is based on the order of the list item and the content block.
    ie. The user select the 2nd item of the select list, then the 2nd description block will be shown.

    Therfore, please be careful when modifying either the list items and the content blocks.
    
    The list item is recognized as <p>.
    The description block is recognized as <div> inside class "col-sm-10".
    
*/


jQuery('.landing_research_phdfscheme .col-sm-2 p').click(function(){
        var index = jQuery("p").index(jQuery(this)) - 3;
        
        /*For exceptional case as the 12th list item is a hyperlink with no corresponding description block*/
        if (index === 12) {index = -1;}
        if (index === 13) { index--;}
        
        
        jQuery('.landing_research_phdfscheme > .col-sm-10 div').css('display','none');
        
        var target = jQuery(".landing_research_phdfscheme .col-sm-10 div:nth-child(" + index + ")");
        target.show();
        
        
        
        
        
        
         
        if (index === 2 || index === 3 ){
            var target1 = jQuery(".landing_research_phdfscheme .col-sm-10 div:nth-child(2)");
            var target2 = jQuery(".landing_research_phdfscheme .col-sm-10 div:nth-child(3)");
            target1.show();
            target2.show();
            
        }
        
    
        /* old design:
        else if (index === 4 || index === 5 ){
                var target1 = jQuery(".landing_research_phdfscheme .col-sm-10 div:nth-child(4)");
                var target2 = jQuery(".landing_research_phdfscheme .col-sm-10 div:nth-child(5)");
                target1.show();
                target2.show();   
        }else{
            
            var target = jQuery(".landing_research_phdfscheme .col-sm-10 div:nth-child(" + index + ")");
            target.show();
        }
        
        */
       
        /*
        if (target.length){
            jQuery('html,body').animate({scrollTop: target.offset().top},'slow');
        }
        */
       
        
        
    });


/*anchor: introduction -> enquiries*/
    
jQuery('.landing_research_phdfscheme .anchor1').click(function(){
    
    jQuery('.landing_research_phdfscheme > .col-sm-10 div').css('display','none');
    jQuery('.landing_research_phdfscheme .col-sm-10 div:nth-child(12)').show(); 
       
        
});





/***********/
/*apply now*/
/***********/

/*for anchor from steps & procedures*/



jQuery('#block-body-2 > div > div.landing_taught_applynow_text > ul:nth-child(45)').attr('id', 'landling_taught_applynow_visa');
jQuery('#block-body-2 > div > div.landing_taught_applynow_text > h2:nth-child(46)').removeAttr('id');



/********************************/
/*Taught Postgraduate Programmes*/
/********************************/


/*hover effect*/
jQuery( "#block-views-block-taught-home-blocks-block-1 .views-field-field-image .field-content > div" ).addClass( "tppContainer" );
jQuery( "#block-views-block-taught-home-blocks-block-1 .views-field-field-image .field-content > div > div:nth-child(2) a" ).addClass( "tppLink" );
jQuery( "#block-views-block-taught-home-blocks-block-1 .views-field-field-image .field-content > div > div:nth-child(2) p" ).addClass( "tppLink" );
jQuery( "#block-views-block-taught-home-blocks-block-1 .views-field-field-image .img-responsive" ).addClass( "tppImg" );


/*************/
/*divers area*/
/*************/

/*hover effect*/
jQuery( "#block-views-block-taught-diverse-areas-block-1 .views-col" ).addClass( "daContainer" );
jQuery( "#block-views-block-taught-diverse-areas-block-1 .views-field-body .field-content a" ).addClass( "daLink" );
jQuery( "#block-views-block-taught-diverse-areas-block-1 .views-field-field-image img" ).addClass( "daImg" );


/*glbal variable for redirection to program list page*/


/*
    This index mechanism is based on the order of the list item and the content block.
    ie. The user select the 2nd college/school, then it wil redirect to the 2nd table of program list.

    Therfore, please be careful when modifying the items at diverse areas and program list.
    
    The list item is recognized as <p>.
    The description block is recognized as <div> inside class "col-sm-10".
    
*/

jQuery('#block-views-block-taught-diverse-areas-block-1 .views-field-body p a').click(function(){
    /*store the index of the college/school*/
    var index = jQuery("#block-views-block-taught-diverse-areas-block-1 .daContainer").index(jQuery(this).parents('.daContainer')) + 1;
    localStorage.targetCollegeSchool = index;
    
});






    
   

/**********/
/*visiting*/
/**********/



/* old design

jQuery( ".landing_visiting_research .col-sm-6:nth-child(1) li:nth-child(1)" ).addClass('visitingLinkFocus');

jQuery('.landing_visiting_research .col-sm-6 li').click(function(){
    
        jQuery('.landing_visiting_research .col-sm-6 li').removeClass('visitingLinkFocus');
        jQuery(this).addClass('visitingLinkFocus');
        
        
        var index = jQuery(".landing_visiting_research .col-sm-6 li").index(jQuery(this)) + 1;
        
        var target = jQuery(".landing_visiting_research .col-sm-6 div:nth-child(" + index + ")");
        
        
        jQuery('.landing_visiting_research .col-sm-6 div').css('display','none');
        target.css('display','block');
        
       
        
    });
    
  */
    
    
/*
jQuery( ".landing_visiting_postgraduate .col-sm-6:nth-child(1) li:nth-child(1)" ).addClass('visitingLinkFocus');

jQuery('.landing_visiting_postgraduate .col-sm-6 li').click(function(){
    
        jQuery('.landing_visiting_postgraduate .col-sm-6 li').removeClass('visitingLinkFocus');
        jQuery(this).addClass('visitingLinkFocus');
        
        
        var index = jQuery(".landing_visiting_postgraduate .col-sm-6 li").index(jQuery(this)) + 1;
        
        var target = jQuery(".landing_visiting_postgraduate .col-sm-6 div:nth-child(" + index + ")");
        
        
        jQuery('.landing_visiting_postgraduate .col-sm-6 div').css('display','none');
        target.css('display','block');
        
        
 
        
    });
    

*/




/*active effect*/
if (jQuery('#block-mainnavigation-2 .dropdown-menu li a:contains("Visiting Postgraduate Students")').hasClass('is-active')){
    

    jQuery('#block-menu2-visiting-postgraduate-student ul li a:contains("Visiting Postgraduate Students")').parent().addClass('active');
}



/*same design as phd*/
jQuery('.landing_visiting_research .col-sm-2 li').click(function(){

        
        
        var index = jQuery(".landing_visiting_research .col-sm-2 li").index(jQuery(this)) + 1;
        
        var target = jQuery(".landing_visiting_research .col-sm-10 div:nth-child(" + index + ")");
        
        
        jQuery('.landing_visiting_research .col-sm-10 div').css('display','none');
        target.css('display','block');
        
       
        
    });
    
       jQuery('.landing_visiting_postgraduate .col-sm-2 li').click(function(){

        
        
        var index = jQuery(".landing_visiting_postgraduate .col-sm-2 li").index(jQuery(this)) + 1;
        
        var target = jQuery(".landing_visiting_postgraduate .col-sm-10 div:nth-child(" + index + ")");
        
        
        jQuery('.landing_visiting_postgraduate .col-sm-10 div').css('display','none');
        target.css('display','block');
        
       
        
    });
    
    
/**************/  
/*program list*/
/**************/
    
  
 /*page initialization*/
 
 
/*
    To check that redirection from the Diverse Areass page:
    
    The global variable "targetCollegeSchool" is initialized as -1.
    Before the redirection from the Diverse Area, value of targetCollegeSchool will be changed to the corresponding index.
    Every time when loading the progam list page, value of targetCollegeSchool wil be checked.
    
    If targetCollegeSchool > -1, rediection exists and it shows the related table.
    If targetCollegeSchool === -1, nothing happens.
    
 */
jQuery(window).load(function() {
    
    var temp = localStorage.targetCollegeSchool; 
    localStorage.targetCollegeSchool = -1;
    if (temp > -1){
        
        jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content').show();
        jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header strong').addClass('glyphicon-minus');
        jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content .views-row:nth-child(' + temp + ')').addClass('programlistFocus');
        var target = jQuery("#block-views-block-taught-programme-list-body3-block-1 .table-responsive:nth-child(" + temp + ")");  
        jQuery('#block-views-block-taught-programme-list-body3-block-1 .table-responsive').css('display','none');
        target.css('display','block');
        
    }
    
});
 
 
 jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header strong').addClass('glyphicon').addClass('glyphicon-plus');
 
 /*toggle of the program select list*/
 
 
 jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header').click(function(){
        if (jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content').css('display') === 'none'){
            jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content').show('slow');
            jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header strong').removeClass('glyphicon-plus');
            jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header strong').addClass('glyphicon-minus');

        }
        else{
            jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content').hide('slow');
            jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header strong').addClass('glyphicon-plus');
            jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header strong').removeClass('glyphicon-minus');
        }
            
 });
 
 
 jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content .views-row').click(function(){
        
        
        jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content .views-row').removeClass('programlistFocus');
        jQuery(this).addClass('programlistFocus');
        
        
        var index = jQuery("#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content .views-row").index(jQuery(this)) + 1;
        
        var target = jQuery("#block-views-block-taught-programme-list-body3-block-1 .table-responsive:nth-child(" + index + ")");
        
        
        jQuery('#block-views-block-taught-programme-list-body3-block-1 .table-responsive').css('display','none');

        target.css('display','block');
        
        
        /*
        if (target.length){
            jQuery('html,body').animate({scrollTop: target.offset().top},'slow');
        }
        */
        
    });
    
    
/*full list button*/
jQuery( '<span id="fullListButton">Full List</span>').insertAfter( "#block-views-block-list-of-colleges-and-schools-block-2" );


 jQuery('#fullListButton').click(function(){
    jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content .views-row').removeClass('programlistFocus');
    jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-content').hide('slow');
    jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header strong').addClass('glyphicon-plus');
    jQuery('#block-views-block-list-of-colleges-and-schools-block-2 .view-list-of-colleges-and-schools .view-header strong').removeClass('glyphicon-minus');
    jQuery('#block-views-block-taught-programme-list-body3-block-1 .table-responsive').css('display','block');
    
    
    
            
 });

    

/*divide into department*/


/* The department header should be placed right before the first program of each colleges/schools*/
 
 jQuery('#block-views-block-taught-programme-list-body3-block-1 .table-responsive').each(function(){
    var dept = 0;
    var college = jQuery.trim(jQuery(this).find('caption').text());
    jQuery(this).find('.view-group-coll').each(function(){
        var currentCollege = jQuery.trim(jQuery(this).find('.views-field-field-refer-coll-code').text());
        var currentDept = jQuery(this).find('.views-field-field-dept-long-desc').text();


        //add the department header before the first program 
        
        if (currentCollege === college){
            if (!(currentDept === dept)){
                jQuery('<tr><td colspan="8" class="deptName">' + currentDept + '</td></tr>').insertBefore(this);
                dept = currentDept;
            }
        }else{
            
            var program = jQuery(this);
            var selfCode = jQuery.trim(jQuery(this).find('.views-field-field-admit-prog-code').text());
            
            var relocateDept = jQuery('#block-views-block-taught-programme-list-body3-block-1 .table-responsive caption:contains("' + currentCollege + '") ').siblings('tbody').find('.view-group-coll .views-field-field-dept-long-desc:contains("' + currentDept + '")').parent('.view-group-coll');
            var previousCode = "P00";
            var validCheck = 1;
            
            relocateDept.each(function(){
                var currentCode = jQuery.trim(jQuery(this).find('.views-field-field-admit-prog-code').text());
                
                if (selfCode > previousCode && selfCode < currentCode){
                    program.insertBefore(jQuery(this));
                    validCheck = 0;
                    return false;
                }else{
                    previousCode = currentCode;
                }   
            });
            if (validCheck === 1){
                program.insertAfter(relocateDept.last());
            }
            
           
           
           
            
        }
       
    });
    
});
    
    
    

    
    
/*table header*/

jQuery("#block-views-block-taught-programme-list-body3-block-1 thead").html('<tr><th rowspan="2">Code</th><th rowspan="2">Programme Title</th><th rowspan="2">Mode of Study</th><th colspan="2">Application Deadline<br>(by 23:59 of the specified date)</th><th colspan="2">Accept Late Applications</th><th rowspan="2">Links</th></tr><tr><th>Local</th><th>Non-Local</th><th>Local</th><th>Non-Local</th></tr>');
jQuery("#block-views-block-taught-programme-list-body2-block-1 thead").html('<tr><th rowspan="2">Code</th><th rowspan="2">Programme Title</th><th rowspan="2">Mode of Study</th><th colspan="2">Application Deadline<br>(by 23:59 of the specified date)</th><th colspan="2">Accept Late Applications</th><th rowspan="2">Links</th></tr><tr><th>Local</th><th>Non-Local</th><th>Local</th><th>Non-Local</th></tr>');
    



/****************/
/*program search*/
/****************/
jQuery('#edit-submit-programme-search').text("Search");

jQuery('.view-programme-search #edit-field-prog-title-value').attr("placeholder", "Insert Your Keywords");


jQuery(".view-programme-search thead").html('<tr><th rowspan="2">Code</th><th rowspan="2">Programme Title</th><th rowspan="2">Mode of Study</th><th colspan="2">Application Deadline<br>(by 23:59 of the specified date)</th><th colspan="2">Accept Late Applications</th><th rowspan="2">Links</th></tr><tr><th>Local</th><th>Non-Local</th><th>Local</th><th>Non-Local</th></tr>');
    




/*****/
/*faq*/
/*****/


jQuery('.view-taught-faq-01 .form-group').attr('id', 'faqAnchor');

var originAction = jQuery('#views-exposed-form-taught-faq-01-page-1').attr('action');
var newAction = originAction + '#faqAnchor';
jQuery('#views-exposed-form-taught-faq-01-page-1').attr('action', newAction);

jQuery('#edit-field-faq-role-target-id, #edit-field-faq-category-target-id-1, #edit-field-faq-language-target-id').change(function(){
    var qapp = jQuery('#edit-field-faq-role-target-id option:selected').text();
    var qcat = jQuery('#edit-field-faq-category-target-id-1 option:selected').text();
    var qlang = jQuery('#edit-field-faq-language-target-id option:selected').text();

    jQuery('.view-taught-faq-01 .views-row').hide();
    jQuery('.view-empty').hide();
    jQuery('#block-views-block-taught-faq-01-block-1').show();





    /*to get the instant sorted result*/
    jQuery('#block-views-block-taught-faq-01-block-1 .views-row').each(function(){
        var aapp = jQuery.trim(jQuery(this).find('.views-field-field-faq-role .field-content').text());
        var acat = jQuery.trim(jQuery(this).find('.views-field-field-faq-category .field-content').text());
        var alang = jQuery.trim(jQuery(this).find('.views-field-field-faq-language .field-content').text());
        
        if(aapp === qapp && acat === qcat &&  alang === qlang){
            jQuery(this).show();
        }
        else{
            jQuery(this).hide();
        }
    });
    
    
    
});







jQuery('.view-taught-faq-01 #edit-combine').attr("placeholder", "Insert Your Keywords");

jQuery('.views-field-field-faq-question').click(function(){
    if (jQuery(this).siblings('.view-taught-faq-01 .views-field-body').css('display') === 'none'){
        jQuery(this).find('.field-content > div:nth-child(1)').css('background-color','#863275');
        jQuery(this).find('.view_taught_faq_plus').text("-");
    }
    else{
        jQuery(this).find('.field-content > div:nth-child(1)').css('background-color','grey');
        jQuery(this).find('.view_taught_faq_plus').text("+");
        
    }
    jQuery(this).siblings('.view-taught-faq-01 .views-field-body').toggle('fast');
            
 });



jQuery( '.view-taught-faq-01 #edit-submit-taught-faq-01').empty();
jQuery( '.view-taught-faq-01 #edit-submit-taught-faq-01').addClass('glyphicon glyphicon-search');









/* old design

jQuery( '<span id="showAllButton">Show All</span>').insertAfter( "#edit-submit-taught-faq" );
jQuery( '<span id="topQuestionButton">Top Questions</span>').insertAfter( "#edit-submit-taught-faq" );


jQuery('#topQuestionButton').click(function(){
   jQuery('.view-taught-faq-page .view-content').css('display','none');
   jQuery('#block-views-block-taught-faq-block-1').css('display','none');
   jQuery('#block-views-block-taught-faq-block-2').css('display','block');
});


jQuery('#showAllButton').click(function(){
   jQuery('.view-taught-faq-page .view-content').css('display','none');
   jQuery('#block-views-block-taught-faq-block-2').css('display','none');
   jQuery('#block-views-block-taught-faq-block-1').css('display','block');
});
*/



/*select condition
    
  Local Application : Category A ~ G

 */

/*when page initialize*/
var applicantValue = jQuery("#edit-field-faq-role-target-id option:selected").val();
if (applicantValue === '419'){
    jQuery('#edit-field-faq-category-target-id-1 option:nth-child(8)').hide();
    jQuery('#edit-field-faq-category-target-id-1 option:nth-child(9)').hide();

}else{
    jQuery('#edit-field-faq-category-target-id-1 option:nth-child(8)').show();
    jQuery('#edit-field-faq-category-target-id-1 option:nth-child(9)').show();
}


/*when option selected*/
jQuery("#edit-field-faq-role-target-id").change(function(){
    var applicantValue = jQuery("#edit-field-faq-role-target-id option:selected").val();
    if (applicantValue === '419'){
        jQuery('#edit-field-faq-category-target-id-1 option:nth-child(8)').hide();
        jQuery('#edit-field-faq-category-target-id-1 option:nth-child(9)').hide();

    }else{
        jQuery('#edit-field-faq-category-target-id-1 option:nth-child(8)').show();
        jQuery('#edit-field-faq-category-target-id-1 option:nth-child(9)').show();
    }
});



/**********************/
/*entrance requirement*/
/*********************/

jQuery('body').click(function(e) {
    
    
    if (jQuery(e.target).parent().hasClass('view-header')) {
        jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-content').toggle();
    }else{
        jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-content').hide();
    }
               
});


jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-content .views-row').click(function(){
                    
    var target = jQuery(this).text();
    jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-header h2').text(target);
   

});


jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-content .views-row').click(function(){
        var index = jQuery("#block-views-block-research-entrance-coll-list-block-2 .view-content .views-row").index(jQuery(this)) + 1;    
        var target = jQuery("#block-views-block-research-entrance-eng-p-require-block-1 .view-content .views-row:nth-child(" + index + ")");     
        jQuery('#block-views-block-research-entrance-eng-p-require-block-1 .views-row').css('display','none');
        target.css('display','block');
        
        
    });
    


/********/
/*footer*/
/********/
jQuery('footer .paragraph--type--bp-columns.paragraph--view-mode--default').addClass('container');



/*********/
/*enquiry*/
/*********/

/*form logic flow*/

jQuery('#contact-message-online-enquiry-form-form').submit(function(){
    
    var logicCheck = 0;
    
    var levelOfStudy = jQuery("#edit-field-type-of-study-name option:selected").text();
    var losInfo = jQuery('#edit-field-type-of-study option:contains("' + levelOfStudy + '")').text();
    var losEmail = losInfo.split('+');
    
    
    var program = jQuery("#edit-field-interested-prog-name option:selected").text();
    var pInfo = jQuery('#edit-field-interested-prog option:contains("' + program + '")').text();
    var pEmail = pInfo.split('+');
    
    var qtype = jQuery('#edit-field-question-type option:selected').text();
    

    
    jQuery('#edit-field-i-want-to-ask-about-0-value').val(program);
    jQuery('#edit-field-email-level-study-0-value').val(levelOfStudy);
    jQuery('#edit-field-email-question-type-0-value').val(qtype);
    


    /*exceptional case*/
    if (levelOfStudy === "Taught Postgraduate Programmes (TPg)" || !(program === "- None -")){
        if (!(qtype === "Fees / Payment" || qtype === "System Related Matters" || qtype === "Visa and Pre-arrival Information" || qtype === "Others" || qtype === "_none")){
            if (!(pEmail[1] === "")){
                logicCheck = 1;
            }
        }
    }
    
    if (logicCheck === 0){
        jQuery('#edit-field-recipient-0-value').val(losEmail[1]);
    }else{
        jQuery('#edit-field-recipient-0-value').val(pEmail[1]);
        
    }
    
    
});





/****************/
/*public lecture*/
/****************/

/*hover effect*/

jQuery('#block-views-block-news-events-public-lecture-block-1 .views-row .views-field-body p').each(function() {

    var title = jQuery(this).html();
    jQuery(jQuery(this).parents('.views-field-body').siblings('.views-field-field-image').find('img')).wrap( '<div class="newsContainer"></div>' );
    jQuery('<div class="titleContainer"><div class="titleLink"> ' + title + ' </div></div>').insertAfter(jQuery(this).parents('.views-field-body').siblings('.views-field-field-image').find('img'));

    var plLink = jQuery(this).find('a').attr('href');
    jQuery(jQuery(this).parents('.views-field-body').siblings('.views-field-field-image')).wrap( '<a href ="'+ plLink + '"></div>' );
    

});


