$(document).ready(function(){




	//select popup
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select-many')) {
			if ($(this).find('.js-popup-block').find('.active').length>0) {
				$(this).find('.js-btn-toggle').addClass('selected');
				var currentSelect = $(this).find('.js-popup-block').find('.active');
				$(this).find('.js-btn-toggle').attr('data-count', currentSelect.length);
			} else {
				$(this).find('.js-btn-toggle').removeClass('selected');
			}
		}
	})
	$('.js-popup-wrap.js-popup-select-many .js-popup-block .menu a').on('click', function() {
		$(this).toggleClass('active');
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select-many')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {
					$(this).find('.js-btn-toggle').addClass('selected');
					var currentSelect = $(this).find('.js-popup-block').find('.active')
					$(this).find('.js-btn-toggle').attr('data-count', currentSelect.length);
				} else {
					$(this).find('.js-btn-toggle').removeClass('selected');
					$(this).find('.js-btn-toggle').removeAttr('data-count');
				}
			}
		})
		return false;
	})
	
	
	
	
	
	
	$.mask.definitions['N']='[/0-6|9/]';$('input[type="tel"]').mask("+7 (N99) 999-99-99",{placeholder:"+7 (___) ___-__-__"});$('input[type="tel"]').on('click',function(){$(this).setCursorPosition(4);})
