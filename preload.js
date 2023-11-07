document.addEventListener("DOMContentLoaded", function() {
    var circles = document.querySelectorAll('.circle');
  
    TweenMax.set(circles, { scale: 0 });
  
    var tl = new TimelineMax();
  
    tl.staggerTo(circles, 1, {
      opacity: 1,
      scale: 1,
      ease: Power1.easeIn
    }, 0.2)
    .staggerTo(circles, 0.5, {
      scale: 1.2,
      boxShadow: '0 25px 25px rgba(0, 0, 0, 0.4)',
      repeat: -1,
      yoyo: true,
      ease: Power1.easeOut
    }, 0.2, '-=0.4');
  });
  