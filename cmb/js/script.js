// Inicia tabs
$(document).ready(function () {
    $('ul.tabs').tabs({
        swipeable: true
    });
});


// Inicializa - navbar
$(".button-collapse").sideNav({
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens,
});

// scroll
var $doc = $('html, body');
$('.menu-item > a').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    $('.button-collapse').sideNav('hide');
    return false;
});


// Paralax
function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('#header-content');
    var bola = document.querySelector('.go-down img')
    var seta = document.querySelector('.seta-go-down');
    scrollPos = window.scrollY;

    if (scrollPos <= 600) {
        headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / 600);
        bola.style.transform = "translateY(" + (-scrollPos / 1.2) + "px" + ")";
        bola.style.opacity = 1 - (scrollPos / 600);
        seta.style.transform = "translateY(" + (-scrollPos / 1.2) + "px" + ")";
        seta.style.opacity = 1 - (scrollPos / 600);
    }
}

window.addEventListener('scroll', scrollBanner);

$(document).ready(function () {
    $('.collapsible').collapsible();
});

// inicializa o select
$(document).ready(function () {
    $('select').material_select();
});

