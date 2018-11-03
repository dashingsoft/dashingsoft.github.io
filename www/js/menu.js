document.querySelector('button.navbar-toggler').addEventListener('click', function (e) {
    document.querySelector('div#navbar-main-tab').classList.toggle('show');
    e.stopPropagation();
});

document.addEventListener('click', function (e) {
    document.querySelector('div#navbar-main-tab').classList.remove('show');
});
