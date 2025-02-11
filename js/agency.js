/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').on('click', function() {
        if ($('.navbar-toggle').is(':visible')) {
            $('.navbar-toggle').click();
        }
    });
});

// Open Portfolio Modal
document.querySelectorAll('.portfolio-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('href');
        const modal = document.querySelector(modalId);

        if (modal) {
            modal.classList.add('modal-open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling on the main page
        }
    });
});

// Close Portfolio Modal
document.querySelectorAll('.close-modal, .btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        const modal = this.closest('.portfolio-modal');

        if (modal) {
            modal.classList.remove('modal-open');
            document.body.style.overflow = 'auto'; // Restore scrolling on the main page
        }
    });
});
