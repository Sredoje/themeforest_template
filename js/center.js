

$(document).ready(function(){
		var height = $(window).outerHeight();
		var element_height= $('#first-section-piture').outerHeight();
		$('#first-section-piture').css({"margin-top" : (height/2) - (element_height/1.5) + "px"});
	$(window).resize(function(){
		height = $(window).outerHeight();
		element_height= $('#first-section-piture').outerHeight();
		$('#first-section-piture').css({"margin-top" : (height/2) - (element_height/1.5) + "px"});

	});

});
