$(function () {

	//arctic modal
    $('.call-btn').click(function (e) {
        e.preventDefault();
        $('#callModal').arcticmodal();
    });

    //phone mask
  	$(".phone").mask("+7 (999) 999-9999");

	//hamburger
	$('.menu-open, .menu a').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });

    //slider main
	$('.main').slick({
			dots: true,
			dotsClass: "dots",
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			adaptiveHeight: true,
			autoplay: false,
			autoplaySpeed: 5000,
			nextArrow: '<i class="main-right fa fa-arrow-right" aria-hidden="true"></i>',
			prevArrow: '<i class="main-left fa fa-arrow-left" aria-hidden="true"></i>',
			responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	//sticky navigation
 	$("#navigator").sticky({topSpacing:0});

});