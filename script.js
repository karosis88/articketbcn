alert(window.innerWidth)
const maintitle = document.querySelector(".maintitle");
const header = document.querySelector(".header");
const burger = document.querySelector(".lineneighbour");
const line = document.querySelector(".line")
const artickhover = document.querySelector(".animwrapper")
const faqimage = document.querySelector('.faqimages > img')
const bleft = document.querySelector(".bigtriangleleft")
const bright = document.querySelector(".bigtriangleright")
mini = false

// function bigbtnbordersizes(e) {
//     alert(1)
//     var el = document.querySelector(".bigforwaveanim");
//     var w = '' + el.offsetWidth ;
//     bleft.style.cssText += "border-left:" + w*2/12 +  "px solid transparent;";
//     bleft.style.cssText += "border-right:" + w*4/12 +  "px solid transparent;";
//     bright.style.cssText += "border-left:" + w*4/12 +  "px solid transparent;";
//     bright.style.cssText += "border-right:" + w*2/12 +  "px solid transparent;";
//     }
    
    function scrollign ()
{
    // first event
    let screenpos = maintitle.getBoundingClientRect()
    // console.log(screenpos.top)
    if (screenpos.top < 80) {
        if (!mini) {
            mini = true
            if (window.innerWidth < 1920) {header.classList.toggle('headermini')}
            else {header.classList.toggle('secondheadermini')}
        }
    }

    else {
        if (mini) {
            mini = false
            if (window.innerWidth < 1920) {header.classList.toggle('headermini')}
            else {header.classList.toggle('secondheadermini')}
        }
    }

    // console.log('vbb' + ((659.8/19.7)* window.innerWidth/100))
    // console.log('top' + faqimage.getBoundingClientRect().top) 
    // console.log(faqimage.getBoundingClientRect().bottom - ( (659.8/19.7)* window.innerWidth/100))

    // // second event
    // if (faqimage.getBoundingClientRect().top == faqimage.getBoundingClientRect().bottom) {
    //     alert("yes")
    //     console.log('yesssss')
    // }
}

function burgerClick () {
    line.classList.toggle('clickedburger')
}

document.addEventListener('scroll', scrollign)
burger.addEventListener('click', burgerClick)
