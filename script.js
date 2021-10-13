alert(window.innerWidth)
const maintitle = document.querySelector(".maintitle");
const header = document.querySelector(".header");
const burger = document.querySelector(".lineneighbour");
const line = document.querySelector(".line")
mini = false
function scrollign ()
{
    let screenpos = maintitle.getBoundingClientRect()
    console.log(screenpos.top)
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
}

document.addEventListener('scroll', scrollign)
burger.addEventListener('click', burgerClick)
