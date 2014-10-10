// для страницы Home
$(function() {
    // используем метод (скаченный плагин), и оттуда добавляем нужные опции. Здесь: скорость замены и время показа слайда.
	$(".between_quotes").responsiveSlides({
		speed: 500, 
		timeout: 4000
	});

    // функция активируется, при клике. В Html указаны классы, к которым относятся фразы, появляющиеся в соответствии с тем или иным условием
    // функция проверяет правильность написания е-майла в поле
	$('#btnValidate').click(function(e) {
        var sEmail = $('#txtEmail').val();
        var ok = $(".ok");
        var nope = $(".nope");
        var empty = $(".empty");
        var result = $("#result");

        // в поле ничего нет
        if ($.trim(sEmail).length == 0) {
            // всплывающее окно
            // alert('Please enter valid email address');
            ok.removeClass("display");
            nope.removeClass("display");
            empty.addClass("display");
            //result.append("?");
            e.preventDefault();
        }
        // все хорошо, е-майл правильный
        else if (validateEmail(sEmail)) {
            // alert('Email is valid');
            empty.removeClass("display");
            nope.removeClass("display");
            ok.addClass("display");
            //result.html("Hoooo!!!");
            e.preventDefault();
        }
        // не верно указан е-майл
        else {
            // alert('Invalid Email Address');
            ok.removeClass("display");
            empty.removeClass("display");
            nope.addClass("display");
            //result.append("!");
            e.preventDefault();
        }
    });

});
