function burgerMenu(selector){
	var menu = $(selector);
	var button = menu.find('.burger-menu__button');
	var links = menu.find('.burger-menu__link');
	var overlay = menu.find('.burger-menu__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());


	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		if (menu.hasClass('burger-menu_active')) {
			const block = $('html').scrollTop();
			$(window).on('scroll', () => $('html').scrollTop(block));
		} 
		else {$(window).off('scroll');}
	}﻿
}

burgerMenu('.burger-menu');

//
$(document).ready(function(){
	
	var navbar = $("#navbar");

	$(window).scroll(function(){
		
		if ($(this).scrollTop() > 58 && navbar.hasClass("default") ){
			navbar.removeClass("default").addClass("fixed");
			} 
			else if ($(this).scrollTop() <= 58 && navbar.hasClass("fixed")) {
				navbar.removeClass("fixed").addClass("default");
			}
	});
});

//
var searchbtn = document.getElementById('search-button');
var searchinp = document.getElementById('search-input');

searchinp.value="";

searchbtn.addEventListener('click', function() {
	if (searchinp.value.trim()) {
	alert('should be set search');
	}
	else {
	searchinp.classList.toggle("dn");
	}
});

//
$("#burger-menu__links .burger-menu__link").click(function(e) {

	$("#burger-menu__links .burger-menu__link").removeClass('active');
	$(this).addClass('active');

});

//
$(document).on('click', '#burger-menu__links .burger-menu__link', function(event){
	event.preventDefault();

	$('html, body').animate({
	scrollTop: $( $.attr(this, 'href') ).offset().top-58
	}, 800);

});
