/************/
/*admin page*/
/************/


/*user name is shown directly on the navbar*/

var admin = jQuery('#block-entityviewuser h2.block-title').text();
jQuery('.region-cityu-user-menu ul li:last-child > a.dropdown-toggle').text(admin);
//jQuery('#block-usercityumenu li a[title="User Logout"]').parents('.menu.nav-pills.dropdown-menu').siblings('.dropdown-toggle').text(admin);
//jQuery('#block-usercityumenusupport li a[data-drupal-link-system-path="user/logout"]').parents('.menu.nav-pills.dropdown-menu').siblings('.dropdown-toggle').text(admin);



/*hide the header*/

if (jQuery('body.user-logged-in').length){
    jQuery('.main-header.container > aside.col-sm-2').css('top', '30%');
}

if(jQuery('body.user-logged-in.path-view').length || jQuery('body.user-logged-in.path-user').length || jQuery('body.user-logged-in.path-group').length){
    jQuery('.region.region-header, .region.region-primary-menu, .region.region-header-right, footer').hide();
    jQuery('.main-container.container-fluid.js-quickedit-main-content').css('border', '0');
    jQuery('.region.region-header-right').hide();
    jQuery('.table-responsive').css('overflow-x', 'unset');
    
}




/***************/
/*website title*/
/***************/

jQuery('.region-header p.navbar-text').wrap('<a href="/"></a>');


/*******************/
/*Language switcher*/
/*******************/

//Disable language switcher when no translation is available

jQuery(document).ready(function(){
    var en = jQuery('#block-languageswitcher li[hreflang = "en"] a');
    var tc = jQuery('#block-languageswitcher li[hreflang = "zh-hant"] a');
    var sc = jQuery('#block-languageswitcher li[hreflang = "zh-hans"] a');
    
    if (!(tc.attr('href').indexOf(en.attr('href')) >= 0)){
        tc.parent().hide();
    }
    if (!(sc.attr('href').indexOf(en.attr('href')) >= 0)){
        sc.parent().hide();
    }
    
});




/********/
/*navbar*/
/********/

/*enable the hyperlink of dropdown triggle itself*/
/*ie. click "Research Degree Pogrammes" will jump to the homepage of research degree programmes*/

jQuery('#block-mainnavigation-2 .dropdown a:nth-child(1)').removeAttr('data-toggle');




/*fixed navbar*/



if (jQuery('#block-mainnavigation-2').css('display') === 'block' && (!jQuery('.region-cityu-user-menu').length)){
    jQuery(window).scroll(function(){
            
        var navbar = jQuery('body > div.main-header');
        var offset = navbar.offset();
        
        /*when window scroll down to certain height, fixed bar appears*/
        
        if (jQuery(window).scrollTop()  >  offset.top + 150) {
            navbar.removeClass('container');
            navbar.addClass('container-fluid');
            jQuery('body > div.main-header > div').addClass('fixedNavbar');
            jQuery('.main-header > .col-sm-12 > .region-primary-menu').addClass('container');
        }

        /*when window scroll up to certain height, fixed bar disappears*/
        if (jQuery(window).scrollTop()  <  offset.top + 150){
            navbar.addClass('container');
            navbar.removeClass('container-fluid');
            jQuery('body > div.main-header > div').removeClass('fixedNavbar');
            jQuery('.main-header > .col-sm-12 > .region-primary-menu').removeClass('container');
        }
    });

}


/*navbar image*/

for (i = 1; i <= 7; i++) { 
    
/*    var photo = jQuery('#block-mainmenuphotos .paragraph:nth-child(' + i + ')').find('img');		*/
	var photo = jQuery('#block-mainmenuphotos div:nth-child(' + i + ') .paragraph').find('img');
    jQuery('#block-mainnavigation-2 > ul > li:nth-child(' + i + ') .dropdown-menu').append(photo);
    
}


jQuery('#block-mainnavigation-2 .dropdown-menu > li > a.is-active').each(function(){
    jQuery(this).parent('li').addClass('active');
    
});


/******************/
/*secondary navbar*/
/******************/

/*remove space between secondary navbar and introduction banner*/

if (jQuery('#block-researchhome-bar').length || jQuery('#block-doctoratehome-introduction').length || jQuery('#block-taughthome-introduction').length){
    jQuery('.region.region-secondary-menu ul').css('margin-bottom', '0');
}

