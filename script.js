var sec = 0;
var min = 0;
var hr = 0;
var interval;

function start() {
  interval = setInterval(conter, 1000);
}
function stop() {
  clearInterval(interval);
}
function reset() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  document.getElementById("counter").innerHTML = "00:00";
}
function conter() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      min = 0;
      sec = 0;
      hr++;
    }
  }
  document.getElementById("counter").innerHTML = hr + ":" + min + ":" + sec;
}
