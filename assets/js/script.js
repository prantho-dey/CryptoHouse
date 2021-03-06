(function ($) {

    'use strict';

	
	// Mobile Menu
	$(".mobile-menu-icon").click(function(){
        $(".mobile-menu").toggleClass("menu-show");
        $(".mobile-menu-icon").toggleClass("slider-show");

    });

	// Language Option Slide
	$(".header-button").click(function(){
        $(".sub-button").slideToggle(400);
    });

	// Sticky Header
	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});

	

	// Count Down 
	let daysItem = document.querySelector("#days");
	let hoursItem = document.querySelector("#hours");
	let minItem = document.querySelector("#min");
	let secItem = document.querySelector("#sec");

	let countDown = () => {
		let futureDate = new Date("20 April 2021");
		let currentDate = new Date();
		let myDate = futureDate - currentDate;

		let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

		let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

		let min = Math.floor(myDate / 1000 / 60) % 60;

		let sec = Math.floor(myDate / 1000) % 60;

		daysItem.innerHTML = days;
		hoursItem.innerHTML = hours;
		minItem.innerHTML = min;
		secItem.innerHTML = sec;
	}
	countDown()
	setInterval(countDown, 1000)



	// Popup Video 
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	 // Accordion 
	 $(".accordion-header").click(function(){
        $(".accordion-header").removeClass("active");
        $(this).addClass("active");
    });


	// Scroll-top-button
	$('.scroll-top-button').click(function(){
		$('html').animate({'scrollTop':'0px'},300);
	});

	$(window).scroll(function(){

		var scroll = jQuery(window).scrollTop();

		if (scroll > 300) {
			$('.scroll-top-button').show();
		}else{
			$('.scroll-top-button').hide();
		}
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});
	


})(jQuery);