/******/
/*home*/
/******/



/*learn more*/

jQuery('#block-frontpageaboutcityu a:contains("Learn More")').append(' <i class="fa fa-angle-right" aria-hidden="true"></i>');

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
    
jQuery('.view-frontpage-whycityu-up .views-col .views-field-field-toi .field-content').each(function(){
    var max = jQuery(this).text();
    var no_increment;
    if(max <= 10){
        no_increment = 1;
    }else if (max <= 50){
        no_increment = 2;
    }else{
        no_increment = 5;
    }
    jQuery(this).addClass('numscroller').attr('data-min', '1').attr('data-max', max).attr('data-delay', no_increment).attr('data-increment', no_increment).delay(1000);
});


jQuery( "#block-views-block-frontpage-whycityu-down-block-1 .views-field-field-toi .field-content").each(function(){
    var max = jQuery(this).text();
    var no_increment;
    if(max <= 10){
        no_increment = 1;
    }else if (max <= 50){
        no_increment = 2;
    }else{
        no_increment = 5;
    }
    jQuery(this).addClass('numscroller').attr('data-min', '1').attr('data-max', max).attr('data-delay', no_increment).attr('data-increment', no_increment).delay(1000);
});
    
//jQuery( ".view-id-frontpage_whycityu_up .col-1 .views-field-field-toi .field-content").addClass('numscroller').attr('data-min', '1').attr('data-max', '4').attr('data-delay', '1').attr('data-increment', '1').delay(1000);
//jQuery( ".view-id-frontpage_whycityu_up .col-2 .views-field-field-toi .field-content").addClass('numscroller').attr('data-min', '1').attr('data-max', '7').attr('data-delay', '1').attr('data-increment', '1').delay(1000);
//jQuery( ".view-id-frontpage_whycityu_up .col-3 .views-field-field-toi .field-content").addClass('numscroller').attr('data-min', '1').attr('data-max', '49').attr('data-delay', '3').attr('data-increment', '2').delay(1000);
//jQuery( "#block-views-block-frontpage-whycityu-down-block-1 .col-1 .views-field-field-toi .field-content").addClass('numscroller').attr('data-min', '1').attr('data-max', '8').attr('data-delay', '1').attr('data-increment', '1').delay(1000);
//jQuery( "#block-views-block-frontpage-whycityu-down-block-1 .col-2 .views-field-field-toi .field-content").addClass('numscroller').attr('data-min', '1').attr('data-max', '38').attr('data-delay', '2').attr('data-increment', '2').delay(1000);
//jQuery( "#block-views-block-frontpage-whycityu-down-block-1 .col-3 .views-field-field-toi .field-content").addClass('numscroller').attr('data-min', '1').attr('data-max', '70').attr('data-delay', '2').attr('data-increment', '2').delay(1000);



/*hover effect*/

jQuery( "#block-frontpagenewsevents-2 .field--name-field-toi" ).each(function() {

    var title = jQuery(this).text();
    jQuery(jQuery(this).siblings('.field--name-bp-image-field').find('img')).wrap( '<div class="newsContainer"></div>' );
    jQuery('<div class="titleContainer"><div class="titleLink"> ' + title + ' </div></div>').insertAfter(jQuery(this).siblings('.field--name-bp-image-field').find('img'));


    

});



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

/*show embedded pdf*/

jQuery('.views-field-field-story .embedded_pdf').each(function(){
    var pdf_link = jQuery(this).html();
    jQuery(this).html('<embed src="'+ pdf_link+ '"></embed>');
});





/*pop out modal*/



/*pop out when profile is clicked*/
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

if (jQuery('#block-researchhome-bar').length){
    
    
    
    /*introduction banner layout*/
    jQuery('#block-researchhome-bar > div').addClass('container');
    
    
    jQuery(window).scroll(function() {
            var windowPos = window.pageYOffset;
            var noPos = jQuery('#block-views-block-research-home-figures-block-1 .views-col .views-field-field-toi').offset();
            if (windowPos >= (noPos.top - (noPos.top/2))) {
                jQuery('#block-views-block-research-home-figures-block-1 .views-col .views-field-field-toi').animate({
                    opacity: 1,
                    marginTop: 0
                  }, 800 );
            }

    });
}
    



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


