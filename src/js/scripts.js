$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$(document).ready(function () {

  $('section.bgParallax').each(function () {
    var $obj = $(this);

    $(window).scroll(function () {
      var yPos = -($(window).scrollTop() / $obj.data('speed'));

      var bgpos = '50% ' + yPos + 'px';

      $obj.css('background-position', bgpos);

    });
  });
});