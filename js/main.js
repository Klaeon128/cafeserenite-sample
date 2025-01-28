$(function () {
  $(document).ready(function () {
    $('.mv__fade-in').fadeIn(1500);
  });

  $(window).on("scroll", function () {
    if ($(window).width() >= 960) {
      if ($(this).scrollTop() > 700) {
        $(".fade-out").fadeOut("fast", function () {
          $(".fade-in").fadeIn(900);
        });
      } else {
        $(".fade-in").fadeOut("fast", function () {
          $(".fade-out").fadeIn(900);
        });
      }
    }
  });

  $(".btn--round").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    const position = $(target).offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      700,"swing"
    );
  });

    $('.toggle-btn').on("click", function () {
      const $header = $('header');
      
      if ($header.hasClass('open')) {
        $header.removeClass('open').addClass('close');
      } else {
        $header.removeClass('close').addClass('open');
      }
    });

    $(window).scroll(function () {
      var scrollAnimationElm = document.querySelectorAll('.scroll_up');
      var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
          var triggerMargin = 100;
          if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
            scrollAnimationElm[i].classList.add('on');
          }
        }
      }
      window.addEventListener('load', scrollAnimationFunc);
      window.addEventListener('scroll', scrollAnimationFunc);
    });

    $(window).scroll(function (){
      $('.blur').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    
          if (scroll > elemPos - windowHeight + 150){
            $(this).addClass('scroll-in');
          }
      });
    });

    $(".menu__slide-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    appendArrows: $('.arrow_box'),
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,  
        settings: {
          slidesToShow: 1
        }
      }
    ]
    }); 
});