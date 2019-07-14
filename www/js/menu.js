document.querySelector('button.navbar-toggler').addEventListener('click', function (e) {
    document.querySelector('div#navbar-main-tab').classList.toggle('show');
    e.stopPropagation();
});

document.addEventListener('click', function (e) {
    document.querySelector('div#navbar-main-tab').classList.remove('show');
});

if (document.querySelector('.carousel-control-prev')) {
    document.querySelector('.carousel-control-prev').addEventListener('click', function (e) {
        e.currentTarget.parentElement.firstElementChild.scrollLeft += 100;
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function (e) {
        e.currentTarget.parentElement.firstElementChild.scrollLeft -= 100;
    });
}
