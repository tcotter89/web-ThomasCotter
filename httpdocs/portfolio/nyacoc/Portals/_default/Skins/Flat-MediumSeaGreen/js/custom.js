/*
 * JS Settings For DotNetNuke Skin by bestdnnskins.com
 * Copyright 2013 By BESTDNNSKINS.COM
 */
//Add meta to head:
jQuery(document).ready(function() {
	$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0"/>');
});

//Retina:
jQuery(document).ready(function() {
	$('.retina').retinise();
});


//For Fancy Lightbox Alternative:
jQuery(document).ready(function() {
	$(".fancybox").fancybox({
	    openEffect:'elastic',closeEffect:'fade',nextEffect:'fade', prevEffect:'fade'
	});
});

//For Search Value:
jQuery(document).ready(function(){
    var s="Search...";
    $("#dnn_dnnSEARCH_txtSearch,#dnn_dnnSEARCH2_txtSearch").val(s).click(function(){
        var ss=$(this).val();if(ss==s)$(this).val("") }
       )
      .blur(function(){
        var ss=$(this).val();if(ss=="")$(this).val(s) }
       );
});

//For Tipsy Style:
jQuery(document).ready(function(){
   if ($(window).width() >= 960){		
	   $('.user-tipsy').tipsy({ fade: true, gravity: 'n' });
	};
});


//For Top Icon Hover:
jQuery(document).ready(function($){
    function iconHoverOver() {
       $(this).find(".icon_hover").stop().fadeIn(100).show();
    }
    function iconHoverOut() {
       $(this).find(".icon_hover").stop().fadeOut(100, function() {
	     $(this).hide(); 
	     });
    }
	var config = {
        sensitivity: 5,
        interval:50,
        over: iconHoverOver,
        timeout:50,
        out: iconHoverOut
     };
   $(".icon_search, .icon_user, .icon_lang").hoverIntent(config);
}); 

//For Login Style:
jQuery(document).ready(function() {
	$('.logout-button').click(function () {
        document.location.href = $('.user_login a').attr("href");
    });
});

//For User Back Link:
jQuery(document).ready(function() {
	$('.user-back').click(function () {
        document.location.href = $('a#dnn_dnnUSER3_registerLink').attr("href");
    });
});

//For Language Icon Display:
jQuery(document).ready(function() {
    var lang_width = $("#Language").width();
	if ( lang_width >= 2){
	  $(".icon_lang").css('display', 'block');
	} else {
	  $(".icon_lang").css('display', 'none');
	}

});

//For User Icon Display:
jQuery(document).ready(function() {
    var lang_width = $("#dnn_dnnUSER3_registerLink").width();
	if ( lang_width <= 1){
	  $(".user-button").css('display', 'none');
	} else {
	  $(".user-button").css('display', 'block');
	}

});

//For Isotope Style:
jQuery(document).ready(function() {
			  
			  var $container = $('#container');
		
			  $container.isotope({
				itemSelector : '.element'
			  });
			  
			  
			  var $optionSets = $('#options .option-set'),
				  $optionLinks = $optionSets.find('a');
		
			  $optionLinks.click(function(){
				var $this = $(this);
				// don't proceed if already selected
				if ( $this.hasClass('selected') ) {
				  return false;
				}
				var $optionSet = $this.parents('.option-set');
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected');
		  
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
					key = $optionSet.attr('data-option-key'),
					value = $this.attr('data-option-value');
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[ key ] = value;
				if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
				  // changes in layout modes need extra logic
				  changeLayoutMode( $this, options )
				} else {
				  // otherwise, apply new options
				  $container.isotope( options );
				}
				
				return false;
			  });   
});


//For TB Slider:
jQuery(document).ready(function($) {		
		$('.TB_Wrapper').TransBanner({
			slide_delaytime: 6,
			slide_transition: 2,
			navigation_type: 3,
			button_size: 26,
			caption_bg_color: '#000',
			caption_bg_opacity: .2,
			caption_bg_blur: 10,
			responsive : true,
			responsive_limit_autoplay : '', 
			responsive_limit_caption : 480,
			responsive_limit_navigation : 480,
			responsive_limit_navigation_type : 2, 
			responsive_screen_based_limits : true 
		});
});

