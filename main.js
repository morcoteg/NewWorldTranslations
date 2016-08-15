$(document).ready(function () {
  function scrollToSection(aid){
    var aTag = $("section[id='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  $(".about").click(function(e) {
    e.preventDefault();
    scrollToSection('about');
  });

  $(".exp").click(function(e) {
    e.preventDefault();
    scrollToSection('experience');
  });

  $(".contact").click(function(e) {
    e.preventDefault();
    scrollToSection('contact');
  });


  $(window).scroll(function() {
    if ( $(this).scrollTop() > ($('section[id="about"]').offset().top - 175) && $(this).scrollTop() < $('section[id="experience"]').offset().top ) {
       $('.about').addClass('active');
       $('.exp').removeClass('active');
       $('.contact').removeClass('active');
    }

    if ( $(this).scrollTop() > ($('section[id="experience"]').offset().top - 70) && $(this).scrollTop() < $('section[id="contact"]').offset().top ) {
       $('.exp').addClass('active');
       $('.about').removeClass('active');
       $('.contact').removeClass('active');
    }

    if ( $(this).scrollTop() > ($('section[id="contact"]').offset().top - 70) ) {
      $('.contact').addClass('active');
      $('.exp').removeClass('active');
      $('.about').removeClass('active');
    }

  });

});
