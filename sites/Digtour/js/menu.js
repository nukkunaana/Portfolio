$(document).ready(function(){
  // при нажатии на категорию в меню, экран плавно скроллит к соответствующему блоку и появляется кнопка - на вверх.

  // источник http://stackoverflow.com/questions/11340789/make-an-element-visible-only-when-scrolled-down-to-px
  // кнопка прокручивания на вверх
  $('.up').hide();
  var isVisible = false;
  // при указанной высоте появляться (скролл вниз), и исчезать (скролл вверх)
  $(window).scroll(function(){
       var shouldBeVisible = $(window).scrollTop()>550;
       if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $('.up').fadeIn("slow");
       } else if (isVisible && !shouldBeVisible) {
            isVisible = false;
            $('.up').fadeOut("slow");
      }
  });

  // источник http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top}, 1000);
        return false;
      }
    }
  });

});