$.fn.setCursorPosition=function(pos){this.each(function(index,elem){if(elem.setSelectionRange){elem.setSelectionRange(pos,pos);}else if(elem.createTextRange){var range=elem.createTextRange();range.collapse(true);range.moveEnd('character',pos);range.moveStart('character',pos);range.select();}});return this;};$(document).on('click','.fancy_time',function(e){e.preventDefault();$.fancybox.open($(this).data('fancy'));});$('select.form-select-content').each(function(){let sVal=$(this).val();$('.frm-content-select[data-content="'+sVal+'"]').addClass('active');})
$('select.form-select-content').on('change',function(){$('.frm-content-select[data-content]').removeClass('active');let sVal=$(this).val();$('.frm-content-select[data-content="'+sVal+'"]').addClass('active');})
$('input[data-content]').each(function(){if($(this).is(':checked')){let selectContent=$(this).attr('data-content');$('.frm-content[data-content="'+selectContent+'"]').addClass('active');}})
$('input[data-content]').on('click',function(){$('.frm-content.active').removeClass('active');$('input[data-content]').each(function(){if($(this).is(':checked')){let selectContent=$(this).attr('data-content');$('.frm-content[data-content="'+selectContent+'"]').addClass('active');}})})
if(!!$('.wrap').offset()){var stickyTop=$('.wrap').offset().top;$(window).scroll(function(){var windowTop=$(window).scrollTop();if(stickyTop<windowTop){$('.wrap').addClass('header-fixed');}else{$('.wrap').removeClass('header-fixed');}});}if(!!$('[data-swipebox]').offset()){$('[data-swipebox]').swipebox();}$('.popup-menu-wrap li ul').each(function(){$(this).parent().addClass('submenu');})
$('.popup-menu-wrap li a').on('click',function(){if($(this).next('ul').length>0){if($(window).innerWidth()<1024){if($(this).parent().hasClass('open')){$(this).parent().removeClass('open').children('ul').slideUp(200);}else{$('.popup-menu-wrap li.open').removeClass('open').children('ul').slideUp(200);$(this).parent().addClass('open').children('ul').slideDown(200);}return false;}}})
$('.js-popup-wrap .js-btn-toggle').on('click',function(){if($(this).hasClass('active')){$(this).removeClass('active');$('body').removeClass('menu-show');$('.js-popup-wrap').removeClass('popup-right');}else{$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');$(this).addClass('active');if($(this).parent().hasClass('popup-menu-wrap')){$('body').addClass('menu-show');}pLeft=$(this).parent('.js-popup-wrap').find('.js-popup-block').offset().left;pWidth=$(this).parent('.js-popup-wrap').find('.js-popup-block').outerWidth();pMax=pLeft+pWidth;if(pMax>$('.wrap').width()){$(this).parent('.js-popup-wrap').addClass('popup-right');}else{$('.js-popup-wrap').removeClass('popup-right');}}return false;})
$('.js-popup-wrap .js-btn-close').on('click',function(){$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');$('.js-popup-wrap').removeClass('popup-right');$('body').removeClass('menu-show');return false;})
$(document).click(function(event){if($(event.target).closest(".js-popup-block").length)return;$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');$('.js-popup-wrap').removeClass('popup-right');$('body').removeClass('menu-show');event.stopPropagation();});$('.js-popup-wrap').each(function(){if($(this).hasClass('js-popup-select')){if($(this).find('.js-popup-block').find('.active').length>0){}else{
	if (!$(this).hasClass('select-placeholder')) {$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');}
	}var currentSelect=$(this).find('.js-popup-block').find('.active').html();$(this).find('.js-btn-toggle').html(currentSelect);}})
$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click',function(){if($(this).hasClass('active')){}else{$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');$(this).addClass('active');$('.js-tab-block').removeClass('active');$('.js-tabs-nav').each(function(){$('.js-tab-block[data-tab*="'+$(this).find('.js-popup-block').find('.active').attr('data-tab')+'"]').addClass('active');})}$('.js-popup-wrap').each(function(){if($(this).hasClass('js-popup-select')){if($(this).find('.js-popup-block').find('.active').length>0){}else{
	if (!$(this).hasClass('select-placeholder')) {$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');}
}var currentSelect=$(this).find('.js-popup-block').find('.active').html();$(this).find('.js-btn-toggle').html(currentSelect);}})
$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');return false;})
$('.js-tabs-nav').each(function(){$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');})
$('.js-tab-title').each(function(){if($(this).hasClass('active')){$(this).next('.js-tab-content').show(0);}})
$('.js-tabs-nav').on('click','a[data-tab]',function(){if($(this).hasClass('active')){}else{$('.js-tab-block').removeClass('active');$(this).parents('.js-tabs-nav').find('.active').removeClass('active');$(this).addClass('active');$('.js-tabs-nav').each(function(){$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');})}return false;})
$('.js-tab-title').on('click',function(){if($(this).hasClass('active')){$(this).removeClass('active').next('.js-tab-content').slideUp(200);}else{$(this).addClass('active').next('.js-tab-content').slideDown(200);}})
$('.article-box .main-more-wrap .btn').on('click',function(){$(this).parents('.article-box').addClass('show-all').find('.article-hidden-wrap').slideDown(500);return false;})
if(!!$('.catalog-slider-box').offset()){$('.catalog-slider-box .slider').slick({dots:false,slidesToShow:5,variableWidth:false,infinite:false,adaptiveHeight:true,rows:1,swipeToSlide:true,prevArrow:'<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',nextArrow:'<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',responsive:[{breakpoint:1400,settings:{slidesToShow:4,}},{breakpoint:1024,settings:{swipe:false,variableWidth:true,adaptiveHeight:false,prevArrow:false,nextArrow:false,}},]});}if(!!$('.photos-slider-box').offset()){let pSlider=$('.photos-slider-box .slider-wrap .slider').slick({dots:false,slidesToShow:1,infinite:false,prevArrow:false,nextArrow:false,responsive:[{breakpoint:1400,settings:{prevArrow:'<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',nextArrow:'<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',}},]});let pSliderPreview=$('.photos-slider-box .slider-preview-wrap .slider').slick({dots:false,slidesToShow:5,vertical:true,infinite:true,prevArrow:'<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',nextArrow:'<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',});$('.photos-slider-box .slider-wrap .slider').on('afterChange',function(event,slick,currentSlide,nextSlide){$('.photos-slider-box .slider-preview-wrap .sl-wrap.active').removeClass('active');$('.photos-slider-box .slider-preview-wrap .elm-photo[data-slide="'+currentSlide+'"]').parent().addClass('active');});$('.photos-slider-box .slider-preview-wrap .slider .elm-photo').click(function(){let newSlide=$(this).attr('data-slide');$('.photos-slider-box .slider-preview-wrap .sl-wrap.active').removeClass('active');$(this).parent().addClass('active');$('.photos-slider-box .slider-wrap .slider').slick('slickGoTo',newSlide);return false;})
$('.photos-slider-box .elm-photo[data-slide="0"]').parent('.sl-wrap').addClass('active');}});

