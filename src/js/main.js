var lastScrollTop = 0, delta = 15;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return;

    if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
        document.getElementsByTagName("header")[0].className="header-off"
    } else {
        document.getElementsByTagName("header")[0].className=""
    }
    lastScrollTop = scrollTop;
});