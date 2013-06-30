$(document).ready(function(){
	var element = $('#first-section-piture');
	$(window).resize(function(){
	 	var height = $(window).outerHeight();
		var element_height= element.outerHeight();
		element.css({"margin-top" : (height/2) - (element_height / 1.5) + "px"});
	});

	$(window).resize();
});

// Sticky nav

$(window).load(function(){
  $("#mainnav").sticky({ topSpacing: 0 });
});

// Smooth scroll

$(document).ready(function() {

    $(".scroll-links a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

});


// Selectnav

selectnav('fluid-nav', {
    nested: false,
    label: false
});

selectnav('fixed-nav', {
    nested: false,
    label: false
});


// One Page Navigation

$('#fluid-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 30,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

