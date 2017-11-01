/*****/
/*faq*/
/*****/


/*expand all button*/


var lang = jQuery('html').attr('lang');

switch (lang) {
    case 'en':
        jQuery('<span id="expandButton">Expand All</span>').insertAfter("#views-exposed-form-taught-faq-01-page-1 .form-item-field-faq-language-target-id");
        break;
    case 'zh-hant':
        jQuery('<span id="expandButton">展開全部</span>').insertAfter("#views-exposed-form-taught-faq-01-page-1 .form-item-field-faq-language-target-id");
        break;
    case 'zh-hans':
        jQuery('<span id="expandButton">展开全部</span>').insertAfter("#views-exposed-form-taught-faq-01-page-1 .form-item-field-faq-language-target-id");
        break;
    default:
        jQuery('<span id="expandButton">Expand All</span>').insertAfter("#views-exposed-form-taught-faq-01-page-1 .form-item-field-faq-language-target-id");
        break;
}

var expandAllButton = 0;

jQuery('#expandButton').click(function(){

    if (expandAllButton === 0){
        jQuery('.view-taught-faq-01 .views-field-field-faq-question .view_taught_faq').css('background-color','#863275');
        jQuery('.view-taught-faq-01 .views-field-field-faq-question .view_taught_faq_plus').text("-");
        jQuery('.view-taught-faq-01 .views-field-body').show('fast');
        expandAllButton = 1;
    }
    else{
        jQuery('.view-taught-faq-01 .views-field-field-faq-question .view_taught_faq').css('background-color','grey');
        jQuery('.view-taught-faq-01 .views-field-field-faq-question .view_taught_faq_plus').text("+");
        jQuery('.view-taught-faq-01 .views-field-body').hide('fast');
        expandAllButton = 0;
        
    }
        

});