//For Slideshow Banner:
jQuery(window).load(function() {
	  $('.flexslider').flexslider({animation:"slide",slideshowSpeed: 6000, animationSpeed: 500, pauseOnHover: true, start: function(slider){} });
	  $('.flexslider2').flexslider({animation:"fade",slideshowSpeed: 6000, animationSpeed: 500, pauseOnHover: true, start: function(slider){} });
});

//For CarouFredSel Style:
jQuery(document).ready(function() {
	$("#carouFredSel").carouFredSel({
		responsive: true,
		width: "100%",
		prev: "#caroul_prev",
		next: "#caroul_next",
		mousewheel: true,
		scroll: {
			'items': 1,
			'duration': 800
		},
		items: {
			width: 370,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 3
			}
		}
	});
});


//For CarouFredSel2 Style:
jQuery(document).ready(function() {
	$("#carouFredSel2").carouFredSel({
		responsive: true,
		width: "100%",
		prev: "#caroul_prev2",
		next: "#caroul_next2",
		mousewheel: true,
		scroll: {
			'items': 1,
			'duration': 800
		},
		items: {
			width: 200,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 5
			}
		}
	});
});

//For Shake Style:
jQuery(document).ready(function() {
    $(".shake img").each(function(k,img){
	  new JumpObj(img,10);
     $(img).hover(function(){this.parentNode.parentNode.className="hover"});
    })
});

//For Quovolver Style:
jQuery(document).ready(function($) {
    $("#quovolver_style").quovolver({
        children: "li",
        transitionSpeed: 600,
        autoPlay: true,
        autoPlaySpeed: 5000,
        pauseOnHover: true,
        equalHeight: false,
        navPosition: "above",
        navNum: true
    })
});

//COMMENTING THIS SECTION OUT MAKES THE HEADER MENU NOT FOLLOW AS YOU SCROLL DOWN
//Header Fixed
//jQuery(document).ready(function() {
//	var menu = $('#skin_header'),
//		pos = menu.offset();
//		
//    if ($(window).width() >= 768){		
//		$(window).scroll(function(){
//			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('header_position')){
//				menu.fadeOut('fast', function(){
//					$(this).removeClass('header_position').addClass('headerfixed').fadeIn('fast');
//					$(".top_spacer").css({"height": "90px"});
//				});
//			} else if($(this).scrollTop() <= pos.top && menu.hasClass('headerfixed')){
//				menu.fadeOut('fast', function(){
//					$(this).removeClass('headerfixed').addClass('header_position').fadeIn('fast');
//					$(".top_spacer").css({"height": "0px"});
//				});
//			}
//		});
//	};
//
//});

//For Layerslider Style:
jQuery(document).ready(function() { 
		$('#layerslider').layerSlider({
			skinsPath : '/Portals/_default/Skins/Flat-DodgerBlue/css/layerslider/skins/',	
			skin : 'fullwidth',
			thumbnailNavigation : 'none',
			navButtons: false,
			navStartStop: false
		});
});

//For Banner Slider:
jQuery(window).load(function(){
	$('#slider').unoslider({
		width: 550,
		height: 270,
        tooltip: true,
        indicator: { autohide: false },
        navigation: { autohide: true },
        slideshow: { hoverPause: true, continuous: true, timer: true, speed: 9, infinite: true, autostart: true },
        responsive: true,
        responsiveLayers: false,
        preset: ['sq_flyoff', 'sq_drop', 'sq_squeeze', 'sq_random', 'sq_diagonal_rev', 'sq_diagonal', 'sq_fade_random', 'sq_fade_diagonal_rev', 'sq_fade_diagonal', 'explode', 'implode', 'fountain', 'shot_right', 'shot_left', 'zipper_right', 'zipper_left', 'bar_slide_random', 'bar_slide_bottomright', 'bar_slide_bottomright', 'bar_slide_topright', 'bar_slide_topleft'],
        order: 'random',
        block: {
            vertical: 10,
            horizontal: 4
        },
        animation: {
            speed: 500,
            delay: 50,
            transition: 'grow',
            variation: 'topleft',
            pattern: 'diagonal',
            direction: 'topleft'
        }
		});
}); 

