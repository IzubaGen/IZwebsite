/*================================================
[  Table of contents  ]
================================================
# Preloader
# Hero Banner slider v1
# Hero Banner slider v2
# Services slider v1
# Services slider v2
# Project Slider
# Team member slider v1
# Team member slider v2
# Client Testimonial v1
# Client Testimonial v2
# Blog slider v1
# Blog slider v2
# Sticky Header nav v1
# Sticky header nav v2
# Responsive sidebar hamberger menu
# Back to top btn
# Animated Progressbar
# Accordion
# Counter up
# Video popup
# Nice Select
# Date picker
# WOW js
======================================
[ End table content ]
======================================*/

(function ($) {
	"use strict";

    $("body").on("contextmenu",function(e){return false;});
    $(document).keydown(function(e){
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)){return false;}
        if (e.which === 123){return false;}
        if (e.metaKey){return false;}
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {return false;}
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {return false;}
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {return false;}
        if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {return false;}
        if (e.ctrlKey && e.keyCode == 85) {return false;}
        if (event.keyCode == 123) {return false;}
    });

	var windowOn = $(window)

	//Preloader
	setTimeout(function () {
		$('.pre-loader').fadeToggle();
	}, 500);

	//Hero Banner slider v1
	$('.banner-slider').slick({
		prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></span>',
		nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 8000,
		speed: 1000,
	});

	//Hero Banner slider v2
	$('.banner-slider-v2').slick({
		prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></span>',
		nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
		infinite: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 1000,
	});

	//Services slider v1
	$('.service-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		adaptiveHeight: true,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 5000,
		speed: 800,
		responsive: [
			{
				breakpoint: 1051,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//Services slider v2
	$('.services-wraper-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				}
			},
		]
	});


	//Project Slider
	$('.project-slider-wraper').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000,
		dots: false,
		infinite: true,
		pauseOnHover: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		speed: 500,
		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,


				}
			},
		]
	});


	//Team member slider v1
	$('.team-member-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		adaptiveHeight: true,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 5000,
		speed: 800,
		responsive: [
			{
				breakpoint: 1051,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//Team member slider v2
	$('.team-member-slider-v2').slick({
		prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></span>',
		nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		adaptiveHeight: true,
		dots: false,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
		speed: 800,
		responsive: [
			{
				breakpoint: 1051,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//Client Testimonial v1
	$('.testimonial-slider').slick({
		prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></span>',
		nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 800,
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 766,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	//Client Testimonial v2
	$('.testimonial-slider-wraper').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 800,
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 766,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	//Logos slider v1
	$('.logos-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0, // No pause between slides
        cssEase: 'linear', // Continuous sliding effect
        draggable: false,  // Disable mouse dragging
        swipe: false,      // Disable touch swiping
        touchMove: false,  // Prevent touch movements from interrupting scroll
		speed: 3000,
		responsive: [
			{
				breakpoint: 1156,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1155,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	//Blog slider v1
	$('.blog-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 800,
		responsive: [
			{
				breakpoint: 1156,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1155,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//Blog slider v2
	$('.blog-slider-wraper').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 5000,
		speed: 800,
		responsive: [
			{
				breakpoint: 1156,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1155,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//Sticky Header nav v1
	windowOn.scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.sticky-top').css('top', '0px');
		} else {
			$('.sticky-top').css('top', '-120px');
		}
	});

	//Sticky header nav v2
    windowOn.on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".header-nav-v2").removeClass("sticky-header");
        } else {
            $(".header-nav-v2").addClass("sticky-header");
        }
    });

	//Responsive sidebar hamberger menu
	$(".hamberger-icon").click(function () {
		$(".hamberger-icon").toggleClass("active")
	})
	$(".hamberger-icon").click(function () {
		$(".mobile-menu").toggleClass("active")
	})

	//Back to top btn
	let calcScrollValue = () => {
		let scrollProgress = document.getElementById("back-to-topbtn");
		let progressValue = document.getElementById("progress-value");
		let pos = document.documentElement.scrollTop;
		let calcHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		let scrollValue = Math.round((pos * 100) / calcHeight);
		if (pos > 500) {
			scrollProgress.style.display = "grid";
		} else {
			scrollProgress.style.display = "none";
		}
		scrollProgress.addEventListener("click", () => {
			document.documentElement.scrollTop = 0;
		});
		scrollProgress.style.background = `conic-gradient(#1877F2 ${scrollValue}%, #DFDFED ${scrollValue}%)`;
	};
	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;

	//Animated Progressbar
	$(".progress-bar").each(function () {
		$(this)
			.find(".progress-fill")
			.animate(
			{
				width: $(this).attr("data-percentage"),
			},
			3000
		);
		$(this)
			.find(".progress-number-mark")
			.animate(
			{ left: $(this).attr("data-percentage") },
			{
				duration: 3000,
				step: function (now, fx) {
				var data = Math.round(now);
				$(this)
					.find(".percent")
					.html(data + "%");
				},
			}
		);
	});

	//Accordion
	$(".set > a").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this)
				.siblings(".content")
				.slideUp(200);
			$(".set > a i")
				.removeClass("fa-minus")
				.addClass("fa-plus");
		} else {
			$(".set > a i")
				.removeClass("fa-minus")
				.addClass("fa-plus");
			$(this)
				.find("i")
				.removeClass("fa-plus")
				.addClass("fa-minus");
			$(".set > a").removeClass("active");
			$(this).addClass("active");
			$(".content").slideUp(200);
			$(this)
				.siblings(".content")
				.slideDown(200);
		}
	});

	//Counter up init
	$('.timer').counterUp({
		delay: 20,
		time: 2000
	});

	//Video popup magnificPopup init
	$('.video-view').magnificPopup({
		type: 'iframe'
	});

	//Nice Select init
	$('select').niceSelect();

	//Date picker init
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy",
	});

	//WOW js init
	var wow = new WOW({
		boxClass: 'wow', // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: true, // trigger animations on mobile devices (default is true)
		live: true // act on asynchronously loaded content (default is true)
	});
	wow.init();

})(jQuery);

// new Thing...


document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector('.image-container');
    const infoBox = document.querySelector('.info-box');

    infoBox.addEventListener('click', function() {
        if (imageContainer.style.animationPlayState === 'paused') {
            imageContainer.style.animationPlayState = 'running';
        } else {
            imageContainer.style.animationPlayState = 'paused';
        }
    });
});

// submit form thing. 

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            let formData = new FormData(this);
            let formAction = this.getAttribute("action"); // Get the form's action URL

            fetch(formAction, {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    let successMessage = document.createElement("p");
                    successMessage.textContent = "Your message has been sent successfully!";
                    successMessage.style.color = "green";
                    this.appendChild(successMessage);
                    this.reset(); // Clear form fields
                } else {
                    alert("Something went wrong. Please try again.");
                }
            })
            .catch(error => {
                alert("Error submitting form. Please check your internet connection.");
            });
        });
    });
});
