// Height for bg image
<<<<<<< HEAD

=======
>>>>>>> d7668671d8e037173225b8c8c1b0dff81acaf3c8
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
<<<<<<< HEAD

=======
>>>>>>> d7668671d8e037173225b8c8c1b0dff81acaf3c8
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

// Menu
<<<<<<< HEAD

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
=======
$(".toggle_mnu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
  	$(".top_mnu").fadeOut(600);
  }
  else {
  	$(".top_mnu").fadeIn(600);
  };
});
>>>>>>> d7668671d8e037173225b8c8c1b0dff81acaf3c8
