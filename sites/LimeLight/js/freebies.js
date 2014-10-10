$(function () { 
	// при нажатии на изображение с иконками и с его текстом, отправлял нас на ссылку с этими иконками
	$(".line_bit").click(function () {   
	// мы выбрали контейнер - это доллар , так как язык джиэс и в скобках пишем селлект как в сиэсэс и применяем функцию,
		var link = $(this).attr("data-link"); 
		// создаем переменную, где указыкаем что именно она обозначает , тоже доллках джиэс и  внутри селлек как в сиэсэс, далее какой именно нужный атрибут, типа имг или линк,
		if (link != null) {
			window.location = link;
			// выводит ссылку в этом же окне
		}
	});

	$(".active").slideDown(1500);

	var go_action = false;


	// при нажатии на категорию, функция показывает соответствующее содержимое , при этом скрывая не нужное. Плюс, окно не выплывает наверх, а остается статично. Плюс, красим в зеленый название той категории в которой находимся.
	$("#select_category a").click(function(event){
		event.preventDefault();
		// действует анимация по всерствованию и открыванию ссылки в это время ничего не делается
		if (go_action == false) {
			// ввели переменную, которую используем, как "якорь" , т.е. мы понимаем по ней происходит ли у нас анимация или нет.
			// Если анимации нет, то мы можем позволить ей начать совершаться.
			// Если она имеет значение trye, то ничего не делаем так как в функции нет условия для совершения ее
			go_action = true;
			var viewCat = $(this).attr("data-linkCategory");
			var category_container = $(".body_img[data-category=" + viewCat+ "]");
			var active = $(".active");
			var category = $("#select_category");
			// включай анимацию по сворачиванию и открыванию, если ты выбрал не текущую категорию
			if (!category_container.hasClass("active")) {
				category.addClass("opacity default_cursor");
				active.removeClass("active");
				category_container.addClass("active");
				active.slideUp(1500, function(){
					category_container.slideDown(1500, function(){
						// тут снова переменной задаем значение false, мол анимация закончилась и есть готовность начать ее, а не делать все параллельно
						go_action = false;
						category.removeClass("opacity default_cursor");
					});
					
				});

			}
			$("#select_category a").removeClass("green_font");	
			$(this).addClass("green_font");
		}
	}); 
	
	// при навелении курсора на изображение всплывает серенький бокс с парметрами
	$(".imgHover").hover(function() {
		$(this).children(".hhh").stop().slideDown(400);
		// show();
		 }, function() {
		$(this).children(".hhh").stop().slideUp(400);
		// hide();
	});

});

// $(".imgHover").hover(function() {
//     $(this).children("img").fadeTo(200, 0.25)
//            .end().children(".hover").show();
// }, function() {
//     $(this).children("img").fadeTo(200, 1)
//            .end().children(".hover").hide();
// });

// $(".imgHover").hover(function() {
// 	$(this).children(".hhh").show();
// 	// slideUp(400);
// }, function() {
// 	$(this).children(".hhh").hide();
// 	// slideDown(400);
// });


	// slideUp(400);
// }, function() {
// 	$(".hhh").hide();
	// slideDown(400);
