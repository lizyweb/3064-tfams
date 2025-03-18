document.addEventListener('DOMContentLoaded', () => {
  "use strict";


  // Vendor carousel
  $('.vendor-carousel').owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:4
        },
        768:{
            items:5
        },
        992:{
            items:6
        }
    }
});

  // Spinner
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();

  // Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
  

   /*------------------
        Background Set
    --------------------*/
    $('.set-bgs').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
  });

  /*------------------
        Video Popup
    --------------------*/
    $('.video-popups').magnificPopup({
      type: 'iframe'
  });


  //Masonary
  $('.work__gallery').masonry({
      itemSelector: '.work__item',
      columnWidth: '.grid-sizer',
      gutter: 10
  });

  (function ($) {
    
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#robertoNav').classyNav();
    }

    })(jQuery);

});

document.addEventListener("DOMContentLoaded", function () {
  // Create a new button element
  var closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "close d-flex align-items-center justify-content-center";
  closeButton.setAttribute("data-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  // Create an icon element for the close button
  var closeIcon = document.createElement("i");
  closeIcon.className = "bx bx-x";
  closeIcon.setAttribute("aria-hidden", "true");

  // Append the icon to the button
  closeButton.appendChild(closeIcon);

  // Add styles to make the button white
  closeButton.style.color = "#ffffff"; // White color
  closeButton.style.backgroundColor = "transparent"; // Transparent background

  // Find the modal content and append the close button
  var modalContent = document.querySelector("#exampleModal .modal-content");
  if (modalContent) {
      modalContent.insertBefore(closeButton, modalContent.firstChild);

      // Attach a click event listener to close the modal
      closeButton.addEventListener("click", function () {
          $('#exampleModal').modal('hide');
      });
  }
});
