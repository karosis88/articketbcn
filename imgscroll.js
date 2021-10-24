
window.onscroll = function() {
    var widthwindow = window.innerWidth;

    if (widthwindow > 1100) {
    var distfromtop = document.querySelector('.faqimages').offsetTop;
    var elementwidth = document.querySelector('.fqimageswrapper').scrollWidth;
    var disttoscroll = distfromtop + elementwidth - widthwindow;




    document.querySelector('.faqimages').style.height = (elementwidth-600) + 'px';
    var topdist = window.pageYOffset

    // console.log('topdist')
 
    if (topdist >= distfromtop && topdist <= disttoscroll +100) {
        var transformpx = topdist-distfromtop
        document.querySelector('.fqimageswrapper').style.transform = 'translateX(-' + transformpx + 'px)'
        // alert(topdist)
        // alert(disttoscroll)
        // alert(document.querySelector('.faqimages').style.transform)
    }
}
}


