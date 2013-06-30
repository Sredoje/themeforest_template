

$(document).ready(function(){
	var window_height = window.innerHeight;
	console.log(window_height);
	$('#first-section-piture').css({"margin-top" : (window_height - 25) / 100 + "%"});
	$(window).resize(function(){
		var height = window.innerHeight;
		$('#first-section-piture').css({"margin-top" : (height - 25) / 100 + "%"});
		console.log(window_height);
	});

});
