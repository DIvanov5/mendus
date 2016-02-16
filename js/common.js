// Height for bg image

$(document).ready(function() {

// Main title animation
	$(".h_title h1, svg path").animated("fadeIn", "fadeOut");

// Section title animation
	$(".section_header").animated("fadeInUp", "fadeOutUp");

// Section content animation
	
	$(".animation_1").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_2").animated("fadeInRight", "fadeOutRight");
	$(".animation_3").animated("zoomIn", "zoomOut");
	
	function heightDetect(){
	$(".main_head").css("height", $(window).height());	
	};
	heightDetect()
	$(window).resize(function(){
		heightDetect();
	});

// Popup plagin

	$(".popup").magnificPopup({type:"image"});

// Preload function

	$(window).load(function() { 
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
	});

// Menu

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

//Hide menu when click on menu item

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".h_title, svg").removeClass("h-opacify"); //On menu click, change text opacity
			$(".top_mnu").fadeOut(600); // Show menu
			$(".top_mnu li a").removeClass("fadeInUp animated");
	}
		else {
			$(".h_title, svg").addClass("h-opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
});