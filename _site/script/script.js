// inicia menu
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// função paralax
function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelectorAll('.header-paralax span');
    scrollPos = window.scrollY;
    if (scrollPos <= 400) {

        headerText.forEach(ht => {

            ht.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
            ht.style.opacity = 1 - (scrollPos / 400);

        })

    }
}

window.addEventListener('scroll', scrollBanner);