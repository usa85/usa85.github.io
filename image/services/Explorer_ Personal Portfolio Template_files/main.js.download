/*
Template Name: Explorer: Personal Portfolio Template
Author: Tdrana
Author URI: https://themeforest.net/user/tdrana
Version: 1.0
*/

/*
TABLE OF CONTENTS:
1.COLOR SCHEMES
2.PRELOADER
3.NAVIGATION
    - sticky menu
    - smooth scroll
    - scroll Spy
4.ANIMATION
    - type js
    - wow js
5.SCROLLREVEAL
    - counters
6.CAROUSEL
    - testimonials
7.PORTFOLIO
    - portfolio filter set
    - portfolio isotope
    - portfolio filtering
8.PARTICLES
*/


(function($){ 'use strict'
   
  /*  
  -------------------------------------------
  ----------| COLOR SCHEMES |----------------
  -------------------------------------------
  */

    var colorHandle = $('.color-handle');
    colorHandle.on('click', function(e) {
        $('.color-schemes').toggleClass('show');
    });
    $("#hide").on("click",function() {
       $(".particles-js-canvas-el").hide();
        $("#show").removeClass("color-button");
        $("#hide").addClass("color-button"); 
    });
    $("#show").on("click",function() {
        $(".particles-js-canvas-el").show();
        $("#hide").removeClass("color-button");
        $("#show").addClass("color-button");
    });

    var colorPalate =$('.color-style a.single-color');
    colorPalate.on('click', function(e){
    	e.preventDefault();
    	$('link#colors').attr('href',$(this).attr('href'));
    	return false;
    });

  /*  
  -------------------------------------------
  ----------| PRELOADER |--------------------
  -------------------------------------------
  */
  $(document).ready(function(){
    setTimeout(function(){
      $('body').addClass('loaded');
    },300)
  });
    

  /*  
  -----------------------------------------
  ----------| NAVIGATION |-----------------
  -----------------------------------------
  */
      var win = $(window);
            

      win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $("#pageHeader").addClass("shrink");
        } else {
            $("#pageHeader").removeClass("shrink");
        }
    });

     // Bootstrap Scroll Spy //
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });
    
     // Collapse navigation on click on nav anchor in Mobile //
       
    $(".nav a").on('click', function () {
        $("#myNavbar").removeClass("in").addClass("collapse");
    });

     // navbar Scroll //
     
    $(".navbar-nav li a, .navbar-brand, .button a").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
  
   $(".sidebar-menu ul li a, .side .a-btn").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    
    $('.sidebar-menu .fa-times').on('click', function () {
        $('.sidebar-menu').addClass('hide-menu');
        $('.toggle-menu .fa').removeClass('hide-toggle');
    });
    
    $('.toggle-menu .fa').on('click', function () {
        $('.sidebar-menu').removeClass('hide-menu');
        $(this).addClass('hide-toggle');
    });


               

    /*-------------------------------------------
    ----------| ANIMATION |--------------------
    -------------------------------------------
    */

    //Type js for text animation 
    var element = $(".element");
    $(function() {
      element.typed({
        strings: ["a Web Designer.", "a UI/UX Designer.", "a Photographer." ],
        typeSpeed: 50,
        loop: true,
      });
    });

    //wow js
    new WOW().init();

    /*  
    -------------------------------------------
    ----------| SCROLLREVEAL |-----------------
    -------------------------------------------
    */
   
    //Counter
    $('.counter').counterUp({
      delay: 10,
      time: 200
    });

    /*  
    -------------------------------------------
    ----------| CAROUSEL |---------------------
    -------------------------------------------
    */
   
    //Testimonials
    $("#clients-testimonial").owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      loop: true,
      responsive:{
        0:{
          items:1
        },
        680:{
          items:1
        },
        1000:{
          items:1
        }
      }
    });
         /*-------------------------------------
      Progressbar
  -------------------------------------*/
    $('#html').LineProgressbar({
        percentage: 97,

    });
    $('#php').LineProgressbar({
        percentage: 83,

    });
    $('#bootstrap').LineProgressbar({
        percentage: 91,

    });
    $('#seo').LineProgressbar({
        percentage: 88,

    });
    $('#illustrator').LineProgressbar({
        percentage: 77,

    }); 
       $('#graphics').LineProgressbar({
        percentage: 86,

    }); 

    /*  
    -------------------------------------------
    ----------| PORTFOLIO |--------------------
    -------------------------------------------

    */
         //Protfolio popup
 
    $('.portfolio-gallery-set').magnificPopup({
     type: 'image',
        gallery:{
    enabled:true
    }

    });
       $('.office-img').magnificPopup({
     type: 'image',
        gallery:{
    enabled:true
    }

    });

    //protfolio filter set
    $('.portfolio-filter li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
     
    //protfolio isotope
    var $varPortfolioMasonry = $('.portfolio-masonry');
    if (typeof imagesLoaded == 'function') {
        imagesLoaded($varPortfolioMasonry, function() {
            setTimeout(function() {
                $varPortfolioMasonry.isotope({
                    itemSelector: '.portfolio-item',
                    resizesContainer: false,
                    layoutMode: 'masonry',
                    filter: '*'
                });
            }, 500);

        });
    };
    
   //protfolio filtering
   $('.portfolio-filter').on('click', 'a', function() {
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents('.portfolio-filter-wrap').next().isotope({
            filter: filterValue
        });
    });

    /*  
    -------------------------------------------
    ----------| PARTICLES |--------------------
    -------------------------------------------
    */
    particlesJS('Particle-ground',
  
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#444"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#444"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#444",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "top",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 250,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 600,
              "size": 80,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );

    // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);


})(jQuery);

