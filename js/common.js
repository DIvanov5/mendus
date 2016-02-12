// Height for bg image

$(document).ready(function() {
	function heightDetect(){
	$(".main_head").css("height", $(window).height());	
	};
	heightDetect()
	$(window).resize(function(){
		heightDetect();
	});

});

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
		$(".top_text").removeClass("h-opacify"); //On menu click, change text opacity
  	$(".top_mnu").fadeOut(600); // Show menu
  	$(".top_mnu li a").removeClass("fadeInUp animated");
  }

  else {
  	$(".top_text").addClass("h-opacify");
  	$(".top_mnu").fadeIn(600);
  	$(".top_mnu li a").addClass("fadeInUp animated");
  };
});
