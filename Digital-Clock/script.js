function Clock() {
  let Hours = document.getElementById("Hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let period = document.getElementById("period");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12; // 24 hours format
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (s < 10) {
    s = "0" + s;
  }
  Hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  period.innerHTML = ampm;
}

setInterval(Clock, 1000);
