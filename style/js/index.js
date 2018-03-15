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
  }
  if (h > 17) {
    document.body.style.backgroundColor = 'rgb(' + 129 + ',' + 129 + ',' + 129 + ')';
  }
  if (h > 22) {
    document.body.style.backgroundColor = 'rgb(' + 33 + ',' + 33 + ',' + 33 + ')';
  }
}
startTime();

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();
