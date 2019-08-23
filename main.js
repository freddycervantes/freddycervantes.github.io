/* Nav bar function */
window.onscroll = function() {stickyNav()};
let navbar = document.getElementById("myTopnav");
let sticky = navbar.offsetTop;
function stickyNav() {

    let navLogo = document.getElementById('nav-logo');
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navLogo.classList.add("hidden");
    } else {
        navbar.classList.remove("sticky");
        navLogo.classList.remove("hidden");
    }
}

function dropDownMenu() {
    let navbar = document.getElementById("myTopnav");
    let navLogo = document.getElementById("nav-logo");
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
        navLogo.className += " responsive";
    } else {
        navbar.className = "topnav";
        navLogo.className = "logo-img"
    }
}