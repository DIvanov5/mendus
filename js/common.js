// Height for bg image

$(document).ready(function() {

// Main title animation
	$("svg path").animated("fadeIn", "fadeOut");

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

	$(".popup").magnificPopup({type:"image", closeOnContentClick:"true"});

	$(".s_gallery .g_item,.full_gallery .g_item").magnificPopup({
		delegate: "a",
		type: "image",
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: "mfp-with-zoom mfp-img-mobile",
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr("title") + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find("img");
			}
		}
	});

// jqBootstrapValidation

	$("input,select,textarea").jqBootstrapValidation();

// PageScroll
	$(".top_mnu ul li a").mPageScroll2id();


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
		$(".h_title, svg").removeClass("h-opacify");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".h_title, svg").removeClass("h-opacify"); //On menu click, change text opacity
			$(".top_mnu").fadeOut(600); // Hide menu
			$(".top_mnu li a").removeClass("fadeInUp animated");
	}
		else {
			$(".h_title, svg").addClass("h-opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
});