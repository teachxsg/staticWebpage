(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


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
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

// This is the code for google appscript

function SubmitSignup() {
    event.preventDefault(); // prevent the form from submitting in the default way
    const formData = new FormData(document.getElementById('signUpForm'));
    const formValues = {};
    for (let entry of formData.entries()) {
        formValues[entry[0]] = entry[1];
    };
    console.log(formValues);
    fetch('https://script.google.com/macros/s/AKfycbwnd5FTbNkpGvHoA4QKIC1oxBLMgV2J6XMPaCY5QL76-Qz7FdPgNX-rL9GWZ_i3SbpL/exec', {
        method: 'POST',
        body: JSON.stringify(formValues)
    })
        .then(response => {
            console.log('Form data sent successfully');
        })
        .catch(error => {
            console.error('Error sending form data:', error);
        });
};
function openWhatsApp() {
    var number = "+6580658664";
    var message = "Hi TeachX, I'm interested in a free trial";
    window.location = "https://api.whatsapp.com/send?phone=" + number + "&text=" + message;
}


function moveToDiv(divId) {
    window.location.href = 'https://teachx.me/index.html#' + divId;
}

function scrollToDiv(divId) {
    const element = document.getElementById(divId);
    if (element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop
        });
    }
}
// Select all elements with class ".prerequesite"
var prerequisiteCards = document.querySelectorAll(".prerequesite");

// Add event listeners to each prerequisite card
prerequisiteCards.forEach(function (card) {
    card.addEventListener("mouseover", showPreRequisite);
    card.addEventListener("mouseout", hidePreRequisite);
});

function showPreRequisite() {
    var preRequisiteElement = this.querySelector(".pre-requisite");
    preRequisiteElement.classList.remove("hide");
    preRequisiteElement.classList.add("showw");
}

function hidePreRequisite() {
    var preRequisiteElement = this.querySelector(".pre-requisite");
    preRequisiteElement.classList.add("hide");
    preRequisiteElement.classList.remove("showw");
}

var whatsappButton = document.getElementById("whatsapp-button");
var isScrolling = false;
var timer = null;

var freetrialButton = document.getElementById("freetrial-button");


window.addEventListener("scroll", function () {
    // clear the timeout on scroll
    clearTimeout(timer);

    // set isScrolling to true
    isScrolling = true;

    // set the button's opacity to 0
    whatsappButton.style.opacity = 0.2;

    // set a timeout to check if the user has stopped scrolling
    timer = setTimeout(function () {
        isScrolling = false;

        // set the button's opacity to 1 if the user has stopped scrolling
        if (!isScrolling) {
            whatsappButton.style.opacity = 1;
        }
    }, 100);
});
 

 
document.addEventListener("DOMContentLoaded", function() {
    var subpointsList = document.querySelectorAll(".subpoints");

    for (var i = 0; i < subpointsList.length; i++) {
        var subpoints = subpointsList[i];
        var parentItem = subpoints.parentNode;

        parentItem.addEventListener("mouseenter", function() {
        var subpoints = this.querySelector(".subpoints");
        subpoints.style.maxHeight = subpoints.scrollHeight + "px";
        });

        parentItem.addEventListener("mouseleave", function() {
        var subpoints = this.querySelector(".subpoints");
        subpoints.style.maxHeight = "0";
        });
    }
    });

 