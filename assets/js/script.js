(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/


	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

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
		let futureDate = new Date("13 April 2021");
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
	/*------------------------------------
        scrollUp
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});




})(jQuery);