if (jQuery('#block-researchhomeresearchers').length){
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





/*more researchers button*/

jQuery('#block-researchhomeresearchers .field--name-bp-text a').append(' <i class="fa fa-angle-right" aria-hidden="true"></i>');

















/****************/
/*research areas*/
/****************/


/*link disable*/

jQuery('#block-views-block-research-areas-block-1 .view_research_areas_dept h2 a').removeAttr('href');



/*panel icon*/
jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_dept h2').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');


jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_dept h2').click(
    function() { 
        jQuery(this).siblings('.view_dept_info').toggle('fast');
    } 
);




/*add class for styling*/
jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_dept ol li > div').wrapInner('<div class="view_dept_info"></div>');
jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_dept ol li > div').each(function(){
    jQuery(this).find('h2').prependTo(jQuery(this));
});


/*change wording*/
jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_dept .field--name-field-dept-url-official a').html('Go to Department Website <i class="fa fa-arrow-right" aria-hidden="true"></i>');



///*background image*/
//
//jQuery('#block-views-block-research-areas-block-1 .views-field-name, #block-views-block-research-areas-block-1 .views-field-field-coll-image-1').wrap('<div class="container"></div>');
//
//if(jQuery('#block-views-block-research-areas-block-1').length){
//    var mainBG = jQuery('#block-views-block-research-areas-block-1 .views-row:nth-child(1) .view_coll_image img').attr('src');
//    jQuery('.main-container.container-fluid').css('background', 'linear-gradient(rgba(253,253,253,.85),rgba(253,253,253,.85)),url('+ mainBG + ') center no-repeat fixed rgba(218,218,218,.85)').css('background-size', 'cover');
////    jQuery('#block-views-block-research-areas-block-1 .views-row:nth-child(2)').css('background', 'linear-gradient(rgba(253,253,253,.85),rgba(253,253,253,.85)),url(/sites/sgsrevamp.uat.dd/files/styles/large/public/2017-07/3b_img_2.png?itok=rWzPN7Y0) center no-repeat fixed rgba(218,218,218,.85)').css('background-size', 'cover');
////
//
//    jQuery('#block-views-block-research-areas-block-1 .views-row:not(:nth-child(1))').each(function(){
//        var bgImage = jQuery(this).find('.view_coll_image img').attr('src');
//        jQuery(this).css('background', 'linear-gradient(rgba(253,253,253,.85),rgba(253,253,253,.85)),url('+ bgImage + ') center no-repeat fixed rgba(218,218,218,.85)').css('background-size', 'cover');
//        
//    });
//}





/* old design
    
    Since Drupal cannot create a simple select box without installing extended modules,
    a "fake" select box is built by pure javascript & CSS.

*/

//
///*select box display*/
//jQuery('#block-views-block-research-areas-block-1 .views-field-field-coll-coordinator .field-content > p > strong').click(
//    function() { 
//        if (jQuery(this).parent().siblings('table').css('display') === 'none'){
//            jQuery(this).css('background-color','#A7A9AC');
//            jQuery(this).parent().siblings('table').show();
//        
//        }else{
//            jQuery(this).css('background-color','#863d75');
//            jQuery(this).parent().siblings('table').hide();
//            
//        }
//    } 
//);
//
//
//
///*add a select box to those which have multiple departments*/
//
//
//
//jQuery( "#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_dept ol" ).each(function() {
//
//    
//    var dHeader = jQuery(this).children('li').length;
//    var i;
//    var item;
//    var list =  jQuery(this).parent().siblings('.view_research_areas_ul');
//    for (i = 0; i < dHeader + 1; i++) { 
//            if (i === 0){
//                list.append('<li><span style="color: #939598">Choose a Department</span></li>');
//            }else{
//                /*extract heading of each department from details description blocks to form the select list*/
//           
//                item = jQuery(this).find('li:nth-child(' + i + ') h2 > a > .field--name-name').text();
//                list.append('<li>' + item + '</li>');
//            }
//    }
//
//});
//
//
//jQuery( "#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_ul li:nth-child(1)" ).addClass( "selectedDepartment" );
//
//
///*dropdown list disappear when clicking spaces other than the select list*/
//
//jQuery('body').click(function(e) {
//    
//    
//    if (jQuery(e.target).hasClass('selectedDepartment')) {
//        jQuery(e.target).siblings('li').toggle();
//    }else{
//        jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_ul li:not(:nth-child(1))').hide();
//    }
//               
//});
//
//
///*change the select box content with department selected*/
//jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_ul li:not(:nth-child(1))').click(function(){
//                    
//    var target = jQuery(this).text();
//    jQuery(this).siblings('.selectedDepartment').text(target);
//   
//
//});
//
//
///*show the corresponding selected department description block*/
//
//jQuery('#block-views-block-research-areas-block-1 .view_research_areas .view_research_areas_ul li:not(:nth-child(1))').click(function(){
//        var index = jQuery(this).parent().find('li').index(jQuery(this));    
//        var target = jQuery(this).parent().parent().find(".view_research_areas_dept ol li:nth-child(" + index + ")");   
//        jQuery(this).parent().parent().find(".view_research_areas_dept ol").css('display','block');
//        jQuery(this).parent().parent().find('.view_research_areas_dept ol li').css('display','none');
//        target.css('display','block');
//        
//        
//});





