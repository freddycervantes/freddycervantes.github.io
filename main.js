// /* Nav bar function */
// window.onscroll = function() {stickyNav()};
// let navbar = document.getElementById("myTopnav");
// let sticky = navbar.offsetTop;
// function stickyNav() {
//
//     let navLogo = document.getElementById('nav-logo');
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//         navLogo.classList.add("hidden");
//     } else {
//         navbar.classList.remove("sticky");
//         navLogo.classList.remove("hidden");
//     }
// }
//
// function dropDownMenu() {
//     // console.log("I ran!s")
//     let navbar = document.getElementById("myTopnav");
//     let navLogo = document.getElementById("nav-logo");
//     if (navbar.className === "topnav" || navbar.className === "topnav sticky") {
//         navbar.className += " responsive";
//         navLogo.className += " responsive";
//     } else {
//         if (navbar.className === "topnav sticky responsive") {
//             navbar.className = "topnav sticky";
//         } else {
//             navbar.className = "topnav";
//         }
//
//         navLogo.className = "logo-img"
//     }
// }

// // Sticky Header
// window.onscroll = function() {
//     let nav = document.getElementsByClassName('main_h');
//     if (window.scrollY > 400) {
//         console.log("I am here");
//         nav.className += ' sticky';
//     } else {
//         nav.className = 'main_h'
//     }
// };


$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});