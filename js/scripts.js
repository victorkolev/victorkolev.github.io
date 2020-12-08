/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    $(".nav-link").click(function () {
        // console.log($(".navbar-collapse").hasClass('show'));
        if (!$(".navbar-collapse").hasClass('show')) {
            $("#mainNav").animate({
                paddingBottom: '0rem'
            });
        }
    });

    $(".navbar-toggler").click(function () {
        if (!$(".navbar-collapse").hasClass('show')) {
            $("#mainNav").animate({
                paddingBottom: '6rem'
            }, 25);
        }
        else {
            $("#mainNav").animate({
                paddingBottom: '0rem'
            });
        }
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

function not_shown(elClasses) {
    var i;
    for (i=0; i<elClasses.length; i++) {
        if (elClasses[i] == 'show') {
            return true;
        }
    }
    return false;
}
function expand_hide(text_el, collapsed_id) {
    console.log(text_el, collapsed_id);
    var el = document.getElementById(collapsed_id);
    if (not_shown(el.className.split(" "))) {
        text_el.innerHTML = "<i class='fas fa-chevron-down'></i> Expand <i class='fas fa-chevron-down'></i>";
    }
    else {
        text_el.innerHTML = "<i class='fas fa-chevron-up'></i> Hide <i class='fas fa-chevron-up'></i>";
    }
}

var fm_text = document.getElementById("FM_show_link");
fm_text.onclick = function () {
    var el = document.getElementById("collapseFM");
    if (not_shown(el.className.split(" "))) {
        fm_text.innerHTML = "<i class='fas fa-chevron-down'></i> Expand <i class='fas fa-chevron-down'></i>";
    }
    else {
        fm_text.innerHTML = "<i class='fas fa-chevron-up'></i> Hide <i class='fas fa-chevron-up'></i>";
    }
};
var rsi_text = document.getElementById("RSI_show_link");
rsi_text.onclick = function () {
    var el = document.getElementById('collapseRSI');
    if (not_shown(el.className.split(" "))) {
        rsi_text.innerHTML = "<i class='fas fa-chevron-down'></i> Expand <i class='fas fa-chevron-down'></i>";
    }
    else {
        rsi_text.innerHTML = "<i class='fas fa-chevron-up'></i> Hide <i class='fas fa-chevron-up'></i>";
    }
};