/*****/
/*phd*/
/*****/

if(jQuery('.landing_research_phdfscheme').length){
    jQuery('.landing_research_phdfscheme > .col-sm-2 > p:first-child').addClass('activeTimelineIndex');
}


jQuery('.landing_research_phdfscheme > .col-sm-2 p:not(:nth-child(14)):not(:nth-child(17))').click(function(){
    jQuery('.landing_research_phdfscheme > .col-sm-2 p').not(jQuery(this)).removeClass('activeTimelineIndex');
    jQuery(this).addClass('activeTimelineIndex');
    
    
    
});

/*
    This index list mechanism is based on the order of the list item and the content block.
    ie. The user select the 2nd item of the select list, then the 2nd description block will be shown.

    Therfore, please be careful when modifying either the list items and the content blocks.
    
    The list item is recognized as <p>.
    The description block is recognized as <div> inside class "col-sm-10".
    
*/


jQuery('.landing_research_phdfscheme .col-sm-2 p:nth-child(-n+13):not(:nth-child(12))').click(function(){
        var index = jQuery(".landing_research_phdfscheme .col-sm-2 p").index(jQuery(this)) + 1;
        
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







/***********/
/*apply now*/
/***********/

/*Add CSS class for styling*/


jQuery('#block-researchdegreeapplynow, #block-professionaldoctorateapplynow, #block-taughtapplynow').addClass('landing_taught_applynow');

jQuery('.landing_taught_applynow div.paragraph--type--bp-simple:eq(1) .field--name-bp-text').addClass('landing_taught_applynow_text');
jQuery('#block-researchdegreeapplynow .landing_taught_applynow_text table:eq(0), #block-professionaldoctorateapplynow .landing_taught_applynow_text table:eq(0)').addClass('landing_taught_applynow_table1');



/*for anchor from steps & procedures*/

jQuery('#block-body-2 > div > div.landing_taught_applynow_text > ul:nth-child(45)').attr('id', 'landling_taught_applynow_visa');
jQuery('#block-body-2 > div > div.landing_taught_applynow_text > h2:nth-child(46)').removeAttr('id');


/*compulsory checkbox
jQuery('#applynow_checkBox').prop('checked', false);
jQuery('.landing_taught_applynow_button a').click(function(){
    if (!(jQuery('#applynow_checkBox').prop('checked'))){
        jQuery('.landing_taught_applynow_statement').css('color', 'red');  
    }
    return false;
});

jQuery('#applynow_checkBox').change(function() {
    if (jQuery('#applynow_checkBox').prop('checked')){
        jQuery('.landing_taught_applynow_button a').unbind('click'); 
        jQuery('.landing_taught_applynow_statement').css('color', '#333');
    }else{
        jQuery('.landing_taught_applynow_button a').click(function(){
            if (!(jQuery('#applynow_checkBox').prop('checked'))){
                jQuery('.landing_taught_applynow_statement').css('color', 'red');  
            }
            return false;
        });
    }
    
    
});*/


jQuery(function() {
	     
    jQuery('.landing_taught_applynow #styled-checkbox-1').click(function() {
        window.location.href = jQuery('.landing_taught_applynow_button a').attr('href');
    }); 
    
    jQuery(".landing_taught_applynow .read-notes").click(function(){
	jQuery(".landing_taught_applynow_text").addClass("active");
	setTimeout(function() {
        jQuery(".landing_taught_applynow_text").removeClass('active');
    }, 4000);
		
    });
});


/*print function*/

jQuery('.apply_now_print').click(
    function(){ 
        
        var divToPrint=document.getElementById('block-researchdegreeapplynow');

        var newWin=window.open('','Print-Window');

        newWin.document.open();

        newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

        newWin.document.close();
  
        newWin.close();
  
        return true;
});


/***********************************/
/*Professional Doctorate Programmes*/
/***********************************/

if (jQuery('#block-doctoratehome-introduction').length){
    
    /*introduction banner layout*/
    jQuery('#block-doctoratehome-introduction > div').addClass('container');

}



/**************************************/
/*Taught Postgraduate Programmes: Home*/
/**************************************/


if (jQuery('#block-taughthome-introduction').length){
    
    /*introduction banner layout*/
    jQuery('#block-taughthome-introduction > div').addClass('container');

}




/*hover effect*/
//jQuery( "#block-views-block-taught-home-blocks-block-1 .views-field-field-image .field-content > div" ).addClass( "tppContainer" );
//jQuery( "#block-views-block-taught-home-blocks-block-1 .views-field-field-image .field-content > div > div:nth-child(2) a" ).addClass( "tppLink" );
//jQuery( "#block-views-block-taught-home-blocks-block-1 .views-field-field-image .field-content > div > div:nth-child(2) p" ).addClass( "tppLink" );
//jQuery( "#block-views-block-taught-home-blocks-block-1 .views-field-field-image .img-responsive" ).addClass( "tppImg" );
//

/*append arrow to "More Details"*/
jQuery('#block-views-block-taught-home-blocks-block-1 .view-taught-home-blocks .views-col a').append(' <i class="fa fa-angle-right" aria-hidden="true"></i>');

/*More Details for Flexible Study Mode*/
jQuery('#block-views-block-taught-home-blocks-block-1 a.TPg_more_details').click(function(){
    jQuery('#block-views-block-taught-home-blocks-block-1 .TPg_combined_mode').toggle();
});


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






/*sidebar*/


if(jQuery('.landing_visiting_research').length){
    jQuery('.landing_visiting_research .col-sm-2 li:first-child').addClass('activeTimelineIndex');
}

if(jQuery('.landing_visiting_postgraduate').length){
    jQuery('.landing_visiting_postgraduate .col-sm-2 li:first-child').addClass('activeTimelineIndex');
}


jQuery('.landing_visiting_research > .col-sm-2  ul li, .landing_visiting_postgraduate > .col-sm-2  ul li').click(function(){
    jQuery('.col-sm-2  ul li').not(jQuery(this)).removeClass('activeTimelineIndex');
    jQuery(this).addClass('activeTimelineIndex');
    
    
    
});
        




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
          
	var college = jQuery(this).find(".field-content").text();
   
        var target = jQuery("#block-views-block-taught-programme-list-body3-block-1 .table-responsive caption:contains('"+ college +"')").parents(".table-responsive");
        
        jQuery('#block-views-block-taught-programme-list-body3-block-1 .table-responsive').css('display','none');

        target.css('display','block');
        
        
        /*
        if (target.length){
            jQuery('html,body').animate({scrollTop: target.offset().top},'slow');
        }
        */
        
    });
    
    
