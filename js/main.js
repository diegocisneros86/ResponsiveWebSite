'use strict'

jQuery(document).ready(function(){
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
        
    });    

    $('.text').typed({
        strings:["<strong>I love</strong><strong class='primary'> coding.</strong>", "<strong>and to</strong><strong class='primary'> share!!</strong>"],
        typespeed:0,
        loop:true
    })
    
    // cambio de color navbar en scroll
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
    
      // Mgnific Popup
      $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
        }
      });
    
      //Owl carousel
      $('.team-members').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
    
});

