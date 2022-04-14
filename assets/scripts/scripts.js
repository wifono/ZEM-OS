const parallaxElements = [...document.getElementsByClassName('services')];
const boxes = [...document.getElementsByClassName('small-box')];
const main = [...document.getElementsByTagName('main')];


const parallax = function(img) {
    const speed = 3;
    let position = '-' + (window.pageYOffset / speed) + "px";
    img.style.backgroundPosition = `center ${position}`;
}

const divParallax = function(box) {
    const speed = 6;
    let position = '-' + (window.pageYOffset / speed) + "px";
    box.style.top = `${position}`;
}

const mainParallax = function (mainContent) { 
        const speed = 6;
        let position = '-' + (window.pageYOffset / speed) + "px";
        mainContent.style.top = `${position}`;
    }
 

window.addEventListener('scroll', function(e) {
    parallaxElements.forEach((img) => {
        parallax(img);
    });

    boxes.forEach((box) => {
        divParallax(box);
    });

    main.forEach((mainContent) => {
        mainParallax(mainContent);
    });
})

//HAMBURGER MENU

let menuIcon = document.getElementsByClassName('menuicon');
let closeIcon = document.getElementsByClassName('closemenu');
let menu = document.getElementsByClassName('hamburgermenu');


menuIcon[0].addEventListener('click', () => {

if (menu[0].style.display = `none`) {    
    menu[0].style.display = `block`;
}

if (menu[0].style.display = `block`) {
    menuIcon[0].style.display = `none`;
    closeIcon[0].style.display = `block`;
}

closeIcon[0].addEventListener('click', () => {
    
    if(menu[0].style.display = `block`) {
        menu[0].style.display = `none`;
    }
    if(menu[0].style.display = `none`) {
        closeIcon[0].style.display = `none`;
        menuIcon[0].style.display = `block`;
    }
  })  
})

window.addEventListener('resize', () => {
if (window.innerWidth > 750) {
    menu[0].style.display = `none`;
    closeIcon[0].style.display = `none`;
    menuIcon[0].style.display = `none`;
} else {
    menuIcon[0].style.display = `block`;
    closeIcon[0].style.display = `none`;
    menu[0].style.display = `none`;
}
})

let images = [...document.getElementsByClassName('images')];

images.forEach( image => {


 image.addEventListener('click', (e) => {

        let target = e.target;
        let div = document.createElement('div');

        if(typeof(div) != 'undefined' && div != null) {
        div.className = "galleryModal"

        document.body.insertAdjacentElement("afterbegin", div)
        div.insertAdjacentHTML("afterbegin", "<div class='modal-top'><i class='fa-solid fa-xmark' id='close-button'></i></div> <div class='modal-center'><i class='fa-solid fa-angle-left'></i> <img src='https://picsum.photos/1200/800?random=1'> <i class='fa-solid fa-angle-right'></i></div> ")

        let closeButt = document.getElementById('close-button');
        
        closeButt.addEventListener('click', () => {
            console.log("1");
            div.parentNode.removeChild(div);
        })

        } else {
            console.log("hmha")
        }

}
)
})

