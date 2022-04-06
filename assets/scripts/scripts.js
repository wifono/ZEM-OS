const parallaxElements = [...document.getElementsByClassName('services')];

console.log(parallaxElements);

const parallax = function(img) {
    const speed = 3;
    let position = '-' + (window.pageYOffset / speed) + "px";
    img.style.backgroundPosition = `center ${position}`;
}

window.addEventListener('scroll', function(e) {
    parallaxElements.forEach((img) => {
        parallax(img);
    }) 
})