/*full list button*/
jQuery( '<a id="fullListButton"><i class="fa fa-list-ul" aria-hidden="true"></i> Show Full Programme List</a>').insertAfter( "#block-views-block-list-of-colleges-and-schools-block-2" );


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
    

/*Program search input = program search input*/

//jQuery('#edit-submit-programme-search').click(function(){
//    
//    var searchInput = jQuery('#views-exposed-form-programme-search-page-1 #edit-field-prog-title-value').val();
//    alert(searchInput);
//    jQuery('#views-exposed-form-programme-search-page-1 #edit-field-programme-tag-value').val(searchInput);
//});


/*****/
/*faq*/
/*****/


function sortedResult(){
    
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
    
}


/*select condition
    
  Local Application : Category A ~ G

 */


function localCategory(){
    var applicantValue = jQuery("#edit-field-faq-role-target-id option:selected").val();
    if (applicantValue === '419'){
        jQuery('#edit-field-faq-category-target-id-1 option:nth-child(8)').hide();
        jQuery('#edit-field-faq-category-target-id-1 option:nth-child(9)').hide();

    }else{
        jQuery('#edit-field-faq-category-target-id-1 option:nth-child(8)').show();
        jQuery('#edit-field-faq-category-target-id-1 option:nth-child(9)').show();
    }

}

