let inputbox = document.getElementById("value");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons);
let string = "";

buttonArray.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    if (event.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      inputbox.value = string;
    } 
    else if (event.target.innerHTML == "AC") {
      string = "";
      inputbox.value = string;
    } 
    else if (event.target.innerHTML == "=") {
      string = eval(string);
      inputbox.value = string;
    } 
    else {
      string = string + event.target.innerHTML;
      inputbox.value = string;
    }
  });
});
