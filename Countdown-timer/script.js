const endDate = "15 july 2025 07:00:00 PM";
document.getElementById("our-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input");

function timer() {
  const end = new Date(endDate);
  const now = new Date();

  //   const diff = end - now
  // jo difference aaya hai woh milisecond mein hai usko second mein krne ke liye 1000 se divide krenge

  const diff = (end - now) / 1000;
  //   console.log(diff);
  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24); // convert into days
  inputs[1].value = Math.floor(diff / 3600) % 24; // convert into hour
  inputs[2].value = Math.floor(diff / 60) % 60; // convert into mins
  inputs[3].value = Math.floor(diff) % 60; // convert into sec
}

setInterval(() => {
  timer();
}, 1000);

// logic Unit

/*
- 1 day = 24 hours
- 1 hour = 60 mins
- 60 min = 3600 sec
- 1 min = 60 sec
*/