jQuery(document).ready(function(){
    
    /*change faq language based on interface language*/
    
    var lang = jQuery('html').attr('lang');
    switch(lang){
        case 'en':
            jQuery('#edit-field-faq-language-target-id').val('445');
            break;
        case 'zh-hant':
            jQuery('#edit-field-faq-language-target-id').val('446');
            break;
        case 'zh-hans':
            jQuery('#edit-field-faq-language-target-id').val('447');
            break;
    }
    
    sortedResult();
	
    //Local Application : Category A ~ G
    localCategory();
    
});

jQuery('#edit-field-faq-role-target-id, #edit-field-faq-category-target-id-1, #edit-field-faq-language-target-id').change(function(){
    sortedResult();
});


jQuery("#edit-field-faq-role-target-id").change(function(){
    localCategory();
});


jQuery('.view-taught-faq-01 .form-group').attr('id', 'faqAnchor');

var originAction = jQuery('#views-exposed-form-taught-faq-01-page-1').attr('action');
var newAction = originAction + '#faqAnchor';
jQuery('#views-exposed-form-taught-faq-01-page-1').attr('action', newAction);



jQuery('.view-taught-faq-01 #edit-combine').attr("placeholder", "Insert Your Keywords");

jQuery('.views-field-field-faq-question').click(function(){
    if (jQuery(this).siblings('.view-taught-faq-01 .views-field-body').css('display') === 'none'){
        jQuery(this).find('.field-content > div:nth-child(1)').css('background-color','#863275');
        jQuery(this).find('.view_taught_faq_plus').html("<i class='fa fa-minus' aria-hidden='true'></i>");
    }
    else{
        jQuery(this).find('.field-content > div:nth-child(1)').css('background-color','#aaa4ad');
        jQuery(this).find('.view_taught_faq_plus').html("<i class='fa fa-plus' aria-hidden='true'></i>");
        
    }
    jQuery(this).siblings('.view-taught-faq-01 .views-field-body').toggle('fast');
            
 });



jQuery( '.view-taught-faq-01 #edit-submit-taught-faq-01').empty();
jQuery( '.view-taught-faq-01 #edit-submit-taught-faq-01').addClass('glyphicon glyphicon-search');


/**********************/
/*entrance requirement*/
/*********************/


//adjust container-> container-fluid

jQuery('.entrance_block.landing_research_entrance_min_require').closest('.container').removeClass('container').addClass('fluid-container');
jQuery('#block-taughtentrancerequirements').closest('.container').removeClass('container').addClass('fluid-container');


/*English Proficiency Requirements hover effect*/

jQuery('#block-views-block-research-entrance-eng-p-require-block-1 .views-row').mouseenter(function(){
    if (jQuery(this).find('.views-field-field-coll-eng-p-require').css('display') === 'none'){
        jQuery('#block-views-block-research-entrance-eng-p-require-block-1 .views-row .views-field-field-coll-eng-p-require').hide('fast');
        jQuery(this).find('.views-field-field-coll-eng-p-require').show('fast');
    }
});

//old design
//jQuery('body').click(function(e) {
//    
//    
//    if (jQuery(e.target).parent().hasClass('view-header')) {
//        jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-content').toggle();
//    }else{
//        jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-content').hide();
//    }
//               
//});
//
//
//jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-content .views-row').click(function(){
//                    
//    var target = jQuery(this).text();
//    jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-header h2').text(target);
//   
//
//});
//
//
//jQuery('#block-views-block-research-entrance-coll-list-block-2 .view-content .views-row').click(function(){
//        var index = jQuery("#block-views-block-research-entrance-coll-list-block-2 .view-content .views-row").index(jQuery(this)) + 1;    
//        var target = jQuery("#block-views-block-research-entrance-eng-p-require-block-1 .view-content .views-row:nth-child(" + index + ")");     
//        jQuery('#block-views-block-research-entrance-eng-p-require-block-1 .views-row').css('display','none');
//        target.css('display','block');
//        
//        
//    });
    


/********/
/*footer*/
/********/
jQuery('footer .paragraph--type--bp-columns.paragraph--view-mode--default').addClass('container');

jQuery(function() {
	jQuery('.region-footer .paragraph--type--bp-columns__4col').matchHeight();
});

/*********/
/*enquiry*/
/*********/

