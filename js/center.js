

$(document).ready(function(){
	var window_height = $(window).height();
	$('#first-section-piture').css({"margin-top" : (window_height - 25) / 100 + "%"});
	$(window).resize(function(){
		$('#first-section-piture').css({"margin-top" : (window_height - 25) / 100 + "%"});
		console.log(window_height);
	});

});
