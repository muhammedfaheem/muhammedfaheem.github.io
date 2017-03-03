    var headerHeight = $("header").outerHeight();

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - headerHeight
      }, 1000);
      return false;
    }
  }
});

window.onscroll = fadeNav;

function fadeNav(){
    var offset = getScrollXY();
    offset[1] > 0 ? setNavOpacity(0.6) : setNavOpacity(1.0);
}
function setNavOpacity(newOpacity){
    var navBar = document.getElementById("header_bar");
    navBar.style.opacity = newOpacity;
}
function getScrollXY() {
  var scrOfX = 0, scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return [ scrOfX, scrOfY ];
}

$( ".header" )
  .mouseenter(function() {
    $(this).fadeTo(200, 1);
  })
  .mouseleave(function() {
    $(this).fadeTo(200, 0.6);
  });