/*Adjust program value according to the level of study*/

jQuery('#edit-field-type-of-study-name').change(function(){
    var levelCode;
    switch(jQuery('#edit-field-type-of-study-name option:selected').text()){
        case 'Professional Doctorate Programmes (PD)':
            levelCode = 'D';
            break;
        case 'Taught Postgraduate Programmes (TPg)':
            levelCode = 'P';
            break;
        default:
            levelCode = 0;
            break;      
    }
    
    jQuery('#edit-field-interested-prog-name').prop('selectedIndex',0);
    jQuery('#edit-field-interested-prog-name option').hide();
    if(!(levelCode === 0)){
        jQuery('#edit-field-interested-prog option').each(function(){
            if(jQuery(this).text().charAt(0) === levelCode){
                var progName = jQuery(this).text().substring(1, jQuery(this).text().indexOf('+'));
                jQuery('#edit-field-interested-prog-name option:contains("' + progName + '")').show();
            }

        });
    }
    
});


/*form logic flow*/


jQuery('#edit-field-personal-information-wrapper').click(function(){
    
    var logicCheck = 0;
    
    /*get level of study related emails*/
    var levelOfStudy = jQuery("#edit-field-type-of-study-name option:selected").text();
    var losInfo = jQuery('#edit-field-type-of-study option:contains("' + levelOfStudy + '")').text();
    var losEmail = losInfo.split('+');
    
    /*get program related emails*/
    var program = jQuery("#edit-field-interested-prog-name option:selected").text().split(/ -  (.+)?/, 2);
    var pInfo = jQuery('#edit-field-interested-prog option:contains("' + program + '")').text();
    var pEmail = pInfo.split('+');
    
    var qtype = jQuery('#edit-field-question-type option:selected').text();
    

    
    jQuery('#edit-field-i-want-to-ask-about-0-value').val(program);
    jQuery('#edit-field-email-level-study-0-value').val(levelOfStudy);
    jQuery('#edit-field-email-question-type-0-value').val(qtype);
    


    /*exceptional case*/
    if (levelOfStudy === "Taught Postgraduate Programmes (TPg)" && !(program === "- None -")){
        if (!(qtype === "Fees / Payment" || qtype === "System Related Matters" || qtype === "Visa and Pre-arrival Information" || qtype === "Others")){
            if (!(pEmail[1] === "")){
                logicCheck = 1;
            }
        }
    }
    
    if (logicCheck === 0){
        jQuery('#edit-field-recipient-0-value').val(losEmail[1]);
	    alert(losEmail[0]);
	alert(losEmail[1]);
    }else{
        jQuery('#edit-field-recipient-0-value').val(pEmail[1]);
	    alert(pEmail[0]);
	alert(pEmail[1]);
        
    }
    
    
});



/******/
/*News*/
/******/


jQuery('#block-views-block-news-events-news-block-3 .views-row').each(function(){
    var newsLink = jQuery(this).find('.news_content p a').html();
    jQuery(this).wrap('<a href="'+ newsLink + '"></a>');
});



if(jQuery('#block-views-block-news-events-events-block-1').length || jQuery('#block-views-block-news-events-events-block-2').length){
    
    /*layout initialization*/
    jQuery('#block-views-block-news-events-events-block-1').parent().addClass('col-lg-6 col-md-8 col-sm-12 col-xs-12 events-block col-centered');
            
    /*merge into 1 block if the event lasts within a month*/
    jQuery('.views_event_date').each(function(){
        var fromMonth = jQuery(this).find('.views_event_rangeFrom .views_event_month').text();
        var fromYear = jQuery(this).find('.views_event_rangeFrom .views_event_year').text();
        var toMonth = jQuery(this).find('.views_event_rangeTo .views_event_month').text();
        var toYear = jQuery(this).find('.views_event_rangeTo .views_event_year').text();
        if (fromMonth === toMonth && fromYear === toYear){
            var toDay = jQuery(this).find('.views_event_rangeTo .views_event_day').text();
            jQuery(this).find('.views_event_rangeFrom .views_event_day').append(' - ' + toDay);
            
            jQuery(this).find('.views_event_rangeFrom').css('width', '100%');
            jQuery(this).find('.views_event_rangeTo').hide();
            jQuery(this).css('width', '25%');
            jQuery(this).siblings('.views_event_content').css('width', '74%');
        }
           
    });

    
    
}





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


