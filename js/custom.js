$(function(){

    'use strict'; 

    var $nav = $('.menu-bar');
    var $dis = $nav.offset().top;
    var $topbtn = $('.topbtn i');
    var html_body = $('html, body');
 
    //back to top button
    $('.topbtn').on('click', function(){
      
        $('html,body').animate({
            
            scrollTop : 0
            
        } , 1000);

    });
      
      $(window).on('scroll', function(){
          var $scrolling = $(this).scrollTop();
          
         if($scrolling >= $dis){
             $nav.addClass('position-fixed');
         } else{
              $nav.removeClass('position-fixed');
          }

          //back to top button fade in fade out
          if($scrolling >= 200){
              
            $topbtn.fadeIn();
         
        }else{
            $topbtn.fadeOut();
        }
                 
      });

    //animation scroll js
	//a[href*="#"]:not([href="#"])
	
    $('.menu-bar  ul > li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1000);
                return false;
            }
        }
    });
    

    //banner slide
    // $('.banner-slide').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 1000,
    //     fade: true,
    //     autoplaySpeed: 3000,
    //     arrows: false,
    //     dots: true,
    // });

    //screen shots slide
    $('.scrn-slide').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
           
            
          ]
        
    });
 
    //video
    $('.venobox').venobox({
        framewidth: '900px',        
        frameheight: '800px',       
        border: '10px',          
        bgcolor: '#fff', 
        arrowsColor: "transparent",
        spinner: 'rotating-plane',
        spinColor: '#744fa0',
    }); 

    //team slide
    $('.team-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        arrows: false,
        dots: false,
        responsive: [
           
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
          ]
         
    });
 
    //user feed-back slide
    $('#user-feedback .feed-for').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '#user-feedback .feed-img-slide'
    });

    $('#user-feedback .feed-img-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        asNavFor: '#user-feedback .feed-for',
        arrows: false,
        dots: true,
        fade: false,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          },
          
        ]  
    });

    // water ripple in video backgroung
    
    $('.video-bg').ripples({
			resolution: 512,
			dropRadius: 10,
      perturbance: 0.04,
      interactive: true
    });
    
   
});
  