//For Banner Slider2:
jQuery(window).load(function(){
	$('#slider2').unoslider({
		width: 800,
		height: 270,
        tooltip: true,
        indicator: { autohide: false },
        navigation: { autohide: true },
        slideshow: { hoverPause: true, continuous: true, timer: true, speed: 9, infinite: true, autostart: true },
        responsive: true,
        responsiveLayers: false,
        preset: ['sq_flyoff', 'sq_drop', 'sq_squeeze', 'sq_random', 'sq_diagonal_rev', 'sq_diagonal', 'sq_fade_random', 'sq_fade_diagonal_rev', 'sq_fade_diagonal', 'explode', 'implode', 'fountain', 'shot_right', 'shot_left', 'zipper_right', 'zipper_left', 'bar_slide_random', 'bar_slide_bottomright', 'bar_slide_bottomright', 'bar_slide_topright', 'bar_slide_topleft'],
        order: 'random',
        block: {
            vertical: 10,
            horizontal: 4
        },
        animation: {
            speed: 500,
            delay: 50,
            transition: 'grow',
            variation: 'topleft',
            pattern: 'diagonal',
            direction: 'topleft'
        }
		});
}); 


//For Accordion Style:
jQuery(document).ready(function() { 
    $( ".accordion2" ).accordion({  
            collapsible: true  
    });  
}); 

//For Fade InView Style:
jQuery(document).ready(function() {
 $('.inview').bind('inview', function (event, visible) {
		if (visible === true) {
		// element is now visible in the viewport
		$(this).addClass('p-visible');
		}
 });
});

//For Mobile Menu:
jQuery(document).ready(function(){
	  $(".menuclick").click(function(event) {
	    event.preventDefault();
	    $(".menu_box").slideToggle("fast");
			return false;
	  });
});

