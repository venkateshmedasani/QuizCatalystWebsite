jQuery(document).ready(function($) {
    $('.slick.marquee').slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var bookButton = document.getElementById("bookaquizbutton");
    var formSection = document.getElementById("bookaquiz");

    bookButton.addEventListener("click", function() {
        formSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var bookButton = document.getElementById("bookaquizbutton2");
  var formSection = document.getElementById("bookaquiz");

  bookButton.addEventListener("click", function() {
      formSection.scrollIntoView({ behavior: "smooth" });
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   const scrollLinks = document.querySelectorAll('a.nav-link[href^="#clients"]');
  
//   scrollLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();
      
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         const offsetTop = target.getBoundingClientRect().top + window.scrollY;
        
//         window.scrollTo({
//           top: offsetTop,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
// });





$(document).ready(function(){
  $(".slider.owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 5000, 
    autoplayHoverPause: true
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonial");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



