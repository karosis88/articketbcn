alert(window.innerWidth)
const maintitle = document.querySelector(".maintitle");
const header = document.querySelector(".header");
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

document.addEventListener('scroll', scrollign)