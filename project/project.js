// declaring variables corresponding to their respective id's
let menuButton = document.querySelector("#menu-button");
let sidenav = document.querySelector("#sidenav");
let pageMask = document.querySelector("#page-mask");


/*
showNav takes no arguments.
The function will add the "show" class to #sidenav, activating those
properties, essentially setting the position of #sidenav for when it appears.
Set the overflow to hidden to prevent scrolling on the main page.
Add the "show" class to #page-mask, to darken the main page when the #sidenav
is visible.
*/
function showNav() {
  sidenav.classList.add("show");
  document.body.style.overflow = "hidden";
  pageMask.classList.add("show");
}


/*
hideNav takes no arguments.
Basically undos everything from showNav.
Removes the "show" class from #sidenav and #page-mask to make both disappear.
Set the overflow to auto to resume scrolling (if necessary) on the main page.
*/
function hideNav() {
  sidenav.classList.remove("show");
  pageMask.classList.remove("show");
  document.body.style.overflow = "auto";
}


// When the #menuButton is clicked, showNav will execute
// The side navigation will appear
menuButton.addEventListener("click", showNav, false);

// When anywhere in #sidenav is clicked, hideNav will execute
// The side navigation will disappear
sidenav.addEventListener("click", hideNav, false);
