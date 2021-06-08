$(document).ready(function () {
    const scrollLink = (element) => {
        $(element).bind("click", function (event) {
            let $anchor = $(this);
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $($anchor.attr("href")).offset().top,
                    },
                    1300,
                    "easeInOutExpo"
                );
            event.preventDefault();
        });
    };

    scrollLink("a.nav__link");
    scrollLink("a.scroll-down");
    scrollLink("a.getInTouch");
});

// Back to to Button
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $(".backtotop").fadeIn(200);
    } else {
        $(".backtotop").fadeOut(200);
    }
});

$(".backtotop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1300, "easeInOutExpo");
    return false;
});

const init = () => {
    const menuToggle = document.querySelector(".navbar-toggler");
    const nav = document.querySelector(".nav");
    const container = document.querySelector(".container__right");
    const navLink = document.querySelectorAll(".nav__link");

    const toggleClass = (event) => {
        // event.preventDefault();
        menuToggle.classList.toggle("closed");
        nav.classList.toggle("closed");
        container.classList.toggle("closed");
    };

    menuToggle.addEventListener("click", toggleClass);

    if (window.matchMedia) {
        // Establishing media check
        const width1024Check = window.matchMedia("(max-width: 1024px)");
        if (width1024Check.matches) {
            navLink.forEach((link) => link.addEventListener("click", toggleClass));
        }
    }
};

// Add Copyright date to footer
const d = new Date();
const year = d.getFullYear();

$("footer .copyright").html(`&copy; Copyright ${year} - All rights reserved.`);

window.addEventListener("load", init);

$(document).ready(function () {
    setTimeout(function () {
        $("body").addClass("loaded");
        // $('h1').css('color','#222222');
    }, 1000);
});
