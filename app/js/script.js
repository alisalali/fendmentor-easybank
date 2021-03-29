console.log('script run');
const btnHamburger = document.querySelector("#btnHamburger");

const body = document.querySelector('body')
const header = document.querySelector(".header");
const overlay= document.querySelector(".overlay")
const fadeElems =document.querySelectorAll('.has-fade');
header.addEventListener('click',function () {
    console.log('click hambruger');
    if (header.classList.contains('open')) {//close menu
        header.classList.remove('open');
        body.classList.remove('noscroll')
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        
    } else {//open menu
        header.classList.add('open');
        body.classList.add('noscroll')
        fadeElems.forEach(function(element) {
            element.classList.add('fade-in') 
            element.classList.remove('fade-out')
            
            
        });
    }


    // if (overlay.classList.contains('fade-in'))
    // {
    //     overlay.classList.remove('fade-in')
    //     overlay.classList.add('fade-out')
    // }else
    // {

    //     overlay.classList.remove('fade-out')
    //     overlay.classList.add('fade-in')

    // }
})