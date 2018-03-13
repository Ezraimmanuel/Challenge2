$(function() {
  // on load. Run al je functies hier
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
