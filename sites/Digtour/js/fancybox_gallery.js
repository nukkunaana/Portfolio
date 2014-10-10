$(document).ready(function() {
	// Включает галерею у портфолио
	// плагин http://fancyapps.com/fancybox
	$(".fancybox").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
});