const maintitle = document.querySelector(".maintitle");
const header = document.querySelector(".header");
const burger = document.querySelector(".lineneighbour");
const line = document.querySelector(".line")
const artickhover = document.querySelector(".animwrapper")
const faqimage = document.querySelector('.faqimages > img')
const bleft = document.querySelector(".bigtriangleleft")
const bright = document.querySelector(".bigtriangleright")
const langitems = document.querySelector('.languagenavitem')
const tl = document.getElementById("tl")
const tr = document.getElementById("tr")
mini = false

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

}

function burgerClick () {
    line.classList.toggle('clickedburger')
    document.querySelector('.secondbody').classList.toggle('dnone')
    document.querySelector('.wrapnav').classList.toggle('clickedwrapnav')
    langitems.classList.toggle('wrapnavitem')
    tl.classList.toggle('realtriangleright')
    tr.classList.toggle('realtriangleleft')
}

window.onresize = function(event) {
    if (window.innerWidth > 1000) {langitems.classList.add('wrapnavitem')
    document.querySelector('.secondbody').classList.remove('dnone')}
};

document.addEventListener('scroll', scrollign)
burger.addEventListener('click', burgerClick)
