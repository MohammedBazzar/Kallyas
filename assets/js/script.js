document.querySelectorAll('.card-img-top').forEach(img => {
    const originalSrc = img.getAttribute('src');
    const hoverSrc = originalSrc.replace(/(\.[\w\d_-]+)$/i, '_hover$1');
    img.addEventListener('mouseenter', function() {
        img.setAttribute('src', hoverSrc);
    });
    img.addEventListener('mouseleave', function() {
        img.setAttribute('src', originalSrc);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const linksMenu = document.querySelector('.links1');

    burger.addEventListener('click', function () {
        linksMenu.classList.toggle('active');
    });
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.querySelector('.links1').classList.remove('active');
});