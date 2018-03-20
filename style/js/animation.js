$(function() {
  // on load. Run al je functies hier
  animate();
  fadeIn(".infocontainer", 1, "0px", "0px");
  fadeIn(".mars-container", 1, "0px", "-37.5px");
  fadeIn(".info", 1, "0px", "0px");
})

function fadeIn(element, opacity, margin, top, transform) {
  // fade in function
  $(element).css({
    opacity: opacity,
    margin: margin,
    top: top,
  })
}

function animate() {
  TweenMax.fromTo(".mars", 1, {
    rotation: 0,
  },
  {
    rotation: 360,
    repeat: -1,
    ease: Linear.easeNone,
  }).timeScale(0.1);
}
