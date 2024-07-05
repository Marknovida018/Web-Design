document.addEventListener("DOMContentLoaded", function(){
// Mobile Nav
    let sideNav = document.querySelectorAll(".sidenav");
    let sideNavInit = M.Sidenav.init(sideNav);

    let carousel = document.querySelectorAll(".carousel");
    let carouselInit = M.Carousel.init(carousel);

    let collapse = document.querySelectorAll(".collapsible");
    let collapseInit = M.Collapsible.init(collapse);
});
