(function ($) {
	"use strict";

	/*[ Load page ]
    ===========================================================*/
	$(".animsition").animsition({
		inClass: "fade-in",
		outClass: "fade-out",
		inDuration: 1500,
		outDuration: 800,
		linkElement: ".animsition-link",
		loading: true,
		loadingParentElement: "html",
		loadingClass: "animsition-loading-1",
		loadingInner: '<div class="loader05"></div>',
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ["animation-duration", "-webkit-animation-duration"],
		overlay: false,
		overlayClass: "animsition-overlay-slide",
		overlayParentElement: "html",
		transition: function (url) {
			window.location.href = url;
		},
	});

	    /*==================================================================
    [ Fixed Header ]*/
    var wrapMenu = $('.wrap-menu-desktop');
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 50) {
            $(wrapMenu).css('background-color','#fff'); 
        }  
        else {
			$(wrapMenu).css('background-color','transparent'); 
        } 
    });

    /*==================================================================
	[ Menu mobile ]*/
	
    $('.btn-show-menu-mobile').on('click', function(){
		$(this).toggleClass('is-active');
		$('.menu-mobile').toggleClass('show');
	});


	  $('.swiper-wrapper').each(function () {
		$('.swiper-slide').on('click',function () {
			$(this).addClass('active').siblings().removeClass('active');
			var slide = $(this).data('slide');
			if (slide == '2') {
				$('.slide-picture').css('left','-100%');
				$('#text-hero').text('Kayu-Kayu Resto');
			}else if(slide == '3'){
				$('.slide-picture').css('left','-200%');
				$('#text-hero').text('Novhotel');
			}else{
				$('.slide-picture').css('left',0);
				$('#text-hero').text('Shangrila Hotel');
			}
		})
	  });



	  



})(jQuery);