//For Color Picker:
jQuery(document).ready(function () {
	$('head').append('<style id="changecolor" type="text/css"></style>');
	$('#custom-button').click(
    	function () {
    	    if ($('#custom_wrapper').css('left') != '0px') {
    	        $('#custom_wrapper').animate({ "left": "0px" }, { duration: 300 });
    	        $(this).animate({ "left": "150px" }, { duration: 300 });
    	    }
    	    else {
    	        $('#custom_wrapper').animate({ "left": "-155px" }, { duration: 300 });
    	        $('#custom-button').animate({ "left": "0px" }, { duration: 300 });
    	    }
    	}
    );
    $('#bg_color').ColorPicker({
        onShow: function(colpkr) {
            $(colpkr).fadeIn("fast");
            return false
        },
        onHide: function(colpkr) {
            $(colpkr).fadeOut("fast");
            return false
        },
        onChange: function(hsb, hex, rgb) {
            var color = hex;
            var defaultPattern = "url(/Portals/_default/Skins/Flat-DodgerBlue/images/bg_pattern/bg_grid_01.png)";
			$('#bg_color').css({ backgroundColor: '#' + color});
		    $('style#changecolor').html('#bg_color, .pre_defined_color,.banner_style,.skin_main_bottom,.setHover,.page_name,#standardMenu .subMenu li.selected > a span, #standardMenu .subMenu li.breadcrumb > a span, #standardMenu .subMenu li.item a:hover span,#leftMenu .leftSub li.selected > a span, #leftMenu .leftSub li a:hover span,.main_top_icon1 .icon_effect .hi-icon:after,.main_top_img1,.main_top_icon2 .icon_effect .hi-icon:after,.main_top_img2,.main_top_icon3 .icon_effect .hi-icon:after,.main_top_img3,.design_text_style .design_button1 a,.design_text_style .design_button2 a:hover,.carouFredSel_img .carouFredSel_describe,.caroul_prev,.caroul_next,.nav-tabs2 > li > a:hover,.nav-tabs2 > .active > a, .nav-tabs2 > .active > a:hover, .nav-tabs2 > .active > a:focus,.footer_tag ul li a,.newsletter_style span a:hover,.price-table .high .price,.website_style p span a:hover,.our_skills .progress .bar,.our_team_style .our_tean_hover,.full_button a,.button1_style span ,.button2_style span,.Info_one,.content_right_border .left_border,.project_list a.read-more:hover ,.project-pagination a,.project-pagination a:hover,.project-pagination li.selected a,.page_number .active,.page_number span a:hover,.color_bg,#options ul li,.project_inner .project_rollover,.ls-h3 span,.unoslider_indicator a.unoslider_indicator_active,.CadetBlue03_style:hover .CadetBlue03_top_bg,.CadetBlue04_top_bg,.CadetBlue05_top_bg,.CadetBlue07_top_bg,.threeColSocial .console-mouseon,.threeColSocial a.dnnPrimaryAction,.threeColSocial .selectDrop.active > a,.threeColSocial .dnnButtonGroup > li > a.active,.threeColSocial .dnnButtonGroup > li > a.disabled:hover,.threeColSocial .alpha > a:hover,.threeColSocial a.dnnSecondaryAction.ArchiveItems:hover,.threeColSocial .dnnTertiaryAction:hover,a.dnnTertiaryAction:hover,.top_read_more img, .pg-info, .pg-info4{ background-color: #' + color + '; }.project-pagination a:hover,.project-pagination li.selected a,.CadetBlue07_style,.icon_effect .hi-icon{ border-color: #' + color + '; }.Default_Pages_text,.CadetBlue06_style,.threeColSocial .dnnButtonGroup > li > a.disabled:hover ,.threeColSocial .alpha > a,.threeColSocial .alpha > a:hover,.threeColSocial .alpha > a.active{ border-left-color: #' + color + '; }.threeColSocial .dnnButtonGroup > li > a.active,.threeColSocial .alpha > a:hover { border-right-color: #' + color + '; }.BlackTitle03_style .c_title ,.CadetBlue02_top_bg{ border-bottom-color: #' + color + '; }.col.high{outline-color:#' + color + ';}.icon_effect .hi-icon{box-shadow:#' + color + ';} #standardMenu .rootMenu > li.selected > a span, #standardMenu .rootMenu > li.breadcrumb > a span, #standardMenu .rootMenu > li:hover > a span, #standardMenu .rootMenu > li > a:hover span,#megaMenu .root > li.selected > a span, #megaMenu .root > li.breadcrumb > a span, #megaMenu .root > li:hover > a span, #megaMenu .root > li > a:hover span,#megaMenu .category li.selected > a span, #megaMenu .category li.item a:hover span,#megaMenu .leaf li.selected > a span,#leftMenu .level1 li.selected > a span, #leftMenu .level1 li > a:hover span,#leftMenu .level1 li > a:hover span,.hi-icon,.main_top_text:hover h3,.main_top_text span a,.top_read_more img,.design_text_style  .design_style:hover,.magnify_text:hover h4,.tab-content2:hover .tab_left_text h3,.footer_post p a:hover,.footer_icon span,.ui-accordion .ui-accordion-header,.contact_page .demo_top_welcome a,.address_style span a,.price-table .row-titles .price span,.tags_style p span,.quovolve-box ul li .quovolve-box_text h5,.categories_style li a:hover,A:link,A:hover,A:active,.color_text,h1,h2,h3,h4,h5,h6,A.Login:hover,A.User:hover,A.Footer:hover,.ls-h2,.c_title_CadetBlue,.BlackTitle_style:hover .c_title_black,.BlackTitle02_style:hover .c_title_black,.BlackTitle03_style:hover .c_title_black,.BlackTitle04_style:hover .c_title_black,.CadetBlue08_style:hover .c_title_black{ color: #' + color + ';    }');
			
            $.cookie("custom_bgimage", null);
            $.cookie("custom_color", color);
            $.cookie("custom_defaultBg", defaultPattern)
        },
        color: '#1A96ED'
    });
	$('#bg_pattern a.pattern-box').each(function(i) {
        var a = $(this);
        var patternUrl = 'url(/Portals/_default/Skins/Flat-DodgerBlue/images/bg_pattern/' + a.attr('data-pattern') + '.png)';
        a.css({
            backgroundImage: patternUrl
        })
    });
	var color = $.cookie("custom_color");
    var defaultPattern = $.cookie("custom_defaultBg");
    var pattern = $.cookie("custom_pattern");
    $('#bg_pattern a.pattern-box').click(function(e) {
        e.preventDefault();
        var patternUrl = 'url(/Portals/_default/Skins/Flat-DodgerBlue/images/bg_pattern/' + $(this).attr('data-pattern') + '.png)';
        $('#Body').css({
            backgroundImage: patternUrl,
            backgroundRepeat: "repeat"
        });
        $.cookie("custom_bgimage", null);
        $.cookie("custom_pattern", patternUrl)
    });
    var color = $.cookie("custom_color");
    var defaultPattern = $.cookie("custom_defaultBg");
    var background = $.cookie("custom_bgimage");
    if (color) {
        $.cookie("custom_bgimage", null);
		$('#bg_color').css({ backgroundColor: '#' + color});
		$('style#changecolor').html('#bg_color, .pre_defined_color,.banner_style,.skin_main_bottom,.setHover,.page_name,#standardMenu .subMenu li.selected > a span, #standardMenu .subMenu li.breadcrumb > a span, #standardMenu .subMenu li.item a:hover span,#leftMenu .leftSub li.selected > a span, #leftMenu .leftSub li a:hover span,.main_top_icon1 .icon_effect .hi-icon:after,.main_top_img1,.main_top_icon2 .icon_effect .hi-icon:after,.main_top_img2,.main_top_icon3 .icon_effect .hi-icon:after,.main_top_img3,.design_text_style .design_button1 a,.design_text_style .design_button2 a:hover,.carouFredSel_img .carouFredSel_describe,.caroul_prev,.caroul_next,.nav-tabs2 > li > a:hover,.nav-tabs2 > .active > a, .nav-tabs2 > .active > a:hover, .nav-tabs2 > .active > a:focus,.footer_tag ul li a,.newsletter_style span a:hover,.price-table .high .price,.website_style p span a:hover,.our_skills .progress .bar,.our_team_style .our_tean_hover,.full_button a,.button1_style span ,.button2_style span,.Info_one,.content_right_border .left_border,.project_list a.read-more:hover ,.project-pagination a,.project-pagination a:hover,.project-pagination li.selected a,.page_number .active,.page_number span a:hover,.color_bg,#options ul li,.project_inner .project_rollover,.ls-h3 span,.unoslider_indicator a.unoslider_indicator_active,.CadetBlue03_style:hover .CadetBlue03_top_bg,.CadetBlue04_top_bg,.CadetBlue05_top_bg,.CadetBlue07_top_bg,.threeColSocial .console-mouseon,.threeColSocial a.dnnPrimaryAction,.threeColSocial .selectDrop.active > a,.threeColSocial .dnnButtonGroup > li > a.active,.threeColSocial .dnnButtonGroup > li > a.disabled:hover,.threeColSocial .alpha > a:hover,.threeColSocial a.dnnSecondaryAction.ArchiveItems:hover,.threeColSocial .dnnTertiaryAction:hover,a.dnnTertiaryAction:hover,.top_read_more img, .pg-info, .pg-info4{ background-color: #' + color + '; }.project-pagination a:hover,.project-pagination li.selected a,.CadetBlue07_style,.icon_effect .hi-icon{ border-color: #' + color + '; }.Default_Pages_text,.CadetBlue06_style,.threeColSocial .dnnButtonGroup > li > a.disabled:hover ,.threeColSocial .alpha > a,.threeColSocial .alpha > a:hover,.threeColSocial .alpha > a.active{ border-left-color: #' + color + '; }.threeColSocial .dnnButtonGroup > li > a.active,.threeColSocial .alpha > a:hover { border-right-color: #' + color + '; }.BlackTitle03_style .c_title ,.CadetBlue02_top_bg{ border-bottom-color: #' + color + '; }.col.high{outline-color:#' + color + ';}.icon_effect .hi-icon{box-shadow:#' + color + ';} #standardMenu .rootMenu > li.selected > a span, #standardMenu .rootMenu > li.breadcrumb > a span, #standardMenu .rootMenu > li:hover > a span, #standardMenu .rootMenu > li > a:hover span,#megaMenu .root > li.selected > a span, #megaMenu .root > li.breadcrumb > a span, #megaMenu .root > li:hover > a span, #megaMenu .root > li > a:hover span,#megaMenu .category li.selected > a span, #megaMenu .category li.item a:hover span,#megaMenu .leaf li.selected > a span,#leftMenu .level1 li.selected > a span, #leftMenu .level1 li > a:hover span,#leftMenu .level1 li > a:hover span,.hi-icon,.main_top_text:hover h3,.main_top_text span a,.top_read_more img,.design_text_style  .design_style:hover,.magnify_text:hover h4,.tab-content2:hover .tab_left_text h3,.footer_post p a:hover,.footer_icon span,.ui-accordion .ui-accordion-header,.contact_page .demo_top_welcome a,.address_style span a,.price-table .row-titles .price span,.tags_style p span,.quovolve-box ul li .quovolve-box_text h5,.categories_style li a:hover,A:link,A:hover,A:active,.color_text,h1,h2,h3,h4,h5,h6,A.Login:hover,A.User:hover,A.Footer:hover,.ls-h2,.c_title_CadetBlue,.BlackTitle_style:hover .c_title_black,.BlackTitle02_style:hover .c_title_black,.BlackTitle03_style:hover .c_title_black,.BlackTitle04_style:hover .c_title_black,.CadetBlue08_style:hover .c_title_black{ color: #' + color + ';    }');

    }
    var pattern = $.cookie("custom_pattern");
    if (pattern) {
        $('#Body').css({
            backgroundImage: pattern,
            backgroundRepeat: "repeat"
        })
    } else {
        if (background) {
            $('#Body').css({
                backgroundImage: background,
                backgroundRepeat: "norepeat",
                backgroundPosition: "top center",
                backgroundAttachment: "fixed"
            })
        }
    };
	$('#bg_pattern a.bg-box').each(function(i) {
        var backgroundUrl = 'url(/Portals/_default/Skins/Flat-DodgerBlue/images/bg_pattern/' + $(this).attr('data-pattern') + '.png)';
        var a = $(this);
        a.css({
            backgroundImage: backgroundUrl
        })
    });
	$('#bg_pattern a.bg-box').click(function(e) {
        e.preventDefault();
        var backgroundUrl = 'url(/Portals/_default/Skins/Flat-DodgerBlue/images/bg_pattern/' + $(this).attr('data-pattern') + '.png)';
        $('#Body').css({
            backgroundImage: backgroundUrl,
            backgroundRepeat: "norepeat",
            backgroundPosition: "top center",
            backgroundAttachment: "fixed"
        });
        $.cookie("custom_bgimage", backgroundUrl)
    });
    var background = $.cookie("custom_bgimage");
    if (background) {
        $('#Body').css({
            backgroundImage: background,
            backgroundRepeat: "norepeat",
            backgroundPosition: "top center",
            backgroundAttachment: "fixed"
        })
    }
	$('#boxed_button').click(function () { 	
		location.reload();
		var boxedWidth = "1140";
		setTimeout(function(){
		  $("#skin_wrapper").css("width","1140");	
		},1000);
		$.cookie("boxed", boxedWidth);
		$.cookie("stretched", null);
	});
	var boxed = $.cookie("boxed");
	if (boxed) {
        $("#skin_wrapper").css("width","1140");	
	}
	$('#stretched_button').click(function () {
		location.reload();
		var stretchedWidth = "100%";
		setTimeout(function(){
		  $("#skin_wrapper").css("width","100%");
		},1000);
		$.cookie("boxed", null);
		$.cookie("stretched", stretchedWidth);
	});
	var stretched =  $.cookie("stretched");
	if (stretched) {
        $("#skin_wrapper").css("width","100%");	
	}
	$('#custom-reset').click(function(event) {
        event.preventDefault();
        $.cookie("custom_bgimage", null);
        $.cookie("custom_pattern", null);
        $.cookie("custom_color", null);
        $.cookie("custom_defaultBg", defaultPattern)
		$.cookie("boxed", null);
        $.cookie("stretched", null)
        location.reload();
    });
});