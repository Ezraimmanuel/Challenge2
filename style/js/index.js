$(function() {
  // on load
  checkTime();
  startTime();
  setDate();
  animation();
})


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m;
  t = setTimeout(function() {
    startTime()
  }, 500);

  if (h > 7) {
    document.body.style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
    $('.infocontainer').css({
      backgroundColor: "rgb(255,255,255)",
      color: "black",

    });
  }
  if (h > 17) {
    document.body.style.backgroundColor = 'rgb(' + 129 + ',' + 129 + ',' + 129 + ')';
    $('.infocontainer').css({
      backgroundColor: "rgb(129,129,129)",
      color: "white",

    });
  }
  if (h > 22 || h < 7) {
    document.body.style.backgroundColor = 'rgb(' + 33 + ',' + 33 + ',' + 33 + ')';
    $('.infocontainer').css({
      backgroundColor: "rgb(33,33,33)",
      color: "white",

    });
  }
}

function setDate() {
  var d = new Date();
  document.getElementById("date").innerHTML = d.toDateString();
}

function animation() {
  $("body").css({
    opacity: 1,
  });
}
