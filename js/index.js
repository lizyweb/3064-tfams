document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  
  window.onpageshow = function(event) {
    if (event.persisted) {
      location.reload(); // Reload the page when navigated back to
    }
  };

  const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

function autoPlay() {
  setInterval(() => {
    nextBtn.click();
  }, 3000); // Adjust the interval (in milliseconds) as needed
}

document.addEventListener('click', activate, false);
autoPlay(); // Start autoplay


/*-------------------
		Hero Slider
	-------------------*/
	$('.hero-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		centerMode: true,
		arrows: false,
		asNavFor: '.hero-text-slider',
		autoplay: true,
		pauseOnHover:false,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	var hero_slider = $('.hero-slider');

	hero_slider.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));

	hero_slider.on('click', '.slick-slide', function (e) {
		e.preventDefault();
		var index = $(this).data("slick-index");
		if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
			$('.slick-slider').slick('slickGoTo', index);
		}
	});

	$('.hero-text-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
    arrows: true, // Enable arrows
    prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>',
		asNavFor: '.hero-slider',
	});

  

    
    /*--------------------------
        Videos Slider
    ----------------------------*/
    $(".videos__slider").owlCarousel({
      loop: true,
      margin: 0,
      items: 4,
      dots: false,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true,
      responsive: {
          992: {
              items: 4,
          },
          768: {
              items: 3,
          },
          576: {
              items: 2,
          },
          0: {
              items: 1,
          }
      }
  });

  
});


const glare = new Card3d(document.querySelector(".card"), {
  delta: 10,
  perspective: 500,
  startX: 0,
  startY: 0,
  glareOpacity: 0.5,
  axis: "all",
  scale: 1,
});



