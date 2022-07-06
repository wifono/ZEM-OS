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

    // main.forEach((mainContent) => {
    //     mainParallax(mainContent);
    // });
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

const menuAnchor = document.querySelectorAll('.hamburgermenu > ul > li')

menuAnchor.forEach( a => a.addEventListener("click", (e) => {
    menu[0].style.display = `none`;
    closeIcon[0].style.display = `none`;
    menuIcon[0].style.display = `block`
}))

window.addEventListener('resize', () => {
if (window.innerWidth > 870) {
    menu[0].style.display = `none`;
    closeIcon[0].style.display = `none`;
    menuIcon[0].style.display = `none`;
} else {
    menuIcon[0].style.display = `block`;
    closeIcon[0].style.display = `none`;
    menu[0].style.display = `none`;
}
})

// let images = [...document.getElementsByClassName('images')];

// images.forEach( image => {


//  image.addEventListener('click', (e) => {

//         let target = e.target;
//         let div = document.createElement('div');

//         if(typeof(div) != 'undefined' && div != null) {
//         div.className = "galleryModal"

//         document.body.insertAdjacentElement("afterbegin", div)
//         div.insertAdjacentHTML("afterbegin", "<div class='modal-top'><i class='fa-solid fa-xmark' id='close-button'></i></div> <div class='modal-center'><i class='fa-solid fa-angle-left' id='left-arrow'></i>  <img src='"+ e.target.src +"'> <i class='fa-solid fa-angle-right' id='right-arrow'></i></div> ")



//         let closeButt = document.getElementById('close-button');
        
//             console.log(e.target.src.split("?")[1]);


//         closeButt.addEventListener('click', () => {
//             div.remove();
//         })

//         let left = document.getElementById('left-arrow');
//         let right = document.getElementById('right-arrow');
//         let imagesList = [document.getElementsByClassName('images')];
        
//         left.addEventListener('click', (e) => {

//             let imgOnModal = document.getElementsByClassName("modal-center")[0].children[1]
            
//             let oldImgUrl =  imgOnModal.src.split("=")[1]


//             console.log(oldImgUrl + 1);

//             console.log(imgOnModal.src = imgOnModal.src + imgOnModal.src.split("=")[1] + "1")

            
            
//         })

//         right.addEventListener('click', () => {
//             console.log("right")
//         })

//         } else {
//             console.log("hmha")
//         }

// }
// )
// })

// let bobcatBox = document.getElementById("bobcatBox");
// let bobcatTitle = document.getElementById("bobcat");
// let bobcatSpec = document.getElementById("bobcatSpec");

// bobcatBox.addEventListener("mouseover", () => {
//     bobcatTitle.style.position = `relative`
//     bobcatTitle.style.top = `-5.5em`;
//     bobcatTitle.style.width = `100%`;

//     bobcatSpec.style.display = `block`;
//     bobcatSpec.style.margin = `0 0 0 -25.5em`
// })

// bobcatBox.addEventListener("mouseleave", () => {
//     bobcatTitle.style.top = `0`;

//     bobcatSpec.style.display = `none`
// })

if(window.location.pathname === "/index.html" || window.location.pathname === "/") {
   
    let serviceMenuButton = document.getElementById("smb");
    let serviceArticle = document.getElementById("sluzby");

    serviceMenuButton.addEventListener('click', (e) => {
        e.preventDefault();
        serviceArticle.scrollIntoView();
    })

    let contactMenuButton = document.getElementById("cmb");
    let contactArticle = document.getElementById("contactArticle");

    contactMenuButton.addEventListener("click", (e) => {
        e.preventDefault();
        contactArticle.scrollIntoView();
    })

    let homeMenuButton = document.getElementById("hmb");
    let homeArticle = document.getElementById("homeArticle");

    homeMenuButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    })

    const sections = document.querySelectorAll("section");
const anchor = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if( pageYOffset > (sectionTop - sectionHeight / 3)){
            current = section.getAttribute("id");

        }
    })

    anchor.forEach(a => {
        a.classList.remove("active");
        if( a.classList.contains(current)) {
            a.classList.add("active");
        }
    })
})
}

if(window.location.pathname !== "/index.html" && window.location.pathname !== "/") {

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    };
})
}