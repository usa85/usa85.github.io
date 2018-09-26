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


(function($){
  'use strict'
   
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

    var colorPalate =$('.color-plate a.single-color');
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
    },3000)
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


               



    //wow js
    new WOW().init();




    
   
})(jQuery);

