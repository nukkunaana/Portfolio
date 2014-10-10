$(document).ready(function(){
	// источник http://bxslider.com/examples/carousel-demystified
	// включаем плагин по прокрутке фото
	$('.slider1').bxSlider({
	    slideWidth: 200,
	    minSlides: 2,
	    maxSlides: 3,
	    moveSlides: 1,
	    slideMargin: 10,
	    // убираю внизу точки прокрутки
	    pager:false
	});
});